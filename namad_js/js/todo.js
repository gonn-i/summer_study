const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const KEY_TODOS = "todos"

let toDos = [];

function saveToDos (){
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDos)); // js의 object나 array를 string으로  변환가능
}

// ToDo 삭제하기
function delet(event){
    const li = event.target.parentElement; 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter 처리 클릭한 id 제외 todo 남기기
    saveToDos();
}

// ToDo 출력하기 
function paintToDo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText= newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",delet);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;   
    toDoInput.value ="";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const saveTodos = localStorage.getItem(KEY_TODOS);

if (saveTodos !== null) {
    const parsedToDos = JSON.parse(saveTodos); // 사용 가능한 array로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

 