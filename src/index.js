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

// set local storage for page on load
let darkMode = localStorage.getItem("darkMode"); // name it whatever you want
const darkModeToggle = document.querySelector("#darkModeToggle"); // accessed from button on page. on hindsight could have used class on svg

// this function is to enable dark mode
const enableDarkMode = () => {
  document.body.classList.add("darkTheme");
  localStorage.setItem("darkMode", "enabled"); // the two items in the brackets are keys. i could have named the second one anything like yes, active, etc
};

// this disables darkmode
const disableDarkMode = () => {
  document.body.classList.remove("darkTheme");
  localStorage.setItem("darkMode", null); // same here. second one could have been a string
};

// checks if darkmode is enabled once a page loads
if (darkMode === "enabled") {
  enableDarkMode();
}

// toggles between the two themes
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
