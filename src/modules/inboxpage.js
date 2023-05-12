export default function inboxPage() {
  const todos = document.querySelectorAll(".todoListDueDate");
  const upcomingTodos = document.querySelector(".upcomingTodos");
  upcomingTodos.innerHTML = "";
  const todayTodos = document.querySelector(".todayTodos");
  todayTodos.innerHTML = "";
  todos.forEach((todo) => {
    if (todo.parentNode.classList.contains("dueToday")) {
      todo.parentNode.classList.remove("dueToday");
    }
    if (todo.parentNode.classList.contains("dueUpcoming")) {
      todo.parentNode.classList.remove("dueUpcoming");
    }
  });
  const inbox = document.querySelector(".inboxPage");
  inbox.style.display = "block";
  const upcoming = document.querySelector(".upcomingPage");
  upcoming.style.display = "none";
  const todayPage = document.querySelector(".todayPage");
  todayPage.style.display = "none";
}
