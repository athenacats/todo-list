import startPage from "./modules/startpage";
import mainContainer from "./modules/container";
import sidePanelFunction from "./modules/sidepanel";

import "./style.css";

startPage();
mainContainer();
sidePanelFunction();

const date = new Date();
console.log(date);
