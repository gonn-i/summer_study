const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const KEY_TODOS = "todos"

const toDos = [];

function saveToDos (){
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

// ToDo 삭제 하기
function delet(event){
    const li = event.target.parentElement;
    li.remove();
}

// ToDo 출력하기 
function paintToDo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",delet);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText= newTodo;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;   
    toDoInput.value ="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);



const saveToDos = localStorage.getItem(KEY_TODOS);

if (saveToDos != null) {
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}