const greetingContainer = document.querySelector("#greeting");
const greetingTitle = greetingContainer.querySelector(".greeting-left h1");
const nameForm = document.querySelector("#name-form");
const nameInput = nameForm.querySelector("input");

const NAME_KEY = "name";
const HIDDEN_CLASSNAME = "hidden";
const LEFT_CLASSNAME = "greeting-left";
const CENTER_CLASSNAME = "greeting-center";

function checkName() {
    if (localStorage.getItem(NAME_KEY) === null || localStorage.getItem(NAME_KEY) === 'undefined' ) {
        nameForm.classList.remove(HIDDEN_CLASSNAME);
    }else{
        nameForm.classList.add(HIDDEN_CLASSNAME);
        greetingTitle.innerText = `Hello, ${localStorage.getItem(NAME_KEY)}!`;
        greetingTitle.classList.remove(LEFT_CLASSNAME);
        greetingTitle.classList.add(CENTER_CLASSNAME);
    }
}
function handleNameForm(e) {
    e.preventDefault();

    localStorage.setItem(NAME_KEY, nameInput.value);
    greetingTitle.innerText = `Hello, ${nameInput.value}!`;
    nameForm.classList.add(HIDDEN_CLASSNAME);
    greetingTitle.classList.remove(LEFT_CLASSNAME);
    greetingTitle.classList.add(CENTER_CLASSNAME);
    greetingContainer.classList.remove("wrapper");
}

nameForm.addEventListener("submit", handleNameForm);
checkName();