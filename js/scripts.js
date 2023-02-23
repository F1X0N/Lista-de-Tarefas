// Seleção de elementos
const Formtop = document.querySelector("#form-top");
const editForm = document.querySelector("#edit-form");
const todoList = document.querySelector("#to-do");
const editInput = document.querySelector("#edit-input");
const cancelar = document.querySelector("#cancelar");
const infoInput = document.querySelector("#info-input");

//Funções
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("to-do")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
}

//Eventos
Formtop.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputValue = infoInput.value

    if (inputValue) {
        saveTodo(inputValue);
    }
});
