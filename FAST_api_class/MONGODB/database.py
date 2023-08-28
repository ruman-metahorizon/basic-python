from pymongo.mongo_client import MongoClient

client = MongoClient("mongodb+srv://carolacharya1:1234@cluster10.upufltj.mongodb.net/?retryWrites=true&w=majority")

#CONNECT CLIENT WITH MONGOCOMPASS

db = client.todo_application

# MAKE CLIENT CONNECTION


collection_name =db["todos_app"]