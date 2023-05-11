import renderTodoList from "./rendertodolist";
import createTodoList from "./todolist";
import enableSubmit from "./formvalidation";
// import todoListDeleteButton from "./todolistdelete";

export default function buttonFunctions() {
  enableSubmit();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = document.querySelector("#duedate").value;
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;

  const todoList = createTodoList();
  todoList.addTodo(title, description, dueDate, dueTime, priority);

  if (title === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    renderTodoList();
  }
}
