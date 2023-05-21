// import { arr } from "./buttonfunctions";
import renderTodoList from "./rendertodolist";
// import { getFromLocalStorage } from "..";

export default function inboxPage() {
  const todos = document.querySelectorAll(".todoListDueDate");
  const todayTodos = document.querySelector(".todayTodos");
  const upcomingTodos = document.querySelector(".upcomingTodos");

  todos.forEach((todo) => {
    if (todo.parentNode.classList.contains("dueToday")) {
      todayTodos.removeChild(todo.parentNode);

      todo.parentNode.classList.remove("dueToday");
    } else if (todo.parentNode.classList.contains("dueUpcoming")) {
      upcomingTodos.removeChild(todo.parentNode);

      todo.parentNode.classList.remove("dueUpcoming");
    }
  });
  todayTodos.innerHTML = "";
  upcomingTodos.innerHTML = "";
  const reference = localStorage.getItem("tasks");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    const todolist = JSON.parse(reference);

    todolist.forEach((t) => {
      console.log(t.dueDate);

      // t.dueDate = parseISO(t.dueDate, "yyyy-MM-dd");
    });
    const filtering = todolist.filter((el) => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    const arr = filtering.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );

    renderTodoList(arr);
  }
  const yesmobileMode = localStorage.getItem("mobile");
  if (yesmobileMode === "enabled") {
    const popup = document.querySelector(".sidePanel");
    const content = document.querySelector(".mainPanel");
    popup.style.display = "none";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
  const inbox = document.querySelector(".inboxPage");
  inbox.style.display = "block";
  const upcoming = document.querySelector(".upcomingPage");
  upcoming.style.display = "none";
  const todayPage = document.querySelector(".todayPage");
  todayPage.style.display = "none";
}
