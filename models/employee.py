from sqlalchemy import Column,BIGINT,VARCHAR
from db_setup import Base

#MODELS 
class Employee(Base):
    __tablename__='employee_details'
    
    employee_id=Column(BIGINT,primary_key=True)
    employee_name=Column(VARCHAR(40))
    employee_contact_no=Column(BIGINT)

