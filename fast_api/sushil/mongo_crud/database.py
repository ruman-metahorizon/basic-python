import motor.motor_asyncio
from bson.objectid import ObjectId

conn = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(conn)

database = client.users

user_collection = database.get_collection("users_collection")

def user_helper(user) -> dict:
    return{
        "id": str(user["_id"]),
        "name":user["name"],
        "email":user["email"],
        "is_active":user["is_active"]
    }

async def retrieve_users():
    users =[]
    async for user in user_collection.find():
        users.append(user_helper(user))
    return users

async def add_user(user_data:dict) ->dict:
    user = await user_collection.insert_one(user_data)
    new_user = await user_collection.find_one({"_id": user.inserted_id})
    return user_helper(new_user)

async def retrieve_user(id:str) -> dict:
    user = await user_collection.find_one({"_id":ObjectId(id)})
    if user:
        return user_helper(user)
    
async def update_user(id:str, data: dict):
    if len(data) <1:
        return False
    user = await user_collection.find_one({"_id":ObjectId(id)})
    if user:
        updated_user = await user_collection.update_one({"_id":ObjectId(id)}, {"$set": data})
    if update_user:
        return True
    return False

async def delete_user(id:str):
    user = await user_collection.find_one({"_id":ObjectId(id)})
    if user:
        await user_collection.delete_one({"_id":ObjectId(id)})
        return True