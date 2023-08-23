from typing import Union
from pydantic import BaseModel


class PostBase(BaseModel):
    title: str
    description: Union[str, None] = None

class PostCreate(PostBase):
    pass 

class Post(PostBase):
    id: int
    # owner_id: int

    class Config:
        from_attributes = True



class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    

    class Config:
        from_attributes = True
        
