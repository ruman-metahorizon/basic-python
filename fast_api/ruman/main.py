from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()

class User(BaseModel):
    name: str
    age: int
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users/{user_id}")
async def read_item(user_id):
    return {"user_id": user_id}

@app.get("/users")
async def get_all_users():
    return [{"user_id1": "ruman"}, {"user_1": "user2"}]


@app.get("/users/")
async def get_user_pagination(skip: int = 0, limit: int = 10):
    return [{"user_id1": "ruman"}, {"user_1": "user2"}, {"page": skip}, {"limit": limit}]

@app.post("/user")
async def create_user(user: User):
    # add unique id to user
    # TODO:: save user to database and return
    return user

@app.put("/user/{user_id}")
async def create_item(user_id: int, new_user: User):
    # TODO:: get user by user_id from Database old_user
    # TODO:: update old_user with new_user
    # TODO:: save new_user in database
    # TODO:: return save user
    return {"user_id": user_id, **new_user.dict()}

@app.patch("/user/{user_id}")
async def patch_user(user_id: int, user: User):
    # TODO:: delete user by id
    return user_id
@app.delete("/user/{user_id}")
async def delete_user(user_id: int):
    # TODO:: delete user by id
    return user_id