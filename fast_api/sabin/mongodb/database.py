from schematics.models import Model
from schematics.types import EmailType, StringType
from bson import ObjectId

class Customer(Model):
    cust_id = ObjectId()
    cust_email = EmailType(required=True)
    cust_name = StringType(required=True)

def create_user(cust_email, cust_name):
    new_user = Customer(cust_email=cust_email, cust_name=cust_name)
    return new_user.to_primitive()
