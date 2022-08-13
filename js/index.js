const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const inputSubmit = document.querySelector("#new-task-submit");
const list_el = document.querySelector("#tasks");

// addEventListener
inputSubmit.addEventListener("click", addTodoList);
list_el.addEventListener("click", checkRemoveEdit);
document.addEventListener("DOMContentLoaded", getLocalTodos);
// functions

function addTodoList(e) {
    e.preventDefault();
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("task");
    const newTodo = `
    <li class="content">
    <input type="text" class="text" value=${input.value} readonly />
    </li>
    <div class="actions"> 
        <button class="edit">ويرايش</button>
        <button class="delete">حذف</button>
        <button class="done">انجام</button>
    </div>`;
    creatDiv.innerHTML = newTodo;
    list_el.appendChild(creatDiv);
    savedLocalTodos(input.value);
    input.value = "";
}

function checkRemoveEdit(e) {
    const classList = [...e.target.classList];
    if (classList[0] === "edit") {
        let todo = e.target.parentElement.previousElementSibling.childNodes[1];
        if (e.target.innerText === "ويرايش") {
            e.target.innerText = "ذخيره";
            todo.removeAttribute("readonly");
        } else {
            e.target.innerText = "ويرايش";
            todo.setAttribute("readonly", "readonly");
        }
    } else if (classList[0] === "delete") {
        const todo = e.target.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    } else if (classList[0] === "done") {
        const todo = e.target.parentElement.previousElementSibling.childNodes[1];
        todo.classList.toggle("compeleted");
    }
}

function savedLocalTodos(todo) {
    let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    savedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function getLocalTodos() {
    let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    savedTodos.forEach((todo) => {
        const creatDiv = document.createElement("div");
        creatDiv.classList.add("task");
        const newTodo = `
        <li class="content">
        <input type="text" class="text" value=${todo} readonly />
        </li>
        <div class="actions"> 
            <button class="edit">ويرايش</button>
            <button class="delete">حذف</button>
            <button class="done">انجام</button>
        </div>`;
        creatDiv.innerHTML = newTodo;
        list_el.appendChild(creatDiv);
    });
}

function removeLocalTodos(todo) {
    let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    const filterdTodo = savedTodos.filter(
        (t) => t !== todo.children[0].children[0].attributes.value.value
    );
    localStorage.setItem("todos", JSON.stringify(filterdTodo));

    console.log(filterdTodo);
}
