/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import todoListEditButton from "./todolistedit";
import todoListChecked from "./todolistchecked";
// import { removeTask } from "./localstorage";

const newArray = [];

export default function renderTodoList(arr) {
  const listTodos = document.querySelector(".listTodos");
  listTodos.innerHTML = "";
  arr.filter((item) => item);

  arr.sort((a, b) => a.dueDate - b.dueDate);

  for (let i = 0; i < arr.length; i++) {
    const todo = arr[i];
    const todoListItem = document.createElement("li");
    todoListItem.setAttribute("id", todo.index);
    todoListItem.classList.add("todoListItem");
    if (todo.checked === true) {
      todoListItem.classList.add("checked");
    }
    listTodos.appendChild(todoListItem);

    const todoListPriority = document.createElement("svg");
    todoListPriority.classList.add("todoListPriority");
    if (todo.priority === "Low") {
      // set different svg colors for all priority levels
      todoListPriority.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    } else if (todo.priority === "Medium") {
      todoListPriority.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    } else {
      todoListPriority.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    }
    todoListPriority.addEventListener("click", todoListChecked);
    todoListItem.appendChild(todoListPriority);

    const todoListTitle = document.createElement("div");
    todoListTitle.classList.add("todoListTitle");
    todoListTitle.textContent = todo.title;
    todoListItem.appendChild(todoListTitle);

    const todoListButton = document.createElement("button");
    todoListButton.setAttribute("id", "todoListButton");
    todoListButton.setAttribute("type", "button");
    todoListButton.textContent = "DETAILS";
    todoListItem.appendChild(todoListButton);

    const todoListDueDate = document.createElement("div");
    todoListDueDate.classList.add("todoListDueDate");
    const dateFormatted = format(
      parseISO(todo.dueDate, "yyyy-MM-dd"),
      "yyyy-MM-dd"
    );
    todoListDueDate.textContent = dateFormatted;
    todoListItem.appendChild(todoListDueDate);

    const todoListDueTime = document.createElement("div");
    todoListDueTime.classList.add("todoListDueTime");
    todoListDueTime.textContent = todo.dueTime;
    todoListItem.appendChild(todoListDueTime);

    const todoListEdit = document.createElement("svg");
    todoListEdit.classList.add("todoListEdit");
    todoListEdit.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
    todoListEdit.addEventListener("click", todoListEditButton);
    todoListItem.appendChild(todoListEdit);

    const todoListDelete = document.createElement("svg");
    todoListDelete.classList.add("todoListDelete");
    // todoListDelete.dataset.index = todo.index;
    todoListDelete.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    todoListDelete.addEventListener("click", (event) => {
      event.preventDefault();
      const identity = event.currentTarget.parentElement.getAttribute("id");
      console.log(identity);
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      // eslint-disable-next-line eqeqeq
      const newTodoList = existingTasks.filter((el) => el.index != identity);
      localStorage.setItem("tasks", JSON.stringify(newTodoList));
      window.location.reload();
    });
    todoListItem.appendChild(todoListDelete);
  }
}

export { newArray };
