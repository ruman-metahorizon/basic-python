from pymongo import MongoClient

client = MongoClient("mongodb+srv://Laciann:worksmart8@cluster0.we5f2vb.mongodb.net/?retryWrites=true&w=majority")

db = client.todo_db

collection_name = db["todo_collection"]