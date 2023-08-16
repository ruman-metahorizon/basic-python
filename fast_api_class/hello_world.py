from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users/{user_id}")
async def read_item(user_id):
    return {"user_id": user_id}

@app.get("/users")
async def get_all_users():
    return [{"user_id1": "ruman"}, {"user_1": "user2"}]
