const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");
const divDone = document.querySelector("#done-title");

function handleDeleteToDo(e) {
    toDoList.removeChild(e.target.parentElement); 
    /* same as below: 
    const li = e.target.parentElement;
    li.remove();
     */
}

function addDone(done) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = done;
    li.appendChild(span);
    doneList.appendChild(li);  
}
function handleDoneTodo(e) {
    e.preventDefault();

    const parentNode = e.target.parentElement;
    addDone(parentNode.querySelector("span").innerText);
    toDoList.removeChild(parentNode);  
}

function addTodo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const doneButton  = document.createElement("button");
    const deleteButton = document.createElement("button");

    span.innerText = `  ${newToDo}  `;
    doneButton.innerText = "V";
    deleteButton.innerText = "X";

    deleteButton.addEventListener("click", handleDeleteToDo);
    doneButton.addEventListener("click", handleDoneTodo);

    li.appendChild(doneButton);
    li.appendChild(span);
    li.appendChild(deleteButton);

    toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    
    addTodo(toDoInput.value);
    toDoInput.value="";
}

toDoForm.addEventListener("submit", handleToDoSubmit);