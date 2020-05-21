// selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

// event listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoFilter.addEventListener('click', filterTodo);

// funtions
function addTodo(e){
    // prevent form submit
    e.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // add list items & append to the div
    const newTodo = document.createElement('li');
    if(todoInput.value == ''){
        alert('Please enter the value');
    }
    else{
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
    
        // mark button & append to the div
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-button');
        todoDiv.appendChild(completedButton);
        
        // delete button & append to the div
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-button');
        todoDiv.appendChild(deleteButton);
    
        // append todo-div to the ul
        todoList.appendChild(todoDiv);
        
        // clear todo inout value 
        todoInput.value = '';
    }
}

// delete todo 
function deleteTodo(e){
    const item = e.target;
    // console.log(item);
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
          });
    }
    
    // complete todo 
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('complete-todo');
    }
}

// filter todo 
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        console.log(e.target.value);
        
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('complete-todo')){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('complete-todo')){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none"
                }
                break;
        }
    })    
}