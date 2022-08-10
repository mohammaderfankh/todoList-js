const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const inputSubmit = document.querySelector("#new-task-submit");
const list_el = document.querySelector("#tasks");

const task = input.value;

inputSubmit.addEventListener("click", addTodoList);
document.addEventListener("DOMContentLoaded", getLocalTodos);

function addTodoList(e) {
    e.preventDefault();
    // console.log(e);
    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.add("task");
    list_el.appendChild(task_el);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    task_el.appendChild(contentDiv);

    const inputContent = document.createElement("input");
    inputContent.classList.add("text");
    inputContent.type = "text";
    inputContent.value = task;
    inputContent.setAttribute("readonly", "readonly");
    contentDiv.appendChild(inputContent);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");
    task_el.appendChild(actionsDiv);

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit");
    buttonEdit.innerText = "ويرايش";
    actionsDiv.appendChild(buttonEdit);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("delete");
    buttonDelete.innerText = "حذف";
    actionsDiv.appendChild(buttonDelete);

    const buttonDone = document.createElement("button");
    buttonDone.classList.add("done");
    buttonDone.innerText = "انجام";
    actionsDiv.appendChild(buttonDone);

    input.value = "";

    buttonEdit.addEventListener("click", (e) => {
        if (buttonEdit.innerHTML === "ويرايش") {
            buttonEdit.innerHTML = "ذخيره";
            inputContent.removeAttribute("readonly");
        } else {
            buttonEdit.innerHTML = "ويرايش";
            inputContent.setAttribute("readonly", "readonly");
        }
    });

    buttonDelete.addEventListener("click", (e) => {
        task_el.remove();
    });

    buttonDone.addEventListener("click", (e) => {
        const doneTask = inputContent.parentElement;
        doneTask.classList.toggle("copmeleted");
    });
    savedLocalTodos(task);
}

function savedLocalTodos(todo) {
    let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    savedTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function getLocalTodos() {
    let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    savedTodos.forEach((todo) => {
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        list_el.appendChild(task_el);

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        task_el.appendChild(contentDiv);

        const inputContent = document.createElement("input");
        inputContent.classList.add("text");
        inputContent.type = "text";
        inputContent.value = todo;
        inputContent.setAttribute("readonly", "readonly");
        contentDiv.appendChild(inputContent);

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");
        task_el.appendChild(actionsDiv);

        const buttonEdit = document.createElement("button");
        buttonEdit.classList.add("edit");
        buttonEdit.innerText = "ويرايش";
        actionsDiv.appendChild(buttonEdit);

        const buttonDelete = document.createElement("button");
        buttonDelete.classList.add("delete");
        buttonDelete.innerText = "حذف";
        actionsDiv.appendChild(buttonDelete);

        const buttonDone = document.createElement("button");
        buttonDone.classList.add("done");
        buttonDone.innerText = "انجام";
        actionsDiv.appendChild(buttonDone);

        buttonEdit.addEventListener("click", (e) => {
            if (buttonEdit.innerHTML === "ويرايش") {
                buttonEdit.innerHTML = "ذخيره";
                inputContent.removeAttribute("readonly");
            } else {
                buttonEdit.innerHTML = "ويرايش";
                inputContent.setAttribute("readonly", "readonly");
            }
        });

        buttonDelete.addEventListener("click", (todo) => {
            removeLocalTodos(todo);
            task_el.remove();
        });

        buttonDone.addEventListener("click", (e) => {
            const doneTask = inputContent.parentElement;
            doneTask.classList.toggle("copmeleted");
        });
        input.value = "";
    });
}

function removeLocalTodos(todo) {
    // let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    // const filterdTodo = savedTodos.filter(
    //     (t) => t === todo.target.parentElement.parentElement.children[0].task
    // );
    // localStorage.setItem("todos", JSON.stringify(filterdTodo));
    console.log(todo.target.parentElement.parentElement.children[0].children);
}
