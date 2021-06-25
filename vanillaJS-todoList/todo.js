const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        console.log('toDo.id : ' + toDo.id)
        console.log('li.id : '+li.id)
        
        return toDo.id !== parseInt(li.id);
    });
    
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    console.log(localStorage)
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    span.classList.add("toDoColor");

    span.innerText = text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    console.log("handleSubmit : "+currentValue)
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    console.log("loadToDos : "+loadedToDos)
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        console.log("parsedTodos : "+parsedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();