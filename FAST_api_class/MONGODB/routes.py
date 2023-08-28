from fastapi import APIRouter
from database import collection_name
from models import Todo
from schemas import *
from bson import ObjectId

todo_api_router =APIRouter()

#PROVIDDE ROUTES 
#retrieve

@todo_api_router.get('/')
async def get_todos():
    todos=todos_serializer(collection_name.find())
    return{'status':'OK','data':todos}

@todo_api_router.get('/{id}')
async def get_todo(id: str):
    todo= todos_serializer(collection_name.find({'_id':ObjectId(id)}))
    return{'status':'OK','data':todo}

#POST
@todo_api_router.post('/')
async def post_todo(todo:Todo):
    _id=  collection_name.insert_one(dict(todo))
    todo= todos_serializer(collection_name.find({'_id':_id.inserted_id})) 
    return{'status':'OK','data':todo}



















