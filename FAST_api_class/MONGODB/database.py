from pymongo.mongo_client import MongoClient

client = MongoClient("mongodb+srv://carolacharya1:1234@cluster10.upufltj.mongodb.net/?retryWrites=true&w=majority")

db = client.todo_application

collection_name =db["todos_app"]