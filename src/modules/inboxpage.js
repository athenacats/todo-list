export default function inboxPage() {
  const todos = document.querySelectorAll(".todoListDueDate");
  todos.forEach((todo) => {
    if (todo.parentNode.classList.contains("dueToday")) {
      todo.parentNode.classList.remove("dueToday");
      const todayTodos = document.querySelector(".todayTodos");
      todayTodos.innerHTML = "";
    }
  });
  const inbox = document.querySelector(".inboxPage");
  inbox.style.display = "block";
  const upcoming = document.querySelector(".upcomingPage");
  upcoming.style.display = "none";
  const todayPage = document.querySelector(".todayPage");
  todayPage.style.display = "none";
}