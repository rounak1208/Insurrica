from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
print(f"Connecting to {mongo_url}...")
try:
    client = MongoClient(mongo_url, serverSelectionTimeoutMS=2000)
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(f"Error: {e}")
