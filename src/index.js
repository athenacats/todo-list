import startPage from "./modules/startpage";

import mainContainer from "./modules/container";
import sidePanelFunction from "./modules/sidepanel";
import taskPopUp from "./modules/popup";

import "./style.css";

startPage();
mainContainer();
sidePanelFunction();

function buttonPopup() {
  const addTaskButton = document.querySelector("#addButton");
  addTaskButton.addEventListener("click", () => {
    taskPopUp();
  });
}
buttonPopup();
