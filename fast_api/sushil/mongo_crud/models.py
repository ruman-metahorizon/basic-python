from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class UserSchema(BaseModel):
    name: str = Field(...)
    email: EmailStr = Field(...)
    is_active: bool = Field(...)


class UpdateUserModel(BaseModel):
    name: Optional[str]
    email: Optional[EmailStr]
    is_active: Optional[bool]


class Config:
    schema_extra = {
        "example": {
            "name": "John Doe",
            "email": "johndoe@gmail.com",
            "is_active": True
        }
    }


def ResponseModel(data, message):
    return {
        "data": [data],
        "statusCode": 200,
        "message": message
    }


def ErrorResponseModel(error, code, message):
    return {
        "error": error,
        "code": code,
        "message": message
    }
