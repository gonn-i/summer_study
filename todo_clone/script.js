const addTaskBtn =document.getElementById("add_btn");
addTaskBtn.addEventListener("click", createInput);

const listContainer = document.getElementById("list-container");
 
// +누르면 입력창 뜨는 함수
function createInput(){
    const li = document.createElement("li"); //li 태그를 만듦
    const input = document.createElement("input"); //input 태그를 만듦

    //input의 속성 정해주기 (type / placeholder/ id)
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "할일을 입력해주세요");
    input.setAttribute("id", "task-input");

    const btn =document.createElement("input-Task"); //btn 태그를 만듦
    //btn의 속성 정해주기 (type) & innerText 지정
    btn.setAttribute("type","button");
    btn.innerText = "+";

    btn.addEventListener("click", addTask); //eventlistner 지정 addTask실행

    //li 태그의 자식으로 input태그와 btn태그 넣기
    li.appendChild(input);
    li.appendChild(btn);

    listContainer.appendChild(li);
}
// 사용자가 작성한 Task 가져오기
function addTask() {
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value; // 사용자 입력 -> 텍스트를 가져옴

    if (task === "") {
        alert('할 일을 적어주세요!');
    }

    else {
    //입력한 텍스트를 innerText로 하는 li 태그를 생성한다.
    const list = document.createElement("li");
    list.innerText = task;

    //list-contanier 안에 li 태그 추가 
    listContainer.appendChild(list);
    // input과 button은 제거
    listContainer.removeChild(taskInput.parentElement);
    }

    saveData();
}

function checkTodoNum() {
   listContainer.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
 });
}

let todoNum = localStorage.getItem("todoNum");
const todayTodoNum = document.getElementById("today");

function checkTodo() {
    listContainer.addEventListener("click", (e) => {
      // li 태그를 클릭했을 때
      if (e.target.tagName === "LI") {
        // 완료한 할일 수 계산
        e.target.classList.contains("checked") ? todoNum-- : todoNum++;
        todayTodoNum.innerText = todoNum;
  
        // 초록색으로 바꿔준다.
        e.target.classList.toggle("checked");
  
        saveData();
      }
    });
  }
  
  checkTodo();
  
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("todoNum", todayTodoNum.innerText);
  }
  
  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    todayTodoNum.innerText = localStorage.getItem("todoNum") | 0;
  }

  showTask();
