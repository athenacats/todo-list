/* eslint-disable import/no-mutable-exports */
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import renderTodoList from "./rendertodolist";
import { createTodoList /* , todos */ } from "./todolist";
import enableSubmit from "./formvalidation";
import { existingTasks } from "./localstorage";

let arr = []; // need it to be exported so it's used in rendering the inbox, today, upcoming pages

export default function buttonFunctions() {
  enableSubmit();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = format(
    parseISO(document.querySelector("#duedate").value, "yyyy-MM-dd"),
    "yyyy-MM-dd"
  );
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;

  const todoList = createTodoList();
  todoList.addTodo(title, description, dueDate, dueTime, priority);

  if (title === "" && dueDate.valueOf().isNaN) {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    console.log(existingTasks);
    const filtering = existingTasks.filter((el) => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    arr = filtering.sort((a, b) => a.dueDate - b.dueDate);

    renderTodoList(arr);
  }
}

export { arr };
