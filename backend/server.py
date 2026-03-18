from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Google Sheets webhook URL (optional)
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
    name: str
    phone: str
    insurance_product: str
    message: Optional[str] = None


async def push_to_google_sheets(lead_data: dict):
    """Push lead data to Google Sheets via Apps Script webhook"""
    if not GOOGLE_SHEETS_WEBHOOK_URL:
        return
    try:
        async with httpx.AsyncClient(timeout=10.0) as client_http:
            await client_http.post(
                GOOGLE_SHEETS_WEBHOOK_URL,
                json={
                    "name": lead_data["name"],
                    "phone": lead_data["phone"],
                    "insurance_product": lead_data["insurance_product"],
                    "message": lead_data.get("message", ""),
                    "timestamp": lead_data.get("created_at", datetime.now(timezone.utc).isoformat()),
                },
            )
            logger.info(f"Lead pushed to Google Sheets: {lead_data['name']}")
    except Exception as e:
        logger.error(f"Failed to push to Google Sheets: {e}")


# Routes
@api_router.get("/")
async def root():
    return {"message": "Insurrica API"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    lead_obj = Lead(**input.model_dump())
    doc = lead_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    # Push to Google Sheets in background (non-blocking)
    import asyncio
    asyncio.create_task(push_to_google_sheets(doc))
    return lead_obj

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).to_list(1000)
    for lead in leads:
        if isinstance(lead.get('created_at'), str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    return leads

@api_router.get("/leads/count")
async def get_leads_count():
    count = await db.leads.count_documents({})
    return {"count": count}


# Include the router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
