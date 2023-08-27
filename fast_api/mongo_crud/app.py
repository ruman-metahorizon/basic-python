from fastapi import FastAPI
import motor.motor_asyncio
from route import router as UserRouter

conn="mongodb://localhost:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(conn)

database = client.users

user_collection = database.get_collection("users_collection")

app = FastAPI()
app.include_router(UserRouter, tags=["User"],prefix="/user")

@app.get("/",tags=["Root"])
async def read_root():
    return {"message":"Welcome!"}