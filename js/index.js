// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const list_el = document.querySelector("#tasks");
// const

// form.addEventListener("submit", formTaskList);
// document.addEventListener("DOMContentLoaded", getLocalTodos);

// function formTaskList(e) {
//     e.preventDefault();

//     const task = input.value;

//     if (!task) {
//         alert("لطفا وظيفه خود را وارد کنيد");
//         return;
//     }

//     const task_el = document.createElement("div");
//     task_el.classList.add("task");

//     const task_content_el = document.createElement("div");
//     task_content_el.classList.add("content");

//     task_el.appendChild(task_content_el);

//     const task_input_el = document.createElement("input");
//     task_input_el.classList.add("text");
//     task_input_el.type = "text";
//     task_input_el.value = task;
//     task_input_el.setAttribute("readonly", "readonly");

//     task_content_el.appendChild(task_input_el);

//     const task_action_el = document.createElement("div");
//     task_action_el.classList.add("actions");

//     const task_edit_el = document.createElement("button");
//     task_edit_el.classList.add("edit");
//     task_edit_el.innerText = "ويرايش";

//     const task_delete_el = document.createElement("button");
//     task_delete_el.classList.add("delete");
//     task_delete_el.innerText = "حذف";

//     const task_done_el = document.createElement("button");
//     task_done_el.classList.add("done");
//     task_done_el.innerText = "انجام";

//     task_action_el.appendChild(task_edit_el);
//     task_action_el.appendChild(task_delete_el);
//     task_action_el.appendChild(task_done_el);

//     task_el.appendChild(task_action_el);
//     list_el.appendChild(task_el);
//     input.value = "";

//     task_edit_el.addEventListener("click", (e) => {
//         if (task_edit_el.innerText.toLowerCase() == "ويرايش") {
//             task_edit_el.innerText = "ذخيره";
//             task_input_el.removeAttribute("readonly");
//             // task_input_el.focus();
//         } else {
//             task_edit_el.innerText = "ويرايش";
//             task_input_el.setAttribute("readonly", "readonly");
//         }
//     });

//     task_delete_el.addEventListener("click", () => {
//         list_el.removeChild(task_el);
//         // removeLocalTodos(todo);
//     });

//     task_done_el.addEventListener("click", (e) => {
//         const doneTask = task_input_el.parentElement;
//         doneTask.classList.toggle("copmeleted");
//     });
//     savedLocalTodos(task);
// }

// function savedLocalTodos(todo) {
//     let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
//     savedTodos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(savedTodos));
// }

// function getLocalTodos() {
//     let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
//     savedTodos.forEach((todo) => {
//         const task_el = document.createElement("div");
//         task_el.classList.add("task");

//         const task_content_el = document.createElement("div");
//         task_content_el.classList.add("content");

//         task_el.appendChild(task_content_el);

//         const task_input_el = document.createElement("input");
//         task_input_el.classList.add("text");
//         task_input_el.type = "text";
//         task_input_el.value = todo;
//         task_input_el.setAttribute("readonly", "readonly");

//         task_content_el.appendChild(task_input_el);

//         const task_action_el = document.createElement("div");
//         task_action_el.classList.add("actions");

//         const task_edit_el = document.createElement("button");
//         task_edit_el.classList.add("edit");
//         task_edit_el.innerText = "ويرايش";

//         const task_delete_el = document.createElement("button");
//         task_delete_el.classList.add("delete");
//         task_delete_el.innerText = "حذف";

//         const task_done_el = document.createElement("button");
//         task_done_el.classList.add("done");
//         task_done_el.innerText = "انجام";

//         task_action_el.appendChild(task_edit_el);
//         task_action_el.appendChild(task_delete_el);
//         task_action_el.appendChild(task_done_el);

//         task_el.appendChild(task_action_el);
//         list_el.appendChild(task_el);
//         input.value = "";
//         task_edit_el.addEventListener("click", (e) => {
//             if (task_edit_el.innerText.toLowerCase() == "ويرايش") {
//                 task_edit_el.innerText = "ذخيره";
//                 task_input_el.removeAttribute("readonly");
//                 // task_input_el.focus();
//             } else {
//                 task_edit_el.innerText = "ويرايش";
//                 task_input_el.setAttribute("readonly", "readonly");
//             }
//         });

//         task_delete_el.addEventListener("click", (e) => {
//             const todoos = e.target.parentElement.parentElement.parentElement;
//             removeLocalTodos(todoos);
//             list_el.removeChild(task_el);
//         });

//         task_done_el.addEventListener("click", (e) => {
//             const doneTask = task_input_el.parentElement;
//             doneTask.classList.toggle("copmeleted");
//         });
//     });
// }

// function removeLocalTodos(todo) {
//     console.log(todo.children[1]);
//     let savedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
//     // const filterdTodo = savedTodos.filter((t) => t !== todo.children[1].value);
//     const filterdTodo = todo.children[1].innerText;
//     localStorage.setItem("todos", JSON.stringify(filterdTodo));
// }

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
