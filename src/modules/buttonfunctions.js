import renderTodoList from "./rendertodolist";
import { createTodoList, todos } from "./todolist";
import enableSubmit from "./formvalidation";

export default function buttonFunctions() {
  enableSubmit();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = new Date(document.querySelector("#duedate").value);
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;

  const todoList = createTodoList();
  todoList.addTodo(title, description, dueDate, dueTime, priority);

  if (title === "" && !dueDate.valueOf().isNaN) {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    todos.filter((item) => item);

    const arr = todos.sort((a, b) => a.dueDate - b.dueDate);

    renderTodoList(arr);
  }
}
