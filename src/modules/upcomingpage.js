/* eslint-disable no-plusplus */
import { format, addDays, parseISO } from "date-fns";

export default function upcomingPage() {
  const today = new Date();
  const dateFormatted = format(today, "yyyy-MM-dd");
  const formattedDate = parseISO(dateFormatted);
  const week = [];
  const day1 = format(addDays(formattedDate, 1), "yyyy-MM-dd");
  const day2 = format(addDays(formattedDate, 2), "yyyy-MM-dd");
  const day3 = format(addDays(formattedDate, 3), "yyyy-MM-dd");
  const day4 = format(addDays(formattedDate, 4), "yyyy-MM-dd");
  const day5 = format(addDays(formattedDate, 5), "yyyy-MM-dd");
  const day6 = format(addDays(formattedDate, 6), "yyyy-MM-dd");
  week.push(dateFormatted, day1, day2, day3, day4, day5, day6);

  const todos = document.querySelectorAll(".todoListDueDate");

  todos.forEach((todo) => {
    if (todo.parentNode.classList.contains("dueUpcoming")) {
      // do nothing. Ensures no duplicates
    }
    for (let i = 0; i < week.length; i++) {
      if (todo.textContent === week[i]) {
        todo.parentNode.classList.add("dueUpcoming");
        const inbox = document.querySelector(".inboxPage");
        inbox.style.display = "none";
        const upcoming = document.querySelector(".upcomingPage");
        upcoming.style.display = "block";
        const todayPage = document.querySelector(".todayPage");
        todayPage.style.display = "none";
        const upcomingTodos = document.querySelector(".upcomingTodos");
        const todoClones = todo.parentNode.cloneNode(true);
        upcomingTodos.appendChild(todoClones);
      }
    }
    /* if (todo.textContent === dateFormatted) {
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
    } */
  });
}
