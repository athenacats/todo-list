import format from "date-fns/format";
import startPage from "./modules/startpage";
import mainContainer from "./modules/container";
import sidePanelFunction from "./modules/sidepanel";

import "./style.css";

startPage();
mainContainer();
sidePanelFunction();

const date = new Date();
console.log(date);

const dateFormatted = format(date, "yyyy-MM-dd");
console.log(dateFormatted);
