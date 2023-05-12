import { format } from "date-fns";

export default function dueToday() {
  const upcomingTodos = document.querySelector(".upcomingTodos");
  upcomingTodos.innerHTML = "";
  const today = new Date();
  const dateFormatted = format(today, "yyyy-MM-dd");

  const todos = document.querySelectorAll(".todoListDueDate");

  todos.forEach((todo) => {
    if (todo.parentNode.classList.contains("dueToday")) {
      // do nothing. Ensures no duplicates
    }

    if (todo.textContent === dateFormatted) {
      todo.parentNode.classList.add("dueToday");
      const inbox = document.querySelector(".inboxPage");
      inbox.style.display = "none";
      const upcoming = document.querySelector(".upcomingPage");
      upcoming.style.display = "none";
      const todayPage = document.querySelector(".todayPage");
      todayPage.style.display = "block";
      const todayTodos = document.querySelector(".todayTodos");
      const todoClones = todo.parentNode.cloneNode(true);
      todayTodos.appendChild(todoClones);
    }
  });
}
