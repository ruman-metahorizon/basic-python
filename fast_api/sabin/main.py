from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()

# Define a User Model
class User(BaseModel):
    name: str
    age: int = None
    email: str = None

# In-memory "database" to store user data
users_db = [{"name": "sabin",
             "age": 20,
             "email": "sabin@gmail.com"}]

# CRUD

# create a new user with details
@app.post("/users/")
async def create_user(user: User):
    users_db.append(user)
    return user

# get a user by ID
@app.get("/users/{user_id}")
async def read_user(user_id: int):
    return users_db[user_id]

# Update user information
@app.put("/users/{user_id}")
async def update_user(user_id: int, user: User):
    users_db[user_id] = user_id
    return user

# delete a user
@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    deleted_user = users_db.pop(user_id)
    return deleted_user



@app.get("/")
async def root():
    return {"message": "Hello World"}

# @app.get("/users/{user_id}")
# async def read_item(user_id):
#     return {"user_id": user_id}
#
# @app.get("/users")
# async def get_all_users():
#     return [{"user_id1": "ruman"}, {"user_1": "user2"}]
