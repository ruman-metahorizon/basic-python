from sqlalchemy import Boolean,Column,String,ForeignKey,Integer
from sqlalchemy.orm import relationship
from db_setup import Base

class User(Base):
    __tablename__='users'
    id=Column(Integer,primary_key=True,index=True)
    email=Column(String,unique=True,index=True)
    hashed_password=Column(String)

    # items=relationship('ITEM',back_populates='owner')s

class Item(Base):
    __tablename__='items'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    # owner = relationship("User", back_populates="items")