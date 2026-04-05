from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import httpx
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Load .env if it exists (primarily for local testing)
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# Google Sheets webhook URL (Now Mandatory)
GOOGLE_SHEETS_WEBHOOK_URL = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL', '')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    insurance_product: str
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class LeadCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str
    phone: str
    insurance_product: str
    message: Optional[str] = None


async def push_to_google_sheets(lead_data: dict):
    """Push lead data to Google Sheets via Apps Script webhook"""
    if not GOOGLE_SHEETS_WEBHOOK_URL:
        logger.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured.")
        return
    
    try:
        async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client_http:
            response = await client_http.post(
                GOOGLE_SHEETS_WEBHOOK_URL,
                json={
                    "name": lead_data["name"],
                    "phone": lead_data["phone"],
                    "insurance_product": lead_data["insurance_product"],
                    "message": lead_data.get("message", ""),
                    "timestamp": lead_data.get("created_at", datetime.now(timezone.utc).isoformat()),
                },
            )
            response.raise_for_status()
            logger.info(f"Lead pushed in background to Google Sheets: {lead_data['name']}")
    except Exception as e:
        logger.error(f"Background push to Google Sheets failed: {e}")


# Routes
@api_router.get("/")
async def root():
    return {"message": "Insurrica API (Google Sheets Only)"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate, background_tasks: BackgroundTasks):
    lead_obj = Lead(**input.model_dump())
    doc = lead_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    # 1. Start the Google Sheets push in the background
    background_tasks.add_task(push_to_google_sheets, doc)
    
    # 2. Add an intentional 0.5s delay for a smoother UI experience as requested
    await asyncio.sleep(0.5)
        
    return lead_obj

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    # Since MongoDB is removed, we return an empty list or inform the user
    logger.warning("GET /leads called but MongoDB is removed.")
    return []

@api_router.get("/leads/count")
async def get_leads_count():
    # Fallback to a static or empty count
    return {"count": 0, "storage": "google_sheets_only"}


# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
