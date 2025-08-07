console.log('Hello Wirld');

let todoList = [];

function validateForm(){
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;


    if (todoInput === '')

}

function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        date: date
    };

    //add the todo item to the todoList array
    todoList.push(todoItem);
    console.log('Todo added:', todoList);
}


function displayTodos() {
    //get the todo list from the DOM
    const todoListElement = document.getElementById('todo-list');
    
}