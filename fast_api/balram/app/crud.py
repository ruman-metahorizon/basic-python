from sqlalchemy.orm import Session

import models, schemas



def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()

def create_user(db:Session, user: schemas.UserCreate):
    db_user = models.User(email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user



def get_posts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Post).offset(skip).limit(limit).all()

def get_post_by_title(db: Session, title: str):
    return db.query(models.Post).filter(models.Post.title==title).first()

def create_post(db:Session, post: schemas.PostCreate):
    db_post = models.Post(title=post.title, description=post.description)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
