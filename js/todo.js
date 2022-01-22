const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");
const divDone = document.querySelector("#done-title");

const TODO_KEY = "to-do";
const DONE_KEY = "done";
let todoArray = [];
let doneArray = [];


function loadTodo() {
    const saved = localStorage.getItem(TODO_KEY);
    if (saved){
        const parsed = JSON.parse(saved);
        parsed.forEach((item,idx)=>{
            todoArray.push(item);
            paintTodo(item);
        });
        /* forEach Action same as below:
        for (let i = 0 ; i<parsed.length ; i++){
           todoArray.push(parsed[i]); 
        }
        */
    }
}
function loadDone() {
    const saved = localStorage.getItem(DONE_KEY);
    if (saved){
        const parsed = JSON.parse(saved);
        parsed.forEach((item,idx)=>{
            doneArray.push(item);
            paintDone(item);
        });
    }
}
function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function saveDone() {
    localStorage.setItem(DONE_KEY, JSON.stringify(doneArray));
}

function removeToDo(li) {
    todoArray = todoArray.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}
function removeDone(li) {
    doneArray = doneArray.filter((done) => parseInt(done.id) !== parseInt(li.id));
    saveDone();
}

function handleDeleteDone(e) {
    const li = e.target.parentElement;
    removeDone(li);
    li.remove();
}

function handleDeleteToDo(e) {
    /* same as below: 
        1)
        toDoList.removeChild(e.target.parentElement);

        2)
        const li = e.target.parentElement;
        li.remove();
     */
    const li = e.target.parentElement;
    removeToDo(li);
    li.remove();
}


function paintDone(done) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.id = done.id;
    span.innerText = done.text;
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", handleDeleteDone);

    li.appendChild(span);
    li.appendChild(deleteButton);
    doneList.appendChild(li);  
};

function addDone(li){
    const span = li.querySelector("span");
    const newObj = {
        id: li.id,
        text: span.innerText,
    };

    doneArray.push(newObj);
    paintDone(newObj);
}

function handleDoneTodo(e) {
    e.preventDefault();

    const parentNode = e.target.parentElement;
    console.dir(parentNode);
    removeToDo(parentNode);
    addDone(parentNode);
    saveToDo(); 
    saveDone();

    toDoList.removeChild(parentNode); 
}

function paintTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const doneButton  = document.createElement("button");
    const deleteButton = document.createElement("button");

    li.id = newToDo.id;
    span.innerText = `  ${newToDo.text}  `;
    doneButton.innerText = "V";
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", handleDeleteToDo);
    doneButton.addEventListener("click", handleDoneTodo);

    li.appendChild(doneButton);
    li.appendChild(span);
    li.appendChild(deleteButton);

    toDoList.appendChild(li);    
}

function addTodo(text){

    const newObj = {
        id: Date.now(),
        text: text,
    };
    todoArray.push(newObj);
    paintTodo(newObj);
}

function handleToDoSubmit(e) {
    e.preventDefault();

    addTodo(toDoInput.value);
    saveToDo();

    toDoInput.value="";
}

loadTodo();
loadDone();
toDoForm.addEventListener("submit", handleToDoSubmit);