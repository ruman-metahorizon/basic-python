from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Simulating a database
database = {}

class User(BaseModel):
    username: str
    email: str

@app.post("/user/")
async def create_user(user: User):
    user_id = len(database) + 1
    database[user_id] = user
    return {"user_id": user_id, **user.dict()}

@app.put("/user/{user_id}")
async def update_user(user_id: int, user: User):
    if user_id in database:
        database[user_id] = user
        return {"user_id": user_id, **user.dict()}
    else:
        return {"error": "User not found"}

@app.patch("/user/{user_id}")
async def patch_user(user_id: int, user_patch: User):
    if user_id in database:
        old_user = database[user_id]
        updated_user = old_user.copy(update=user_patch.dict(exclude_unset=True))
        database[user_id] = updated_user
        return {"user_id": user_id, **updated_user}
    else:
        return {"error": "User not found"}

@app.delete("/user/{user_id}")
async def delete_user(user_id: int):
    if user_id in database:
        del database[user_id]
        return {"message": "User deleted"}
    else:
        return {"error": "User not found"}

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users/{user_id}")
async def read_item(user_id: int):
    return {"user_id": user_id}

@app.get("/users")
async def get_all_users():
    return list(database.values())  # Return a list of User objects
