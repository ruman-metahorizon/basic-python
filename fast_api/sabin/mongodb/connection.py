from pymongo import MongoClient
import settings

client = MongoClient(settings.mongodb_uri)
db = client['customerdata']