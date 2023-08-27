from fastapi import FastAPI, HTTPException
import connection
from database import Customer, create_user

app = FastAPI()

@app.get("/")
def index():
    return {"message": "Welcome to FastAPI World"}

@app.post("/signup/{email}/{username}")
def add_user(email: str, username: str):
    user_exists = connection.db.users.find_one({'cust_email': email})
    if user_exists:
        raise HTTPException(status_code=400, detail="Customer already exists")

    data = create_user(email, username)
    connection.db.users.insert_one(data)
    return {"message": "User Created", "email": data['cust_email'], "name": data['cust_name']}

@app.get("/users/{user_id}")
def read_user(user_id: str):
    user = connection.db.users.find_one({'_id': user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/users/{user_id}")
def update_user(user_id: str, email: str, username: str):
    updated_data = {'cust_email': email, 'cust_name': username}
    result = connection.db.users.update_one({'_id': user_id}, {'$set': updated_data})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User updated successfully"}

@app.delete("/users/{user_id}")
def delete_user(user_id: str):
    result = connection.db.users.delete_one({'_id': user_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
