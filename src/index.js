import { format, addDays, parseISO } from "date-fns";
import startPage from "./modules/startpage";
import mainContainer from "./modules/container";
import sidePanelFunction from "./modules/sidepanel";

import "./style.css";
// import renderTodoList from "./modules/rendertodolist";

startPage();
mainContainer();
sidePanelFunction();

// function loadTasks() {
// const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// renderTodoList(tasks);
// Display the tasks on the screen
// }
// loadTasks();

const today = new Date();
const dateFormatted = format(today, "yyyy-MM-dd");
console.log(dateFormatted);
const formattedDate = parseISO(dateFormatted);
console.log(formattedDate);
const week = [];
const day1 = format(addDays(formattedDate, 1), "yyyy-MM-dd");
const day2 = format(addDays(formattedDate, 2), "yyyy-MM-dd");
const day3 = format(addDays(formattedDate, 3), "yyyy-MM-dd");
const day4 = format(addDays(formattedDate, 4), "yyyy-MM-dd");
const day5 = format(addDays(formattedDate, 5), "yyyy-MM-dd");
const day6 = format(addDays(formattedDate, 6), "yyyy-MM-dd");
week.push(dateFormatted, day1, day2, day3, day4, day5, day6);
console.log(week);
