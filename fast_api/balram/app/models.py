from sqlalchemy import TIMESTAMP, Boolean, Column, ForeignKey, Integer, String, text
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import null
from database import Base



class User(Base):
    __tablename__ = " users"

    id = Column(Integer, primary_key=True,nullable=False,  index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    # items = relationship("Item", back_populatesnul lable=False="owner")

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, nullable=False, index=True)
    title = Column(String, unique=True, nullable=False, index=True)
    description = Column(String, index=True)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text('now()'))
    
    # owner_id = Column(Integer, ForeignKey("users.id"))

    # owner = relationship("User", back_populates="items")
