def todo_serializer(todo) -> dict:
    return {
        'id':str(todo['_id']),
        'name':str(todo['_name']),
        'description':str(todo['_description']),
        'completed':str(todo['_completed'])
    }
    
def todos_serializer(todos) -> list:
    return [todo_serializer(todo)for todo in todos]