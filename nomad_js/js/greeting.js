const loginForm =document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN = "hidden";
const USERNAME = "username";

// const logInput = document.querySelector("#login-form input");
// const logButton= document.querySelector("#login-form button");


function onLoginSubmit(info){
    info.preventDefault(); // 브라우저의 기본 동작을 실행하지 못하게 막아줌 
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value; // 입력값을 받아서 username으로 선언
    
    //username 저장해주기 
    localStorage.setItem("username", username);

    //username 불러오기
    paintGreeting();
}

loginForm.addEventListener("submit",onLoginSubmit);

//username 출력함수
function paintGreeting () {
    const username = localStorage.getItem(USERNAME);
    greeting.innerText = `hello ${username}`; //백틱키 사용하여 username 받아옴  
    //greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN); 
}

// username을 저장하여, 데이터 삭제시 form 출력 || 새로고침해도 유지 
const saveUsername = localStorage.getItem(USERNAME);

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",onLoginSubmit);
    
} else {
    paintGreeting(); 
}


