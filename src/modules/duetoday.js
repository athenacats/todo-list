import { format } from "date-fns";

export default function dueToday() {
  const today = new Date();
  const dateFormatted = format(today, "yyyy-mm-dd");

  const todos = document.querySelectorAll(".todoListDueDate");

  todos.forEach((todo) => {
    if (todo.value === dateFormatted) {
      todo.classList.add("dueToday");
    }
  });
}
