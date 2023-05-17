// import { format, addDays, parseISO } from "date-fns";
// import parseJSON from "date-fns/parseJSON";
import startPage from "./modules/startpage";
import mainContainer from "./modules/container";
import sidePanelFunction from "./modules/sidepanel";

import "./style.css";
import renderTodoList from "./modules/rendertodolist";
import renderProject from "./modules/renderproject";

startPage();
mainContainer();
sidePanelFunction();

function getFromLocalStorage() {
  const reference = localStorage.getItem("tasks");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    const todos = JSON.parse(reference);
    console.log(todos);
    todos.forEach((t) => {
      console.log(t.dueDate);

      // t.dueDate = parseISO(t.dueDate, "yyyy-MM-dd");
    });
    const filtering = todos.filter((el) => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    const arr = filtering.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );

    renderTodoList(arr);
  }

  const projects = localStorage.getItem("projects");
  if (projects) {
    // converts back to array and store it in todos array
    const projectlist = JSON.parse(projects);
    console.log(projects);

    renderProject(projectlist);
  }
}
// initially get everything from localStorage
getFromLocalStorage();

/* const today = new Date();
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
console.log(week); */
