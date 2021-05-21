const form = document.querySelector(".js-form")
const input = document.querySelector("input")
const greeting = document.querySelector(".js-greetings");

const SHOWING_CN = "showing";
const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `👋🏼 Hello, ${text}`;
    
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = input.value;
    console.log(input.value)
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName(){
    form.classList.add(SHOWING_CN);
    
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // she is not
        console.log('askForName');
        askForName();
    } else {
        console.log(currentUser);
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();