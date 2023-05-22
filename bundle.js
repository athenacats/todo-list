/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/buttonfunctions.js":
/*!****************************************!*\
  !*** ./src/modules/buttonfunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buttonFunctions)
/* harmony export */ });
/* unused harmony export arr */
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _rendertodolist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rendertodolist */ "./src/modules/rendertodolist.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist */ "./src/modules/todolist.js");
/* harmony import */ var _formvalidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formvalidation */ "./src/modules/formvalidation.js");
/* eslint-disable import/no-mutable-exports */





let arr = []; // need it to be exported so it's used in rendering the inbox, today, upcoming pages

function buttonFunctions() {
  (0,_formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector("#duedate").value, "yyyy-MM-dd"), "yyyy-MM-dd");
  const dueTime = document.querySelector("#duetime").value;
  const priority = document.querySelector("#priority").value;
  const index = Date.now();
  const project = document.querySelector("#project").value;
  const todoList = (0,_todolist__WEBPACK_IMPORTED_MODULE_3__.createTodoList)();
  todoList.addTodo(title, description, dueDate, dueTime, priority, index, project);
  if (title === "" && dueDate.valueOf().isNaN) {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(existingTasks);
    const filtering = existingTasks.filter(el => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    arr = filtering.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    (0,_rendertodolist__WEBPACK_IMPORTED_MODULE_4__["default"])(arr);
  }
}


/***/ }),

/***/ "./src/modules/container.js":
/*!**********************************!*\
  !*** ./src/modules/container.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainContainer)
/* harmony export */ });
/* harmony import */ var _projectpopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectpopup */ "./src/modules/projectpopup.js");
/* harmony import */ var _formActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formActions */ "./src/modules/formActions.js");
/* harmony import */ var _formvalidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formvalidation */ "./src/modules/formvalidation.js");
/* harmony import */ var _formcancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formcancel */ "./src/modules/formcancel.js");




function mainContainer() {
  const container = document.querySelector(".container");
  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);
  const sidePanel = document.createElement("div");
  sidePanel.classList.add("sidePanel");
  content.appendChild(sidePanel);
  const mainPanel = document.createElement("div");
  mainPanel.classList.add("mainPanel");
  content.appendChild(mainPanel);
  const inboxPage = document.createElement("div");
  inboxPage.classList.add("inboxPage");
  mainPanel.appendChild(inboxPage);
  const todayPage = document.createElement("div");
  todayPage.classList.add("todayPage");
  mainPanel.appendChild(todayPage);
  const upcomingPage = document.createElement("div");
  upcomingPage.classList.add("upcomingPage");
  mainPanel.appendChild(upcomingPage);
  const listTodos = document.createElement("ul");
  listTodos.classList.add("listTodos");
  inboxPage.appendChild(listTodos);
  const todayTodos = document.createElement("ul");
  todayTodos.classList.add("todayTodos");
  todayPage.appendChild(todayTodos);
  const upcomingTodos = document.createElement("ul");
  upcomingTodos.classList.add("upcomingTodos");
  upcomingPage.appendChild(upcomingTodos);
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  popup.style.display = "none";
  container.appendChild(popup);
  const popupForm = document.createElement("form");
  popupForm.setAttribute("id", "popupForm");
  popupForm.setAttribute("name", "popupForm");
  popup.appendChild(popupForm);
  const popupTitle = document.createElement("textarea");
  popupTitle.setAttribute("id", "popupTitle");
  popupTitle.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  popupTitle.setAttribute("maxlength", "50");
  popupTitle.setAttribute("placeholder", "Title");
  popupTitle.setAttribute("name", "Title");
  popupTitle.setAttribute("required", "");
  popupForm.appendChild(popupTitle);
  const popupDescription = document.createElement("textarea");
  popupDescription.setAttribute("id", "popupDescription");
  popupDescription.setAttribute("maxlength", "140");
  popupDescription.setAttribute("placeholder", "Description");
  popupForm.appendChild(popupDescription);
  const controls = document.createElement("div");
  controls.classList.add("controls");
  popupForm.appendChild(controls);
  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "duedate");
  dateLabel.textContent = "Due Date";
  controls.appendChild(dateLabel);
  const datePicker = document.createElement("input");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("id", "duedate");
  datePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  datePicker.setAttribute("name", "duedate");
  datePicker.setAttribute("placeholder", "Today");
  datePicker.required = true;
  controls.appendChild(datePicker);
  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "duetime");
  timeLabel.textContent = "Time";
  controls.appendChild(timeLabel);
  const timePicker = document.createElement("input");
  timePicker.setAttribute("type", "time");
  timePicker.setAttribute("id", "duetime");
  timePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  timePicker.setAttribute("name", "duetime");
  timePicker.setAttribute("placeholder", "now");
  timePicker.setAttribute("required", "");
  controls.appendChild(timePicker);
  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority Level";
  controls.appendChild(priorityLabel);
  const priorityPicker = document.createElement("select");
  priorityPicker.setAttribute("id", "priority");
  priorityPicker.setAttribute("change", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  priorityPicker.setAttribute("name", "priority");
  priorityPicker.required = true;
  // priorityPicker.setAttribute("onchange", "updatePriority(this.value)");
  // priorityPicker.setAttribute("onfocus", "(this.type='select')");
  controls.appendChild(priorityPicker);
  const optionPlaceholder = document.createElement("option");
  optionPlaceholder.setAttribute("value", "");
  optionPlaceholder.setAttribute("disabled", "");
  optionPlaceholder.setAttribute("selected", "");
  optionPlaceholder.textContent = "Select";
  priorityPicker.appendChild(optionPlaceholder);
  const option1 = document.createElement("option");
  option1.classList.add("low");
  option1.setAttribute("value", "Low");
  option1.textContent = "Low";
  option1.style.color = "green";
  priorityPicker.appendChild(option1);
  const option2 = document.createElement("option");
  option2.classList.add("medium");
  option2.setAttribute("value", "Medium");
  option2.textContent = "Medium";
  option2.style.color = "orange";
  priorityPicker.appendChild(option2);
  const option3 = document.createElement("option");
  option3.classList.add("high");
  option3.setAttribute("value", "High");
  option3.textContent = "High";
  option3.style.color = "red";
  priorityPicker.appendChild(option3);
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project";
  controls.appendChild(projectLabel);
  const projectPicker = document.createElement("select");
  projectPicker.setAttribute("id", "project");
  projectPicker.setAttribute("change", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  projectPicker.setAttribute("name", "project");
  controls.appendChild(projectPicker);
  const projectPlaceholder = document.createElement("option");
  projectPlaceholder.setAttribute("value", "");
  projectPlaceholder.setAttribute("disabled", "");
  projectPlaceholder.setAttribute("selected", "");
  projectPlaceholder.textContent = "Select";
  projectPicker.appendChild(projectPlaceholder);
  const option4 = document.createElement("option");
  option4.classList.add("personal");
  option4.setAttribute("value", "personal");
  option4.textContent = "Personal";
  projectPicker.appendChild(option4);
  const option5 = document.createElement("option");
  option5.classList.add("work");
  option5.setAttribute("value", "work");
  option5.textContent = "Work";
  projectPicker.appendChild(option5);
  const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

  // Dynamically load options from local storage
  existingProjects.forEach(project => {
    const option = document.createElement("option");
    option.setAttribute("value", project.id);
    option.textContent = project.projectTitle;
    console.log(option.textContent);
    projectPicker.appendChild(option);
  });
  const buttonBox = document.createElement("div");
  buttonBox.classList.add("buttonBox");
  popupForm.appendChild(buttonBox);
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "submit");
  button.textContent = "Submit";
  button.addEventListener("click", () => {
    (0,_formActions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  buttonBox.appendChild(button);
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "cancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", _formcancel__WEBPACK_IMPORTED_MODULE_2__["default"]);
  buttonBox.appendChild(cancelButton);
  const editPopup = document.createElement("div");
  editPopup.classList.add("editPopup");
  editPopup.style.filter = "none";
  editPopup.style.display = "none";
  container.appendChild(editPopup);
  const editPopupForm = document.createElement("form");
  editPopupForm.setAttribute("id", "editPopupForm");
  editPopupForm.setAttribute("name", "editPopupForm");
  editPopup.appendChild(editPopupForm);
  const editPopupTitle = document.createElement("textarea");
  editPopupTitle.setAttribute("id", "editPopupTitle");
  editPopupTitle.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editPopupTitle.setAttribute("maxlength", "50");
  editPopupTitle.setAttribute("placeholder", "Title");
  editPopupTitle.setAttribute("name", "editPopupTitle");
  editPopupTitle.setAttribute("required", "");
  editPopupForm.appendChild(editPopupTitle);
  const editPopupDescription = document.createElement("textarea");
  editPopupDescription.setAttribute("id", "editPopupDescription");
  editPopupDescription.setAttribute("maxlength", "140");
  editPopupDescription.setAttribute("placeholder", "Description");
  editPopupForm.appendChild(editPopupDescription);
  const editControls = document.createElement("div");
  editControls.classList.add("editControls");
  editPopupForm.appendChild(editControls);
  const editDateLabel = document.createElement("label");
  editDateLabel.setAttribute("for", "editduedate");
  editDateLabel.textContent = "Due Date";
  editControls.appendChild(editDateLabel);
  const editDatePicker = document.createElement("input");
  editDatePicker.setAttribute("type", "date");
  editDatePicker.setAttribute("id", "editduedate");
  editDatePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editDatePicker.setAttribute("name", "editduedate");
  editDatePicker.setAttribute("placeholder", "Today");
  editDatePicker.required = true;
  editControls.appendChild(editDatePicker);
  const editTimeLabel = document.createElement("label");
  editTimeLabel.setAttribute("for", "editduetime");
  editTimeLabel.textContent = "Time";
  editControls.appendChild(editTimeLabel);
  const editTimePicker = document.createElement("input");
  editTimePicker.setAttribute("type", "time");
  editTimePicker.setAttribute("id", "editduetime");
  editTimePicker.addEventListener("input", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editTimePicker.setAttribute("name", "editduetime");
  editTimePicker.setAttribute("placeholder", "now");
  editTimePicker.setAttribute("required", "");
  editControls.appendChild(editTimePicker);
  const editPriorityLabel = document.createElement("label");
  editPriorityLabel.setAttribute("for", "editpriority");
  editPriorityLabel.textContent = "Priority Level";
  editControls.appendChild(editPriorityLabel);
  const editPriorityPicker = document.createElement("select");
  editPriorityPicker.setAttribute("id", "editpriority");
  editPriorityPicker.setAttribute("change", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editPriorityPicker.setAttribute("name", "editpriority");
  editPriorityPicker.required = true;
  editControls.appendChild(editPriorityPicker);
  const editOptionPlaceholder = document.createElement("option");
  editOptionPlaceholder.setAttribute("value", "");
  editOptionPlaceholder.setAttribute("disabled", "");
  editOptionPlaceholder.setAttribute("selected", "");
  editOptionPlaceholder.textContent = "Select";
  editPriorityPicker.appendChild(editOptionPlaceholder);
  const editOption1 = document.createElement("option");
  editOption1.classList.add("low");
  editOption1.setAttribute("value", "Low");
  editOption1.textContent = "Low";
  editOption1.style.color = "green";
  editPriorityPicker.appendChild(editOption1);
  const editOption2 = document.createElement("option");
  editOption2.classList.add("medium");
  editOption2.setAttribute("value", "Medium");
  editOption2.textContent = "Medium";
  editOption2.style.color = "orange";
  editPriorityPicker.appendChild(editOption2);
  const editOption3 = document.createElement("option");
  editOption3.classList.add("high");
  editOption3.setAttribute("value", "High");
  editOption3.textContent = "High";
  editOption3.style.color = "red";
  editPriorityPicker.appendChild(editOption3);
  const editProjectLabel = document.createElement("label");
  editProjectLabel.setAttribute("for", "editproject");
  editProjectLabel.textContent = "Project";
  editControls.appendChild(editProjectLabel);
  const editProjectPicker = document.createElement("select");
  editProjectPicker.setAttribute("id", "editproject");
  editProjectPicker.setAttribute("change", _formvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  editProjectPicker.setAttribute("name", "editproject");
  editControls.appendChild(editProjectPicker);
  const editProjectPlaceholder = document.createElement("option");
  editProjectPlaceholder.setAttribute("value", "");
  editProjectPlaceholder.setAttribute("disabled", "");
  editProjectPlaceholder.setAttribute("selected", "");
  editProjectPlaceholder.textContent = "Select";
  editProjectPicker.appendChild(editProjectPlaceholder);
  const editOption4 = document.createElement("option");
  editOption4.classList.add("personal");
  editOption4.setAttribute("value", "personal");
  editOption4.textContent = "Personal";
  editProjectPicker.appendChild(editOption4);
  const editOption5 = document.createElement("option");
  editOption5.classList.add("work");
  editOption5.setAttribute("value", "work");
  editOption5.textContent = "Work";
  editProjectPicker.appendChild(editOption5);

  // Dynamically load options from local storage
  existingProjects.forEach(project => {
    const editOption = document.createElement("option");
    editOption.setAttribute("value", project.id);
    editOption.textContent = project.projectTitle;
    console.log(editOption.textContent);
    editProjectPicker.appendChild(editOption);
  });
  const editButtonBox = document.createElement("div");
  editButtonBox.classList.add("editButtonBox");
  editPopupForm.appendChild(editButtonBox);
  const editButton = document.createElement("button");
  editButton.setAttribute("type", "button");
  editButton.setAttribute("id", "editsubmit");
  editButton.textContent = "Submit";
  editButtonBox.appendChild(editButton);
  const editCancelButton = document.createElement("button");
  editCancelButton.setAttribute("type", "button");
  editCancelButton.setAttribute("id", "editcancel");
  editCancelButton.textContent = "Cancel";
  editCancelButton.addEventListener("click", _formcancel__WEBPACK_IMPORTED_MODULE_2__.editCancelForm);
  editButtonBox.appendChild(editCancelButton);
  const todoDisplay = document.createElement("div");
  todoDisplay.classList.add("todoDisplay");
  todoDisplay.style.filter = "none";
  todoDisplay.style.display = "none";
  container.appendChild(todoDisplay);
  const todoDisplayCard = document.createElement("div");
  todoDisplayCard.classList.add("todoDisplayCard");
  todoDisplay.appendChild(todoDisplayCard);
  const todoDisplayTitle = document.createElement("h3");
  todoDisplayTitle.classList.add("todoDisplayTitle");
  todoDisplayCard.appendChild(todoDisplayTitle);
  const todoDisplayPara = document.createElement("h4");
  todoDisplayPara.classList.add("todoDisplayPara");
  todoDisplayCard.appendChild(todoDisplayPara);
  const todoDisplayControls = document.createElement("div");
  todoDisplayControls.classList.add("todoDisplayControls");
  todoDisplayCard.appendChild(todoDisplayControls);
  const todoDisplayDateLabel = document.createElement("h5");
  todoDisplayDateLabel.classList.add("todoDisplayDateLabel");
  todoDisplayDateLabel.textContent = "Due Date:";
  todoDisplayControls.appendChild(todoDisplayDateLabel);
  const todoDisplayDate = document.createElement("p");
  todoDisplayDate.classList.add("todoDisplayDate");
  todoDisplayControls.appendChild(todoDisplayDate);
  const todoDisplayTimeLabel = document.createElement("h5");
  todoDisplayTimeLabel.classList.add("todoDisplayTimeLabel");
  todoDisplayTimeLabel.textContent = "Time:";
  todoDisplayControls.appendChild(todoDisplayTimeLabel);
  const todoDisplayTime = document.createElement("p");
  todoDisplayTime.classList.add("todoDisplayTime");
  todoDisplayControls.appendChild(todoDisplayTime);
  const todoDisplayPriorityLabel = document.createElement("h5");
  todoDisplayPriorityLabel.classList.add("todoDisplayPriorityLabel");
  todoDisplayPriorityLabel.textContent = "Priority Level:";
  todoDisplayControls.appendChild(todoDisplayPriorityLabel);
  const todoDisplayPriority = document.createElement("p");
  todoDisplayPriority.classList.add("todoDisplayPriority");
  todoDisplayControls.appendChild(todoDisplayPriority);
  const todoDisplayProjectLabel = document.createElement("h5");
  todoDisplayProjectLabel.classList.add("todoDisplayProjectLabel");
  todoDisplayProjectLabel.textContent = "Project Category:";
  todoDisplayControls.appendChild(todoDisplayProjectLabel);
  const todoDisplayProject = document.createElement("p");
  todoDisplayProject.classList.add("todoDisplayProject");
  todoDisplayControls.appendChild(todoDisplayProject);
  const closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.setAttribute("type", "button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", _formcancel__WEBPACK_IMPORTED_MODULE_2__.closeDisplay);
  todoDisplayCard.appendChild(closeButton);
  (0,_projectpopup__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject() {
  const projectPopup = document.querySelector(".projectPopup");
  projectPopup.style.display = "grid";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}

/***/ }),

/***/ "./src/modules/displayhidedetails.js":
/*!*******************************************!*\
  !*** ./src/modules/displayhidedetails.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHideDetails)
/* harmony export */ });
function displayHideDetails(event) {
  const popup = document.querySelector(".todoDisplay");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
  const identity = event.currentTarget.parentElement.getAttribute("id");
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let matchingTask = null;
  existingTasks.forEach(task => {
    // eslint-disable-next-line eqeqeq
    if (task.index == identity) {
      matchingTask = task;
    }
    if (matchingTask) {
      const popupTitle = document.querySelector(".todoDisplayTitle");
      popupTitle.textContent = matchingTask.title;
      const popupDescription = document.querySelector(".todoDisplayPara");
      popupDescription.textContent = matchingTask.description;
      console.log(popupDescription.value);
      const popupPriority = document.querySelector(".todoDisplayPriority");
      popupPriority.textContent = matchingTask.priority;
      console.log(popupPriority.value);
      const popupProject = document.querySelector(".todoDisplayProject");
      popupProject.textContent = matchingTask.project;
      const projectDueDate = document.querySelector(".todoDisplayDate");
      projectDueDate.textContent = matchingTask.dueDate;
      const projectDueTime = document.querySelector(".todoDisplayTime");
      projectDueTime.textContent = matchingTask.dueTime;
    }
  });
}

/***/ }),

/***/ "./src/modules/displayhideeditpopup.js":
/*!*********************************************!*\
  !*** ./src/modules/displayhideeditpopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHideEditPopup)
/* harmony export */ });
function displayHideEditPopup() {
  const popup = document.querySelector(".editPopup");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}

/***/ }),

/***/ "./src/modules/displayhidepopup.js":
/*!*****************************************!*\
  !*** ./src/modules/displayhidepopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHidePopup)
/* harmony export */ });
function displayHidePopup() {
  const popup = document.querySelector(".popup");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}

/***/ }),

/***/ "./src/modules/duetoday.js":
/*!*********************************!*\
  !*** ./src/modules/duetoday.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dueToday)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

function dueToday() {
  const upcomingTodos = document.querySelector(".upcomingTodos");
  const listTodos = document.querySelector(".listTodos");
  const today = new Date();
  const dateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(today, "yyyy-MM-dd");
  const todos = document.querySelectorAll(".todoListDueDate");
  todos.forEach(todo => {
    if (todo.parentNode.classList.contains("dueToday")) {
      // do nothing. Ensures no duplicates
    }
    if (todo.parentNode.classList.contains("dueUpcoming")) {
      upcomingTodos.removeChild(todo.parentNode);
      listTodos.appendChild(todo.parentNode);
      todo.parentNode.classList.remove("dueUpcoming");
    }
    /* function deleteinterior() {
      upcomingTodos.innerHTML = "";
    }
    deleteinterior(); */

    if (todo.textContent === dateFormatted) {
      const yesmobileMode = localStorage.getItem("mobile");
      if (yesmobileMode === "enabled") {
        const popup = document.querySelector(".sidePanel");
        const content = document.querySelector(".mainPanel");
        popup.style.display = "none";
        content.style.filter = "none";
        content.style.webkitFilter = "none";
        localStorage.setItem("mobile", null);
      }
      todo.parentNode.classList.add("dueToday");
      const inbox = document.querySelector(".inboxPage");
      inbox.style.display = "none";
      const upcoming = document.querySelector(".upcomingPage");
      upcoming.style.display = "none";
      const todayPage = document.querySelector(".todayPage");
      todayPage.style.display = "block";
      const todayTodos = document.querySelector(".todayTodos");
      listTodos.removeChild(todo.parentNode);
      todayTodos.appendChild(todo.parentNode);
    }
  });
}

/***/ }),

/***/ "./src/modules/formActions.js":
/*!************************************!*\
  !*** ./src/modules/formActions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formActions)
/* harmony export */ });
/* harmony import */ var _buttonfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonfunctions */ "./src/modules/buttonfunctions.js");

function formActions() {
  const popupForm = document.querySelector("#popupForm"); // call eventlistener to form so that preventdefault works
  popupForm.addEventListener("submit",
  // click method only validated first item in form, not all items
  event => {
    event.preventDefault();
    (0,_buttonfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const yesmobileMode = localStorage.getItem("mobile");
    if (yesmobileMode === "enabled") {
      const popup = document.querySelector(".sidePanel");
      const content = document.querySelector(".mainPanel");
      popup.style.display = "none";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      localStorage.setItem("mobile", null);
    }
    const content = document.querySelector(".content");
    const popup = document.querySelector(".popup");
    document.getElementById("popupTitle").value = "";
    document.getElementById("popupDescription").value = "";
    document.getElementById("duedate").value = "";
    document.getElementById("duetime").value = "";
    document.getElementById("priority").value = "";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    popup.style.display = "none";
  }, true);
}

/***/ }),

/***/ "./src/modules/formcancel.js":
/*!***********************************!*\
  !*** ./src/modules/formcancel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeDisplay: () => (/* binding */ closeDisplay),
/* harmony export */   "default": () => (/* binding */ cancelForm),
/* harmony export */   editCancelForm: () => (/* binding */ editCancelForm)
/* harmony export */ });
function cancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".popup");
  document.getElementById("popupTitle").value = "";
  document.getElementById("popupDescription").value = "";
  document.getElementById("duedate").value = "";
  document.getElementById("duetime").value = "";
  document.getElementById("priority").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}
function editCancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".editPopup");
  document.getElementById("editPopupTitle").value = "";
  document.getElementById("editPopupDescription").value = "";
  document.getElementById("editduedate").value = "";
  document.getElementById("editduetime").value = "";
  document.getElementById("editpriority").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}
function closeDisplay() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".todoDisplay");
  document.querySelector(".todoDisplayTitle").value = "";
  document.querySelector(".todoDisplayPara").value = "";
  document.querySelector(".todoDisplayDate").value = "";
  document.querySelector(".todoDisplayTime").value = "";
  document.querySelector(".todoDisplayPriority").value = "";
  document.querySelector(".todoDisplayProject").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}

/***/ }),

/***/ "./src/modules/formvalidation.js":
/*!***************************************!*\
  !*** ./src/modules/formvalidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableSubmit)
/* harmony export */ });
/* eslint-disable no-plusplus */
function enableSubmit() {
  const popupForm = document.querySelector("#popupForm");
  const requiredFields = popupForm.querySelectorAll("[required]");
  let allFilled = true;
  const submitButton = document.querySelector("#submit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
  requiredFields.forEach(field => {
    if (!field.value) {
      allFilled = false;
    }
  });
}

/* document.getElementById("submit").addEventListener("click", () => {
  console.log("You entered:", document.querySelector("#popupTitle").value);
}); */

/***/ }),

/***/ "./src/modules/inboxpage.js":
/*!**********************************!*\
  !*** ./src/modules/inboxpage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inboxPage)
/* harmony export */ });
/* harmony import */ var _rendertodolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendertodolist */ "./src/modules/rendertodolist.js");
// import { arr } from "./buttonfunctions";

// import { getFromLocalStorage } from "..";

function inboxPage() {
  const todos = document.querySelectorAll(".todoListDueDate");
  const todayTodos = document.querySelector(".todayTodos");
  const upcomingTodos = document.querySelector(".upcomingTodos");
  todos.forEach(todo => {
    if (todo.parentNode.classList.contains("dueToday")) {
      todayTodos.removeChild(todo.parentNode);
      todo.parentNode.classList.remove("dueToday");
    } else if (todo.parentNode.classList.contains("dueUpcoming")) {
      upcomingTodos.removeChild(todo.parentNode);
      todo.parentNode.classList.remove("dueUpcoming");
    }
  });
  todayTodos.innerHTML = "";
  upcomingTodos.innerHTML = "";
  const reference = localStorage.getItem("tasks");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    const todolist = JSON.parse(reference);
    todolist.forEach(t => {
      console.log(t.dueDate);

      // t.dueDate = parseISO(t.dueDate, "yyyy-MM-dd");
    });

    const filtering = todolist.filter(el => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    const arr = filtering.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    (0,_rendertodolist__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
  }
  const yesmobileMode = localStorage.getItem("mobile");
  if (yesmobileMode === "enabled") {
    const popup = document.querySelector(".sidePanel");
    const content = document.querySelector(".mainPanel");
    popup.style.display = "none";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
  const inbox = document.querySelector(".inboxPage");
  inbox.style.display = "block";
  const upcoming = document.querySelector(".upcomingPage");
  upcoming.style.display = "none";
  const todayPage = document.querySelector(".todayPage");
  todayPage.style.display = "none";
}

/***/ }),

/***/ "./src/modules/loadpageprojects.js":
/*!*****************************************!*\
  !*** ./src/modules/loadpageprojects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadpage)
/* harmony export */ });
/* harmony import */ var _rendertodolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendertodolist */ "./src/modules/rendertodolist.js");

function loadpage() {
  const todolist = JSON.parse(localStorage.getItem("tasks")) || [];
  const filtering = todolist.filter(el => el.project === this.id);
  const arr = filtering.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const yesmobileMode = localStorage.getItem("mobile");
  if (yesmobileMode === "enabled") {
    const popup = document.querySelector(".sidePanel");
    const content = document.querySelector(".mainPanel");
    popup.style.display = "none";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
  (0,_rendertodolist__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   existingProjects: () => (/* binding */ existingProjects)
/* harmony export */ });
/* unused harmony export existingTasks */
// Retrieve existing tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];

// Add a new task
function addTask(todo) {
  existingTasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
}
function addProject(project) {
  existingProjects.push(project);
  localStorage.setItem("projects", JSON.stringify(existingProjects));
}


/***/ }),

/***/ "./src/modules/projectFormActions.js":
/*!*******************************************!*\
  !*** ./src/modules/projectFormActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectFormActions)
/* harmony export */ });
/* harmony import */ var _projectbuttonfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectbuttonfunctions */ "./src/modules/projectbuttonfunctions.js");

function projectFormActions() {
  (0,_projectbuttonfunctions__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const yesmobileMode = localStorage.getItem("mobile");
  if (yesmobileMode === "enabled") {
    const popup = document.querySelector(".sidePanel");
    const content = document.querySelector(".mainPanel");
    popup.style.display = "none";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
  const content = document.querySelector(".content");
  const projectPopup = document.querySelector(".projectPopup");
  document.getElementById("projectName").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  projectPopup.style.display = "none";
}

/***/ }),

/***/ "./src/modules/projectbuttonfunctions.js":
/*!***********************************************!*\
  !*** ./src/modules/projectbuttonfunctions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectButtonFunctions)
/* harmony export */ });
/* harmony import */ var _renderproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderproject */ "./src/modules/renderproject.js");
/* harmony import */ var _projectvalidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectvalidation */ "./src/modules/projectvalidation.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/modules/localstorage.js");



function projectButtonFunctions() {
  (0,_projectvalidation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  function projectItems(projectTitle, id) {
    return {
      projectTitle,
      id
    };
  }
  const projects = [];
  const projectList = () => {
    const addNewProject = (projectTitle, id) => {
      const newProject = projectItems(projectTitle, id);
      projects.push(newProject);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.addProject)(newProject);
    };
    return {
      addNewProject,
      projects
    };
  };
  const projectTitle = document.getElementById("projectName").value;
  console.log(projectTitle);
  const id = Date.now();
  console.log(id);
  // need code below so that the project is instanteneously available in dropdown of popup for todo creation
  const option = document.createElement("option");
  option.setAttribute("value", id);
  option.textContent = projectTitle;
  console.log(option.textContent);
  document.getElementById("project").appendChild(option);
  // till here
  const finalProjectList = projectList();
  finalProjectList.addNewProject(projectTitle, id);
  if (projectTitle === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    (0,_renderproject__WEBPACK_IMPORTED_MODULE_2__["default"])(_localstorage__WEBPACK_IMPORTED_MODULE_1__.existingProjects);
  }
}

/***/ }),

/***/ "./src/modules/projectformcancel.js":
/*!******************************************!*\
  !*** ./src/modules/projectformcancel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCancelForm)
/* harmony export */ });
function projectCancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".projectPopup");
  document.getElementById("projectName").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}

/***/ }),

/***/ "./src/modules/projectpopup.js":
/*!*************************************!*\
  !*** ./src/modules/projectpopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreationPopup)
/* harmony export */ });
/* harmony import */ var _projectFormActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFormActions */ "./src/modules/projectFormActions.js");
/* harmony import */ var _projectvalidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectvalidation */ "./src/modules/projectvalidation.js");
/* harmony import */ var _projectformcancel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectformcancel */ "./src/modules/projectformcancel.js");



function projectCreationPopup() {
  const container = document.querySelector(".container");
  const projectPopup = document.createElement("div");
  projectPopup.classList.add("projectPopup");
  projectPopup.style.filter = "none";
  projectPopup.style.display = "none";
  container.appendChild(projectPopup);
  const projectPopupForm = document.createElement("form");
  projectPopupForm.setAttribute("id", "projectPopupForm ");
  projectPopupForm.setAttribute("name", "projectPopupForm ");
  projectPopup.appendChild(projectPopupForm);
  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "projectName");
  projectLabel.textContent = "Project Name";
  projectPopupForm.appendChild(projectLabel);
  const projectName = document.createElement("input");
  projectName.setAttribute("type", "text");
  projectName.setAttribute("id", "projectName");
  projectName.addEventListener("input", _projectvalidation__WEBPACK_IMPORTED_MODULE_0__["default"]);
  projectName.setAttribute("name", "projectName");
  projectName.setAttribute("placeholder", "Gym");
  projectName.required = true;
  projectPopupForm.appendChild(projectName);
  const buttonBox = document.createElement("div");
  buttonBox.classList.add("projectButtonBox");
  projectPopupForm.appendChild(buttonBox);
  const button = document.createElement("button");
  button.setAttribute("type", "button"); // no form validation needed through required tag. Used an if/else statement to check for blank input
  button.setAttribute("id", "projectSubmit");
  button.textContent = "Submit";
  button.addEventListener("click", _projectFormActions__WEBPACK_IMPORTED_MODULE_1__["default"]);
  buttonBox.appendChild(button);
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "projectCancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", _projectformcancel__WEBPACK_IMPORTED_MODULE_2__["default"]);
  buttonBox.appendChild(cancelButton);
}

/* function call() {
  document.addEventListener("click", (e) => {
    const projectPopup = document.querySelector(".projectPopup");
    if (
      projectPopup.style.display === "grid" &&
      e.target.class !== "projectPopup"
    ) {
      projectPopup.style.display = "none";
      const content = document.querySelector(".content");
      document.getElementById("projectName").value = "";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
    }
  });
}
call(); */

/***/ }),

/***/ "./src/modules/projectvalidation.js":
/*!******************************************!*\
  !*** ./src/modules/projectvalidation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enableProjectSubmit)
/* harmony export */ });
/* eslint-disable no-plusplus */
function enableProjectSubmit() {
  const projectName = document.querySelector("#projectName");
  let allFilled = true;
  const submitButton = document.querySelector("#projectSubmit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
  if (!projectName.value) {
    allFilled = false;
  }
}

/***/ }),

/***/ "./src/modules/renderproject.js":
/*!**************************************!*\
  !*** ./src/modules/renderproject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderProject)
/* harmony export */ });
/* harmony import */ var _loadpageprojects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpageprojects */ "./src/modules/loadpageprojects.js");
/* eslint-disable no-plusplus */
// import todoListDeleteButton from "./todolistdelete";

function renderProject(existingProjects) {
  const variableProjects = document.querySelector("#variableProjects");
  variableProjects.innerHTML = "";
  for (let i = 0; i < existingProjects.length; i++) {
    const item = existingProjects[i];
    const newProject = document.createElement("button");
    newProject.setAttribute("id", item.id);
    newProject.setAttribute("type", "button");
    newProject.addEventListener("click", _loadpageprojects__WEBPACK_IMPORTED_MODULE_0__["default"]);
    const text = document.createElement("h3");
    text.textContent = item.projectTitle;
    newProject.appendChild(text);
    variableProjects.appendChild(newProject);
    const projectDelete = document.createElement("svg");
    projectDelete.classList.add("projectDelete");
    projectDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    projectDelete.addEventListener("click", event => {
      event.preventDefault();
      const identity = event.currentTarget.parentNode.getAttribute("id");
      console.log(identity);
      const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
      const newstoredProjects = storedProjects.filter(
      // eslint-disable-next-line eqeqeq
      el => el.id != identity);
      localStorage.setItem("projects", JSON.stringify(newstoredProjects));
      window.location.reload(); // opted for this so that the dropdown menu in popup.js is also updated
    });

    newProject.appendChild(projectDelete);
  }
}

/***/ }),

/***/ "./src/modules/rendertodolist.js":
/*!***************************************!*\
  !*** ./src/modules/rendertodolist.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderTodoList)
/* harmony export */ });
/* unused harmony export newArray */
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _todolistedit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todolistedit */ "./src/modules/todolistedit.js");
/* harmony import */ var _todolistchecked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolistchecked */ "./src/modules/todolistchecked.js");
/* harmony import */ var _displayhidedetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayhidedetails */ "./src/modules/displayhidedetails.js");
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */





// import { removeTask } from "./localstorage";

const newArray = [];
function renderTodoList(arr) {
  const listTodos = document.querySelector(".listTodos");
  listTodos.innerHTML = "";
  arr.filter(item => item);
  arr.sort((a, b) => a.dueDate - b.dueDate);
  for (let i = 0; i < arr.length; i++) {
    const todo = arr[i];
    const todoListItem = document.createElement("li");
    todoListItem.setAttribute("id", todo.index);
    todoListItem.classList.add("todoListItem");
    if (todo.checked === true) {
      todoListItem.classList.add("checked");
    }
    listTodos.appendChild(todoListItem);
    const todoListPriority = document.createElement("svg");
    todoListPriority.classList.add("todoListPriority");
    if (todo.priority === "Low") {
      // set different svg colors for all priority levels
      todoListPriority.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    } else if (todo.priority === "Medium") {
      todoListPriority.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    } else {
      todoListPriority.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
    }
    todoListPriority.addEventListener("click", _todolistchecked__WEBPACK_IMPORTED_MODULE_0__["default"]);
    todoListItem.appendChild(todoListPriority);
    const todoListTitle = document.createElement("div");
    todoListTitle.classList.add("todoListTitle");
    todoListTitle.textContent = todo.title;
    todoListItem.appendChild(todoListTitle);
    const todoListButton = document.createElement("button");
    todoListButton.setAttribute("id", "todoListButton");
    todoListButton.setAttribute("type", "button");
    todoListButton.addEventListener("click", _displayhidedetails__WEBPACK_IMPORTED_MODULE_1__["default"]);
    todoListButton.textContent = "DETAILS";
    todoListItem.appendChild(todoListButton);
    const todoListDueDate = document.createElement("div");
    todoListDueDate.classList.add("todoListDueDate");
    const dateFormatted = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(todo.dueDate, "yyyy-MM-dd"), "yyyy-MM-dd");
    todoListDueDate.textContent = dateFormatted;
    todoListItem.appendChild(todoListDueDate);
    const todoListDueTime = document.createElement("div");
    todoListDueTime.classList.add("todoListDueTime");
    todoListDueTime.textContent = todo.dueTime;
    todoListItem.appendChild(todoListDueTime);
    const todoListEdit = document.createElement("svg");
    todoListEdit.classList.add("todoListEdit");
    todoListEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
    todoListEdit.addEventListener("click", _todolistedit__WEBPACK_IMPORTED_MODULE_4__["default"]);
    todoListItem.appendChild(todoListEdit);
    const todoListDelete = document.createElement("svg");
    todoListDelete.classList.add("todoListDelete");
    // todoListDelete.dataset.index = todo.index;
    todoListDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    todoListDelete.addEventListener("click", event => {
      event.preventDefault();
      const identity = event.currentTarget.parentElement.getAttribute("id");
      console.log(identity);
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      // eslint-disable-next-line eqeqeq
      const newTodoList = existingTasks.filter(el => el.index != identity);
      localStorage.setItem("tasks", JSON.stringify(newTodoList));
      window.location.reload();
    });
    todoListItem.appendChild(todoListDelete);
  }
}


/***/ }),

/***/ "./src/modules/sidepanel.js":
/*!**********************************!*\
  !*** ./src/modules/sidepanel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidePanelFunction)
/* harmony export */ });
/* harmony import */ var _displayhidepopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayhidepopup */ "./src/modules/displayhidepopup.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _duetoday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duetoday */ "./src/modules/duetoday.js");
/* harmony import */ var _inboxpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxpage */ "./src/modules/inboxpage.js");
/* harmony import */ var _upcomingpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upcomingpage */ "./src/modules/upcomingpage.js");
/* harmony import */ var _loadpageprojects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadpageprojects */ "./src/modules/loadpageprojects.js");






function sidePanelFunction() {
  const sidePanel = document.querySelector(".sidePanel");
  const topPanel = document.createElement("div");
  topPanel.classList.add("topPanel");
  sidePanel.appendChild(topPanel);
  const inbox = document.createElement("button");
  inbox.setAttribute("id", "inbox");
  inbox.setAttribute("type", "button");
  inbox.addEventListener("click", _inboxpage__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const icon1 = document.createElement("div");
  icon1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>';
  inbox.appendChild(icon1);
  const text1 = document.createElement("h3");
  text1.textContent = "Inbox";
  inbox.appendChild(text1);
  topPanel.appendChild(inbox);
  const today = document.createElement("button");
  today.setAttribute("id", "today");
  today.setAttribute("type", "button");
  today.addEventListener("click", _duetoday__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const icon2 = document.createElement("div");
  icon2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  today.appendChild(icon2);
  const text2 = document.createElement("h3");
  text2.textContent = "Today";
  today.appendChild(text2);
  topPanel.appendChild(today);
  const upcoming = document.createElement("button");
  upcoming.setAttribute("id", "upcoming");
  upcoming.setAttribute("type", "button");
  upcoming.addEventListener("click", _upcomingpage__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const icon3 = document.createElement("div");
  icon3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
  upcoming.appendChild(icon3);
  const text3 = document.createElement("h3");
  text3.textContent = "Upcoming";
  upcoming.appendChild(text3);
  topPanel.appendChild(upcoming);
  const addButton = document.createElement("button");
  addButton.setAttribute("id", "addButton");
  addButton.setAttribute("type", "button");
  addButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  addButton.addEventListener("click", _displayhidepopup__WEBPACK_IMPORTED_MODULE_3__["default"]);
  sidePanel.appendChild(addButton);
  const tooltip1 = document.createElement("span");
  tooltip1.classList.add("tooltip");
  tooltip1.textContent = "Add To Do Item";
  addButton.appendChild(tooltip1);
  const bottomPanel = document.createElement("div");
  bottomPanel.classList.add("bottomPanel");
  sidePanel.appendChild(bottomPanel);
  const projects = document.createElement("div");
  projects.setAttribute("id", "projects");
  bottomPanel.appendChild(projects);
  const projectsTitle = document.createElement("h2");
  projectsTitle.textContent = "Projects";
  projects.appendChild(projectsTitle);
  const personal = document.createElement("button");
  personal.setAttribute("id", "personal");
  personal.setAttribute("type", "button");
  personal.addEventListener("click", _loadpageprojects__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const text4 = document.createElement("h3");
  text4.textContent = "Personal";
  personal.appendChild(text4);
  bottomPanel.appendChild(personal);
  const work = document.createElement("button");
  work.setAttribute("id", "work");
  work.setAttribute("type", "button");
  work.addEventListener("click", _loadpageprojects__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const text5 = document.createElement("h3");
  text5.textContent = "Work";
  work.appendChild(text5);
  bottomPanel.appendChild(work);
  const variableProjects = document.createElement("div");
  variableProjects.setAttribute("id", "variableProjects");
  bottomPanel.appendChild(variableProjects);
  const addProject = document.createElement("button");
  addProject.setAttribute("id", "addProject");
  addProject.setAttribute("type", "button");
  addProject.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  addProject.addEventListener("click", _createProject__WEBPACK_IMPORTED_MODULE_5__["default"]);
  sidePanel.appendChild(addProject);
  const tooltip2 = document.createElement("span");
  tooltip2.classList.add("tooltip");
  tooltip2.textContent = "Add Projects";
  addProject.appendChild(tooltip2);
}

/***/ }),

/***/ "./src/modules/startpage.js":
/*!**********************************!*\
  !*** ./src/modules/startpage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startPage)
/* harmony export */ });
function startPage() {
  const {
    body
  } = document;
  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);
  const menu = document.createElement("button");
  menu.classList.add("menu");
  menu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  // menu.style.display = "none";
  header.appendChild(menu);
  const title = document.createElement("h1");
  title.textContent = "To-Do List";
  header.appendChild(title);
  const darkModeToggle = document.createElement("button");
  darkModeToggle.setAttribute("id", "darkModeToggle");
  darkModeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" /></svg>';
  header.appendChild(darkModeToggle);
}

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoList: () => (/* binding */ createTodoList)
/* harmony export */ });
/* unused harmony export todos */
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/modules/localstorage.js");


/* eslint-disable no-plusplus */
function todoitems(title, description, dueDate, dueTime, priority, index, project, checked) {
  return {
    title,
    description,
    dueDate,
    dueTime,
    priority,
    index,
    project,
    checked
  };
}
const todos = [];
const createTodoList = () => {
  const addTodo = (title, description, dueDate, dueTime, priority, index, project, checked) => {
    const newTodo = todoitems(title, description, dueDate, dueTime, priority, index, project, checked);
    if (title === "" && dueDate.valueOf().isNaN) {
      // require this so that blank todos are not attached on subsequent submits
      // do nothing
    } else {
      todos.push(newTodo);
      (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.addTask)(newTodo);
    }
  };

  /* const toggleTodoCompletion = (index) => {
        todos[index].toggleCompletion();
        renderTodoList();
      }; */

  return {
    todos,
    addTodo /* removeTodo, toggleTodoCompletion */
  };
};



/***/ }),

/***/ "./src/modules/todolistchecked.js":
/*!****************************************!*\
  !*** ./src/modules/todolistchecked.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListChecked)
/* harmony export */ });
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
function todoListChecked(event) {
  event.preventDefault();
  const identity = event.currentTarget.parentElement.getAttribute("id");
  console.log(identity);
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  existingTasks.forEach(task => {
    if (task.index == identity) {
      console.log(task);
      if (task.checked === false) {
        task.checked = true;
      } else {
        task.checked = false;
      }
    }
    /* /if (element) {
        element.classList.add("checked");
      }
    }
    });
    */
  });

  localStorage.setItem("tasks", JSON.stringify(existingTasks));
  window.location.reload();
}

/***/ }),

/***/ "./src/modules/todolistedit.js":
/*!*************************************!*\
  !*** ./src/modules/todolistedit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListEditButton)
/* harmony export */ });
/* harmony import */ var _displayhideeditpopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayhideeditpopup */ "./src/modules/displayhideeditpopup.js");
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-inner-declarations */


// import formActions from "./formActions";

function todoListEditButton(event) {
  event.preventDefault();
  const identity = event.currentTarget.parentElement.getAttribute("id");
  console.log(identity);
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // const newones = existingTasks.filter((el) => el.index != identity);
  let matchingTask = null;
  existingTasks.forEach(task => {
    if (task.index == identity) {
      matchingTask = task;
    }
  });
  if (matchingTask) {
    // const newones = existingTasks.filter((el) => el.index != identity);
    // localStorage.setItem("tasks", JSON.stringify(newones));

    (0,_displayhideeditpopup__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const popupTitle = document.getElementById("editPopupTitle");
    popupTitle.value = matchingTask.title;
    const popupDescription = document.getElementById("editPopupDescription");
    popupDescription.value = matchingTask.description;
    const popupPriority = document.getElementById("editpriority");
    popupPriority.value = matchingTask.priority;
    const popupProject = document.getElementById("editproject");
    popupProject.value = matchingTask.project;
    // const projectDueDate = document.getElementById("editdueDate");
    // projectDueDate.value = matchingTask.dueDate;
    // const projectDueTime = document.getElementById("editdueTime");
    // projectDueTime.value = matchingTask.projectDueTime;

    const editSubmitButton = document.getElementById("editsubmit");
    editSubmitButton.addEventListener("click", () => {
      console.log(50);
      // e.preventDefault();
      const projectDueDate = document.getElementById("editduedate");
      console.log(projectDueDate.value);
      const projectDueTime = document.getElementById("editduetime");
      console.log(projectDueTime.value);
      const updatedTask = {
        ...matchingTask,
        title: popupTitle.value,
        description: popupDescription.value,
        priority: popupPriority.value,
        project: popupProject.value,
        dueTime: projectDueTime.value,
        dueDate: projectDueDate.value
      };

      /* const content = document.querySelector(".content");
      const popup = document.querySelector(".editPopup");
      popupTitle.value = "";
      popupDescription.value = "";
      popupPriority.value = "";
      popupProject.value = "";
      // projectDueDate.value = "";
      // projectDueTime.value = "";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      popup.style.display = "none"; */
      const id = existingTasks.indexOf(matchingTask);

      // Replace the element with updatedTask
      if (id !== -1) {
        existingTasks[id] = updatedTask;
      }
      console.log(updatedTask);
      console.log(existingTasks);
      // existingTasks[matchingTask.index] = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(existingTasks));
      window.location.reload();
    });
  }
}

/***/ }),

/***/ "./src/modules/upcomingpage.js":
/*!*************************************!*\
  !*** ./src/modules/upcomingpage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ upcomingPage)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* eslint-disable no-plusplus */

function upcomingPage() {
  const todayTodos = document.querySelector(".todayTodos");
  const listTodos = document.querySelector(".listTodos");
  const today = new Date();
  const dateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(today, "yyyy-MM-dd");
  const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dateFormatted);
  const week = [];
  const day1 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 1), "yyyy-MM-dd");
  const day2 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 2), "yyyy-MM-dd");
  const day3 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 3), "yyyy-MM-dd");
  const day4 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 4), "yyyy-MM-dd");
  const day5 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 5), "yyyy-MM-dd");
  const day6 = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(formattedDate, 6), "yyyy-MM-dd");
  week.push(dateFormatted, day1, day2, day3, day4, day5, day6);
  const todos = document.querySelectorAll(".todoListDueDate");
  todos.forEach(todo => {
    if (todo.parentNode.classList.contains("dueUpcoming")) {
      // do nothing. Ensures no duplicates
    }
    if (todo.parentNode.classList.contains("dueToday")) {
      todayTodos.removeChild(todo.parentNode);
      listTodos.appendChild(todo.parentNode);
      todo.parentNode.classList.remove("dueToday");
    }
    /* function deleteinterior() {
      todayTodos.innerHTML = "";
    }
    deleteinterior(); */

    for (let i = 0; i < week.length; i++) {
      if (todo.textContent === week[i]) {
        const yesmobileMode = localStorage.getItem("mobile");
        if (yesmobileMode === "enabled") {
          const popup = document.querySelector(".sidePanel");
          const content = document.querySelector(".mainPanel");
          popup.style.display = "none";
          content.style.filter = "none";
          content.style.webkitFilter = "none";
          localStorage.setItem("mobile", null);
        }
        todo.parentNode.classList.add("dueUpcoming");
        const inbox = document.querySelector(".inboxPage");
        inbox.style.display = "none";
        const upcoming = document.querySelector(".upcomingPage");
        upcoming.style.display = "block";
        const todayPage = document.querySelector(".todayPage");
        todayPage.style.display = "none";
        const upcomingTodos = document.querySelector(".upcomingTodos");
        listTodos.removeChild(todo.parentNode);
        upcomingTodos.appendChild(todo.parentNode);
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions)
/* harmony export */ });
/* unused harmony export setDefaultOptions */
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute)
/* harmony export */ });
/* unused harmony exports daysInWeek, daysInYear, maxTime, millisecondsInSecond, minTime, minutesInHour, monthsInQuarter, monthsInYear, quartersInYear, secondsInHour, secondsInMinute, secondsInDay, secondsInWeek, secondsInYear, secondsInMonth, secondsInQuarter */
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* harmony import */ var _modules_startpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startpage */ "./src/modules/startpage.js");
/* harmony import */ var _modules_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/container */ "./src/modules/container.js");
/* harmony import */ var _modules_sidepanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sidepanel */ "./src/modules/sidepanel.js");
/* harmony import */ var _modules_rendertodolist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/rendertodolist */ "./src/modules/rendertodolist.js");
/* harmony import */ var _modules_renderproject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderproject */ "./src/modules/renderproject.js");
// import { format, addDays, parseISO } from "date-fns";
// import parseJSON from "date-fns/parseJSON";






(0,_modules_startpage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_container__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_sidepanel__WEBPACK_IMPORTED_MODULE_2__["default"])();
const yesmobileMode = localStorage.getItem("mobile");
if (yesmobileMode === "enabled") {
  localStorage.setItem("mobile", null);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem("tasks");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    const todos = JSON.parse(reference);
    console.log(todos);
    const filtering = todos.filter(el => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    const arr = filtering.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    (0,_modules_rendertodolist__WEBPACK_IMPORTED_MODULE_3__["default"])(arr);
  }
  const projects = localStorage.getItem("projects");
  if (projects) {
    // converts back to array and store it in todos array
    const projectlist = JSON.parse(projects);
    console.log(projects);
    (0,_modules_renderproject__WEBPACK_IMPORTED_MODULE_4__["default"])(projectlist);
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
const mobileMode = localStorage.getItem("mobile");
const mobileToggle = document.querySelector(".menu");
const enableMobileMode = () => {
  const popup = document.querySelector(".sidePanel");
  const content = document.querySelector(".mainPanel");
  popup.style.display = "grid";
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
  localStorage.setItem("mobile", "enabled");
};

// this disables darkmode
const disableMobileMode = () => {
  const popup = document.querySelector(".sidePanel");
  const content = document.querySelector(".mainPanel");
  popup.style.display = "none";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  localStorage.setItem("mobile", null);
};

// checks if darkmode is enabled once a page loads
if (mobileMode === "enabled") {
  enableMobileMode();
}

// toggles between the two themes
mobileToggle.addEventListener("click", () => {
  const ifmobileMode = localStorage.getItem("mobile");
  if (ifmobileMode !== "enabled") {
    enableMobileMode();
  } else {
    disableMobileMode();
  }
});

// the below script is a counter against the mobile screen menu popup staying up if someone expands the screen
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    const content = document.querySelector(".mainPanel");
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
}
const x = window.matchMedia("(min-width: 450px)");
myFunction(x); // Call listener function at run time
x.addEventListener("change", myFunction); // Attach listener function on state changes
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FB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bkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGtCQUFrQiw0REFBTTtBQUN4QixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TG1DO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFHeE8sWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO0VBQ25ELElBQUl1TyxZQUFZLEtBQUssU0FBUyxFQUFFO0lBQzlCRixnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3BCLENBQUMsTUFBTTtJQUNMQyxpQkFBaUIsQ0FBQyxDQUFDO0VBQ3JCO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsU0FBU0UsVUFBVUEsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ3JCLElBQUlBLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2I7SUFDQSxNQUFNMU4sT0FBTyxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BEa0MsT0FBTyxDQUFDYyxLQUFLLENBQUMxQixNQUFNLEdBQUcsTUFBTTtJQUM3QlksT0FBTyxDQUFDYyxLQUFLLENBQUMwRSxZQUFZLEdBQUcsTUFBTTtJQUNuQ3pHLFlBQVksQ0FBQ21JLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0VBQ3RDO0FBQ0Y7QUFFQSxNQUFNdUcsQ0FBQyxHQUFHL0QsTUFBTSxDQUFDaUUsVUFBVSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pESCxVQUFVLENBQUNDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZkEsQ0FBQyxDQUFDdE0sZ0JBQWdCLENBQUMsUUFBUSxFQUFFcU0sVUFBVSxDQUFDLENBQUMsQ0FBQyw0QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2J1dHRvbmZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5aGlkZWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheWhpZGVlZGl0cG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheWhpZGVwb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kdWV0b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtY2FuY2VsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm12YWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luYm94cGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2FkcGFnZXByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0Rm9ybUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdGJ1dHRvbmZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0Zm9ybWNhbmNlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVycHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9yZW5kZXJ0b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zaWRlcGFuZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RhcnRwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9saXN0Y2hlY2tlZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvbGlzdGVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdXBjb21pbmdwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgcGFyc2VJU08gZnJvbSBcImRhdGUtZm5zL3BhcnNlSVNPXCI7XG5pbXBvcnQgcmVuZGVyVG9kb0xpc3QgZnJvbSBcIi4vcmVuZGVydG9kb2xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0IC8qICwgdG9kb3MgKi8gfSBmcm9tIFwiLi90b2RvbGlzdFwiO1xuaW1wb3J0IGVuYWJsZVN1Ym1pdCBmcm9tIFwiLi9mb3JtdmFsaWRhdGlvblwiO1xuXG5sZXQgYXJyID0gW107IC8vIG5lZWQgaXQgdG8gYmUgZXhwb3J0ZWQgc28gaXQncyB1c2VkIGluIHJlbmRlcmluZyB0aGUgaW5ib3gsIHRvZGF5LCB1cGNvbWluZyBwYWdlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXR0b25GdW5jdGlvbnMoKSB7XG4gIGVuYWJsZVN1Ym1pdCgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBUaXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwRGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtYXQoXG4gICAgcGFyc2VJU08oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVkYXRlXCIpLnZhbHVlLCBcInl5eXktTU0tZGRcIiksXG4gICAgXCJ5eXl5LU1NLWRkXCJcbiAgKTtcbiAgY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVldGltZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBjb25zdCBpbmRleCA9IERhdGUubm93KCk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RcIikudmFsdWU7XG4gIGNvbnN0IHRvZG9MaXN0ID0gY3JlYXRlVG9kb0xpc3QoKTtcbiAgdG9kb0xpc3QuYWRkVG9kbyhcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGR1ZVRpbWUsXG4gICAgcHJpb3JpdHksXG4gICAgaW5kZXgsXG4gICAgcHJvamVjdFxuICApO1xuXG4gIGlmICh0aXRsZSA9PT0gXCJcIiAmJiBkdWVEYXRlLnZhbHVlT2YoKS5pc05hTikge1xuICAgIC8vIHJlcXVpcmUgdGhpcyBzbyB0aGF0IGJsYW5rIHRvZG9zIGFyZSBub3QgYXR0YWNoZWQgb24gc3Vic2VxdWVudCBzdWJtaXRzXG4gICAgLy8gZG8gbm90aGluZ1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nVGFza3MpO1xuICAgIGNvbnN0IGZpbHRlcmluZyA9IGV4aXN0aW5nVGFza3MuZmlsdGVyKChlbCkgPT4gZWwudGl0bGUgIT09IFwiXCIpOyAvLyBmaXJzdCBpZiBzdGF0ZW1lbnQgZG9lc250IHdvcmsgaWYgcGlja2luZyBmcm9tIGFycmF5Li4gbmVlZCB0byBmaWx0ZXIgb3V0IGFsbCBlbGVtZW50cyB3aXRoIGFuIGVtcHR5IHRpdGxlIGJlY2F1c2UgcmVtZW1iZXIgdGhlIGRhdGUgd291bGQgc3RpbGwgc2hvdyB1cCBhcyBpbnZhbGlkLCBicmluZ2luZyBpc3N1ZXNcblxuICAgIGFyciA9IGZpbHRlcmluZy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG5cbiAgICByZW5kZXJUb2RvTGlzdChhcnIpO1xuICB9XG59XG5cbmV4cG9ydCB7IGFyciB9O1xuIiwiaW1wb3J0IHByb2plY3RDcmVhdGlvblBvcHVwIGZyb20gXCIuL3Byb2plY3Rwb3B1cFwiO1xuaW1wb3J0IGZvcm1BY3Rpb25zIGZyb20gXCIuL2Zvcm1BY3Rpb25zXCI7XG5pbXBvcnQgZW5hYmxlU3VibWl0IGZyb20gXCIuL2Zvcm12YWxpZGF0aW9uXCI7XG5pbXBvcnQgY2FuY2VsRm9ybSwgeyBjbG9zZURpc3BsYXksIGVkaXRDYW5jZWxGb3JtIH0gZnJvbSBcIi4vZm9ybWNhbmNlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2lkZVBhbmVsXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgY29uc3QgbWFpblBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFuZWxcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcblxuICBjb25zdCBpbmJveFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmJveFBhZ2UuY2xhc3NMaXN0LmFkZChcImluYm94UGFnZVwiKTtcbiAgbWFpblBhbmVsLmFwcGVuZENoaWxkKGluYm94UGFnZSk7XG5cbiAgY29uc3QgdG9kYXlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kYXlQYWdlLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVBhZ2VcIik7XG4gIG1haW5QYW5lbC5hcHBlbmRDaGlsZCh0b2RheVBhZ2UpO1xuXG4gIGNvbnN0IHVwY29taW5nUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwY29taW5nUGFnZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmdQYWdlXCIpO1xuICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQodXBjb21pbmdQYWdlKTtcblxuICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxpc3RUb2Rvcy5jbGFzc0xpc3QuYWRkKFwibGlzdFRvZG9zXCIpO1xuICBpbmJveFBhZ2UuYXBwZW5kQ2hpbGQobGlzdFRvZG9zKTtcblxuICBjb25zdCB0b2RheVRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b2RheVRvZG9zLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVRvZG9zXCIpO1xuICB0b2RheVBhZ2UuYXBwZW5kQ2hpbGQodG9kYXlUb2Rvcyk7XG5cbiAgY29uc3QgdXBjb21pbmdUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdXBjb21pbmdUb2Rvcy5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmdUb2Rvc1wiKTtcbiAgdXBjb21pbmdQYWdlLmFwcGVuZENoaWxkKHVwY29taW5nVG9kb3MpO1xuXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwXCIpO1xuICBwb3B1cC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cEZvcm1cIik7XG4gIHBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicG9wdXBGb3JtXCIpO1xuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xuXG4gIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3B1cFRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjUwXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGVcIik7XG4gIHBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIlRpdGxlXCIpO1xuICBwb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQocG9wdXBUaXRsZSk7XG5cbiAgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgcG9wdXBEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcHVwRGVzY3JpcHRpb25cIik7XG4gIHBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTQwXCIpO1xuICBwb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChwb3B1cERlc2NyaXB0aW9uKTtcblxuICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc1wiKTtcbiAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcblxuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVkYXRlXCIpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZWRhdGVcIik7XG4gIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVN1Ym1pdCk7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZWRhdGVcIik7XG4gIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUb2RheVwiKTtcbiAgZGF0ZVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuXG4gIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdGltZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZXRpbWVcIik7XG4gIHRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuXG4gIGNvbnN0IHRpbWVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRpbWVcIik7XG4gIHRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWV0aW1lXCIpO1xuICB0aW1lUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWV0aW1lXCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwibm93XCIpO1xuICB0aW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZCh0aW1lUGlja2VyKTtcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eSBMZXZlbFwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICBjb25zdCBwcmlvcml0eVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcImNoYW5nZVwiLCBlbmFibGVTdWJtaXQpO1xuICBwcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIHByaW9yaXR5UGlja2VyLnJlcXVpcmVkID0gdHJ1ZTtcbiAgLy8gcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwib25jaGFuZ2VcIiwgXCJ1cGRhdGVQcmlvcml0eSh0aGlzLnZhbHVlKVwiKTtcbiAgLy8gcHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcIih0aGlzLnR5cGU9J3NlbGVjdCcpXCIpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChwcmlvcml0eVBpY2tlcik7XG5cbiAgY29uc3Qgb3B0aW9uUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcbiAgb3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIG9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICBvcHRpb25QbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0XCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvblBsYWNlaG9sZGVyKTtcblxuICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xuICBvcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBvcHRpb24xLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgb3B0aW9uMS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgcHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG5cbiAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbjIuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgb3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1lZGl1bVwiKTtcbiAgb3B0aW9uMi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG9wdGlvbjIuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICBwcmlvcml0eVBpY2tlci5hcHBlbmRDaGlsZChvcHRpb24yKTtcblxuICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMy5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgb3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIik7XG4gIG9wdGlvbjMudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgb3B0aW9uMy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gIHByaW9yaXR5UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjMpO1xuXG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RcIik7XG4gIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHByb2plY3RQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0UGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFwiKTtcbiAgcHJvamVjdFBpY2tlci5zZXRBdHRyaWJ1dGUoXCJjaGFuZ2VcIiwgZW5hYmxlU3VibWl0KTtcbiAgcHJvamVjdFBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFwiKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQocHJvamVjdFBpY2tlcik7XG5cbiAgY29uc3QgcHJvamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcHJvamVjdFBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICBwcm9qZWN0UGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIHByb2plY3RQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgcHJvamVjdFBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCJTZWxlY3RcIjtcbiAgcHJvamVjdFBpY2tlci5hcHBlbmRDaGlsZChwcm9qZWN0UGxhY2Vob2xkZXIpO1xuXG4gIGNvbnN0IG9wdGlvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb240LmNsYXNzTGlzdC5hZGQoXCJwZXJzb25hbFwiKTtcbiAgb3B0aW9uNC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInBlcnNvbmFsXCIpO1xuICBvcHRpb240LnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICBwcm9qZWN0UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjQpO1xuXG4gIGNvbnN0IG9wdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb241LmNsYXNzTGlzdC5hZGQoXCJ3b3JrXCIpO1xuICBvcHRpb241LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwid29ya1wiKTtcbiAgb3B0aW9uNS50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuICBwcm9qZWN0UGlja2VyLmFwcGVuZENoaWxkKG9wdGlvbjUpO1xuXG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG4gIC8vIER5bmFtaWNhbGx5IGxvYWQgb3B0aW9ucyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgZXhpc3RpbmdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdC5pZCk7XG5cbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBjb25zb2xlLmxvZyhvcHRpb24udGV4dENvbnRlbnQpO1xuICAgIHByb2plY3RQaWNrZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uQm94LmNsYXNzTGlzdC5hZGQoXCJidXR0b25Cb3hcIik7XG4gIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChidXR0b25Cb3gpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1BY3Rpb25zKCk7XG4gIH0pO1xuICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEZvcm0pO1xuICBidXR0b25Cb3guYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICBjb25zdCBlZGl0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlZGl0UG9wdXAuY2xhc3NMaXN0LmFkZChcImVkaXRQb3B1cFwiKTtcbiAgZWRpdFBvcHVwLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBlZGl0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFBvcHVwKTtcblxuICBjb25zdCBlZGl0UG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGVkaXRQb3B1cEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0UG9wdXBGb3JtXCIpO1xuICBlZGl0UG9wdXBGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlZGl0UG9wdXBGb3JtXCIpO1xuICBlZGl0UG9wdXAuYXBwZW5kQ2hpbGQoZWRpdFBvcHVwRm9ybSk7XG5cbiAgY29uc3QgZWRpdFBvcHVwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGVkaXRQb3B1cFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFBvcHVwVGl0bGVcIik7XG4gIGVkaXRQb3B1cFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbmFibGVTdWJtaXQpO1xuICBlZGl0UG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI1MFwiKTtcbiAgZWRpdFBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUaXRsZVwiKTtcbiAgZWRpdFBvcHVwVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVkaXRQb3B1cFRpdGxlXCIpO1xuICBlZGl0UG9wdXBUaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgZWRpdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChlZGl0UG9wdXBUaXRsZSk7XG5cbiAgY29uc3QgZWRpdFBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGVkaXRQb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdFBvcHVwRGVzY3JpcHRpb25cIik7XG4gIGVkaXRQb3B1cERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE0MFwiKTtcbiAgZWRpdFBvcHVwRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgZWRpdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChlZGl0UG9wdXBEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZWRpdENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWRpdENvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJlZGl0Q29udHJvbHNcIik7XG4gIGVkaXRQb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZWRpdENvbnRyb2xzKTtcblxuICBjb25zdCBlZGl0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBlZGl0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRkdWVkYXRlXCIpO1xuICBlZGl0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICBlZGl0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdERhdGVMYWJlbCk7XG5cbiAgY29uc3QgZWRpdERhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVkaXREYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBlZGl0RGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRkdWVkYXRlXCIpO1xuICBlZGl0RGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgZWRpdERhdGVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVkaXRkdWVkYXRlXCIpO1xuICBlZGl0RGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRvZGF5XCIpO1xuICBlZGl0RGF0ZVBpY2tlci5yZXF1aXJlZCA9IHRydWU7XG4gIGVkaXRDb250cm9scy5hcHBlbmRDaGlsZChlZGl0RGF0ZVBpY2tlcik7XG5cbiAgY29uc3QgZWRpdFRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZWRpdFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0ZHVldGltZVwiKTtcbiAgZWRpdFRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuICBlZGl0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdFRpbWVMYWJlbCk7XG5cbiAgY29uc3QgZWRpdFRpbWVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVkaXRUaW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0aW1lXCIpO1xuICBlZGl0VGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRkdWV0aW1lXCIpO1xuICBlZGl0VGltZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZW5hYmxlU3VibWl0KTtcbiAgZWRpdFRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVkaXRkdWV0aW1lXCIpO1xuICBlZGl0VGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIm5vd1wiKTtcbiAgZWRpdFRpbWVQaWNrZXIuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGVkaXRDb250cm9scy5hcHBlbmRDaGlsZChlZGl0VGltZVBpY2tlcik7XG5cbiAgY29uc3QgZWRpdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGVkaXRQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRwcmlvcml0eVwiKTtcbiAgZWRpdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5IExldmVsXCI7XG4gIGVkaXRDb250cm9scy5hcHBlbmRDaGlsZChlZGl0UHJpb3JpdHlMYWJlbCk7XG5cbiAgY29uc3QgZWRpdFByaW9yaXR5UGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgZWRpdFByaW9yaXR5UGlja2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdHByaW9yaXR5XCIpO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIuc2V0QXR0cmlidXRlKFwiY2hhbmdlXCIsIGVuYWJsZVN1Ym1pdCk7XG4gIGVkaXRQcmlvcml0eVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWRpdHByaW9yaXR5XCIpO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIucmVxdWlyZWQgPSB0cnVlO1xuICBlZGl0Q29udHJvbHMuYXBwZW5kQ2hpbGQoZWRpdFByaW9yaXR5UGlja2VyKTtcblxuICBjb25zdCBlZGl0T3B0aW9uUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBlZGl0T3B0aW9uUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIGVkaXRPcHRpb25QbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgZWRpdE9wdGlvblBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICBlZGl0T3B0aW9uUGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlNlbGVjdFwiO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvblBsYWNlaG9sZGVyKTtcblxuICBjb25zdCBlZGl0T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGVkaXRPcHRpb24xLmNsYXNzTGlzdC5hZGQoXCJsb3dcIik7XG4gIGVkaXRPcHRpb24xLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICBlZGl0T3B0aW9uMS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGVkaXRPcHRpb24xLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvbjEpO1xuXG4gIGNvbnN0IGVkaXRPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZWRpdE9wdGlvbjIuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgZWRpdE9wdGlvbjIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZWRpdW1cIik7XG4gIGVkaXRPcHRpb24yLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgZWRpdE9wdGlvbjIuc3R5bGUuY29sb3IgPSBcIm9yYW5nZVwiO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvbjIpO1xuXG4gIGNvbnN0IGVkaXRPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZWRpdE9wdGlvbjMuY2xhc3NMaXN0LmFkZChcImhpZ2hcIik7XG4gIGVkaXRPcHRpb24zLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbiAgZWRpdE9wdGlvbjMudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgZWRpdE9wdGlvbjMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBlZGl0UHJpb3JpdHlQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvbjMpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGVkaXRQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdHByb2plY3RcIik7XG4gIGVkaXRQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgZWRpdENvbnRyb2xzLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0UGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgZWRpdFByb2plY3RQaWNrZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0cHJvamVjdFwiKTtcbiAgZWRpdFByb2plY3RQaWNrZXIuc2V0QXR0cmlidXRlKFwiY2hhbmdlXCIsIGVuYWJsZVN1Ym1pdCk7XG4gIGVkaXRQcm9qZWN0UGlja2VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlZGl0cHJvamVjdFwiKTtcbiAgZWRpdENvbnRyb2xzLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0UGlja2VyKTtcblxuICBjb25zdCBlZGl0UHJvamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZWRpdFByb2plY3RQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcbiAgZWRpdFByb2plY3RQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgZWRpdFByb2plY3RQbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgZWRpdFByb2plY3RQbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiU2VsZWN0XCI7XG4gIGVkaXRQcm9qZWN0UGlja2VyLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0UGxhY2Vob2xkZXIpO1xuXG4gIGNvbnN0IGVkaXRPcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZWRpdE9wdGlvbjQuY2xhc3NMaXN0LmFkZChcInBlcnNvbmFsXCIpO1xuICBlZGl0T3B0aW9uNC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInBlcnNvbmFsXCIpO1xuICBlZGl0T3B0aW9uNC50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIjtcbiAgZWRpdFByb2plY3RQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvbjQpO1xuXG4gIGNvbnN0IGVkaXRPcHRpb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZWRpdE9wdGlvbjUuY2xhc3NMaXN0LmFkZChcIndvcmtcIik7XG4gIGVkaXRPcHRpb241LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwid29ya1wiKTtcbiAgZWRpdE9wdGlvbjUudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcbiAgZWRpdFByb2plY3RQaWNrZXIuYXBwZW5kQ2hpbGQoZWRpdE9wdGlvbjUpO1xuXG4gIC8vIER5bmFtaWNhbGx5IGxvYWQgb3B0aW9ucyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgZXhpc3RpbmdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZWRpdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZWRpdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0LmlkKTtcblxuICAgIGVkaXRPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICBjb25zb2xlLmxvZyhlZGl0T3B0aW9uLnRleHRDb250ZW50KTtcbiAgICBlZGl0UHJvamVjdFBpY2tlci5hcHBlbmRDaGlsZChlZGl0T3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVkaXRCdXR0b25Cb3guY2xhc3NMaXN0LmFkZChcImVkaXRCdXR0b25Cb3hcIik7XG4gIGVkaXRQb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbkJveCk7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRzdWJtaXRcIik7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBlZGl0QnV0dG9uQm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gIGNvbnN0IGVkaXRDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0Q2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGVkaXRDYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0Y2FuY2VsXCIpO1xuICBlZGl0Q2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgZWRpdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdENhbmNlbEZvcm0pO1xuICBlZGl0QnV0dG9uQm94LmFwcGVuZENoaWxkKGVkaXRDYW5jZWxCdXR0b24pO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRvZG9EaXNwbGF5XCIpO1xuICB0b2RvRGlzcGxheS5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgdG9kb0Rpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXkpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZG9EaXNwbGF5Q2FyZC5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpc3BsYXlDYXJkXCIpO1xuICB0b2RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheUNhcmQpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRvZG9EaXNwbGF5VGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG9EaXNwbGF5VGl0bGVcIik7XG4gIHRvZG9EaXNwbGF5Q2FyZC5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheVRpdGxlKTtcblxuICBjb25zdCB0b2RvRGlzcGxheVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIHRvZG9EaXNwbGF5UGFyYS5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpc3BsYXlQYXJhXCIpO1xuICB0b2RvRGlzcGxheUNhcmQuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlQYXJhKTtcblxuICBjb25zdCB0b2RvRGlzcGxheUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9kb0Rpc3BsYXlDb250cm9scy5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpc3BsYXlDb250cm9sc1wiKTtcbiAgdG9kb0Rpc3BsYXlDYXJkLmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5Q29udHJvbHMpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICB0b2RvRGlzcGxheURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpc3BsYXlEYXRlTGFiZWxcIik7XG4gIHRvZG9EaXNwbGF5RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgdG9kb0Rpc3BsYXlDb250cm9scy5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheURhdGVMYWJlbCk7XG5cbiAgY29uc3QgdG9kb0Rpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9EaXNwbGF5RGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kb0Rpc3BsYXlEYXRlXCIpO1xuICB0b2RvRGlzcGxheUNvbnRyb2xzLmFwcGVuZENoaWxkKHRvZG9EaXNwbGF5RGF0ZSk7XG5cbiAgY29uc3QgdG9kb0Rpc3BsYXlUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIHRvZG9EaXNwbGF5VGltZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGlzcGxheVRpbWVMYWJlbFwiKTtcbiAgdG9kb0Rpc3BsYXlUaW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWU6XCI7XG4gIHRvZG9EaXNwbGF5Q29udHJvbHMuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlUaW1lTGFiZWwpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvRGlzcGxheVRpbWUuY2xhc3NMaXN0LmFkZChcInRvZG9EaXNwbGF5VGltZVwiKTtcbiAgdG9kb0Rpc3BsYXlDb250cm9scy5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheVRpbWUpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgdG9kb0Rpc3BsYXlQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGlzcGxheVByaW9yaXR5TGFiZWxcIik7XG4gIHRvZG9EaXNwbGF5UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgTGV2ZWw6XCI7XG4gIHRvZG9EaXNwbGF5Q29udHJvbHMuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlQcmlvcml0eUxhYmVsKTtcblxuICBjb25zdCB0b2RvRGlzcGxheVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRvZG9EaXNwbGF5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG9EaXNwbGF5UHJpb3JpdHlcIik7XG4gIHRvZG9EaXNwbGF5Q29udHJvbHMuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlQcmlvcml0eSk7XG5cbiAgY29uc3QgdG9kb0Rpc3BsYXlQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIHRvZG9EaXNwbGF5UHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvRGlzcGxheVByb2plY3RMYWJlbFwiKTtcbiAgdG9kb0Rpc3BsYXlQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgQ2F0ZWdvcnk6XCI7XG4gIHRvZG9EaXNwbGF5Q29udHJvbHMuYXBwZW5kQ2hpbGQodG9kb0Rpc3BsYXlQcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHRvZG9EaXNwbGF5UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0b2RvRGlzcGxheVByb2plY3QuY2xhc3NMaXN0LmFkZChcInRvZG9EaXNwbGF5UHJvamVjdFwiKTtcbiAgdG9kb0Rpc3BsYXlDb250cm9scy5hcHBlbmRDaGlsZCh0b2RvRGlzcGxheVByb2plY3QpO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlQnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRGlzcGxheSk7XG4gIHRvZG9EaXNwbGF5Q2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcHJvamVjdENyZWF0aW9uUG9wdXAoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICBwcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhpZGVEZXRhaWxzKGV2ZW50KSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRGlzcGxheVwiKTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuXG4gIGNvbnN0IGlkZW50aXR5ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXG4gIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICBsZXQgbWF0Y2hpbmdUYXNrID0gbnVsbDtcblxuICBleGlzdGluZ1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgaWYgKHRhc2suaW5kZXggPT0gaWRlbnRpdHkpIHtcbiAgICAgIG1hdGNoaW5nVGFzayA9IHRhc2s7XG4gICAgfVxuICAgIGlmIChtYXRjaGluZ1Rhc2spIHtcbiAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9EaXNwbGF5VGl0bGVcIik7XG4gICAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50ID0gbWF0Y2hpbmdUYXNrLnRpdGxlO1xuICAgICAgY29uc3QgcG9wdXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQYXJhXCIpO1xuICAgICAgcG9wdXBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1hdGNoaW5nVGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIGNvbnNvbGUubG9nKHBvcHVwRGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgY29uc3QgcG9wdXBQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQcmlvcml0eVwiKTtcbiAgICAgIHBvcHVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBtYXRjaGluZ1Rhc2sucHJpb3JpdHk7XG4gICAgICBjb25zb2xlLmxvZyhwb3B1cFByaW9yaXR5LnZhbHVlKTtcbiAgICAgIGNvbnN0IHBvcHVwUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQcm9qZWN0XCIpO1xuICAgICAgcG9wdXBQcm9qZWN0LnRleHRDb250ZW50ID0gbWF0Y2hpbmdUYXNrLnByb2plY3Q7XG4gICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlEYXRlXCIpO1xuICAgICAgcHJvamVjdER1ZURhdGUudGV4dENvbnRlbnQgPSBtYXRjaGluZ1Rhc2suZHVlRGF0ZTtcbiAgICAgIGNvbnN0IHByb2plY3REdWVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRGlzcGxheVRpbWVcIik7XG4gICAgICBwcm9qZWN0RHVlVGltZS50ZXh0Q29udGVudCA9IG1hdGNoaW5nVGFzay5kdWVUaW1lO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SGlkZUVkaXRQb3B1cCgpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQb3B1cFwiKTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhpZGVQb3B1cCgpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDIwcHgpXCI7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHVlVG9kYXkoKSB7XG4gIGNvbnN0IHVwY29taW5nVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nVG9kb3NcIik7XG4gIGNvbnN0IGxpc3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFRvZG9zXCIpO1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBmb3JtYXQodG9kYXksIFwieXl5eS1NTS1kZFwiKTtcblxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0xpc3REdWVEYXRlXCIpO1xuXG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImR1ZVRvZGF5XCIpKSB7XG4gICAgICAvLyBkbyBub3RoaW5nLiBFbnN1cmVzIG5vIGR1cGxpY2F0ZXNcbiAgICB9XG4gICAgaWYgKHRvZG8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkdWVVcGNvbWluZ1wiKSkge1xuICAgICAgdXBjb21pbmdUb2Rvcy5yZW1vdmVDaGlsZCh0b2RvLnBhcmVudE5vZGUpO1xuICAgICAgbGlzdFRvZG9zLmFwcGVuZENoaWxkKHRvZG8ucGFyZW50Tm9kZSk7XG4gICAgICB0b2RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImR1ZVVwY29taW5nXCIpO1xuICAgIH1cbiAgICAvKiBmdW5jdGlvbiBkZWxldGVpbnRlcmlvcigpIHtcbiAgICAgIHVwY29taW5nVG9kb3MuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgZGVsZXRlaW50ZXJpb3IoKTsgKi9cblxuICAgIGlmICh0b2RvLnRleHRDb250ZW50ID09PSBkYXRlRm9ybWF0dGVkKSB7XG4gICAgICBjb25zdCB5ZXNtb2JpbGVNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2JpbGVcIik7XG4gICAgICBpZiAoeWVzbW9iaWxlTW9kZSA9PT0gXCJlbmFibGVkXCIpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblBhbmVsXCIpO1xuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9iaWxlXCIsIG51bGwpO1xuICAgICAgfVxuICAgICAgdG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJkdWVUb2RheVwiKTtcbiAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFBhZ2VcIik7XG4gICAgICBpbmJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmdQYWdlXCIpO1xuICAgICAgdXBjb21pbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29uc3QgdG9kYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVBhZ2VcIik7XG4gICAgICB0b2RheVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGNvbnN0IHRvZGF5VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5VG9kb3NcIik7XG4gICAgICBsaXN0VG9kb3MucmVtb3ZlQ2hpbGQodG9kby5wYXJlbnROb2RlKTtcbiAgICAgIHRvZGF5VG9kb3MuYXBwZW5kQ2hpbGQodG9kby5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGJ1dHRvbkZ1bmN0aW9ucyBmcm9tIFwiLi9idXR0b25mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybUFjdGlvbnMoKSB7XG4gIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXBGb3JtXCIpOyAvLyBjYWxsIGV2ZW50bGlzdGVuZXIgdG8gZm9ybSBzbyB0aGF0IHByZXZlbnRkZWZhdWx0IHdvcmtzXG4gIHBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsIC8vIGNsaWNrIG1ldGhvZCBvbmx5IHZhbGlkYXRlZCBmaXJzdCBpdGVtIGluIGZvcm0sIG5vdCBhbGwgaXRlbXNcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBidXR0b25GdW5jdGlvbnMoKTtcbiAgICAgIGNvbnN0IHllc21vYmlsZU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vYmlsZVwiKTtcbiAgICAgIGlmICh5ZXNtb2JpbGVNb2RlID09PSBcImVuYWJsZWRcIikge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZVBhbmVsXCIpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb2JpbGVcIiwgbnVsbCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3B1cFRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWV0aW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICAgICAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5jZWxGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBEZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVldGltZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwibm9uZVwiO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0Q2FuY2VsRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRQb3B1cFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UG9wdXBUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFBvcHVwRGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRkdWVkYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0ZHVldGltZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHByaW9yaXR5XCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEaXNwbGF5KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlUaXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQYXJhXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvRGlzcGxheURhdGVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9EaXNwbGF5VGltZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0Rpc3BsYXlQcm9qZWN0XCIpLnZhbHVlID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdCgpIHtcbiAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEZvcm1cIik7XG4gIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICBsZXQgYWxsRmlsbGVkID0gdHJ1ZTtcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gIGlmIChhbGxGaWxsZWQpIHtcbiAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9XG4gIHJlcXVpcmVkRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKCFmaWVsZC52YWx1ZSkge1xuICAgICAgYWxsRmlsbGVkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJZb3UgZW50ZXJlZDpcIiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFRpdGxlXCIpLnZhbHVlKTtcbn0pOyAqL1xuIiwiLy8gaW1wb3J0IHsgYXJyIH0gZnJvbSBcIi4vYnV0dG9uZnVuY3Rpb25zXCI7XG5pbXBvcnQgcmVuZGVyVG9kb0xpc3QgZnJvbSBcIi4vcmVuZGVydG9kb2xpc3RcIjtcbi8vIGltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3hQYWdlKCkge1xuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb0xpc3REdWVEYXRlXCIpO1xuICBjb25zdCB0b2RheVRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVRvZG9zXCIpO1xuICBjb25zdCB1cGNvbWluZ1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZ1RvZG9zXCIpO1xuXG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImR1ZVRvZGF5XCIpKSB7XG4gICAgICB0b2RheVRvZG9zLnJlbW92ZUNoaWxkKHRvZG8ucGFyZW50Tm9kZSk7XG5cbiAgICAgIHRvZG8ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHVlVG9kYXlcIik7XG4gICAgfSBlbHNlIGlmICh0b2RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHVlVXBjb21pbmdcIikpIHtcbiAgICAgIHVwY29taW5nVG9kb3MucmVtb3ZlQ2hpbGQodG9kby5wYXJlbnROb2RlKTtcblxuICAgICAgdG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkdWVVcGNvbWluZ1wiKTtcbiAgICB9XG4gIH0pO1xuICB0b2RheVRvZG9zLmlubmVySFRNTCA9IFwiXCI7XG4gIHVwY29taW5nVG9kb3MuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgcmVmZXJlbmNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKTtcbiAgLy8gaWYgcmVmZXJlbmNlIGV4aXN0c1xuICBpZiAocmVmZXJlbmNlKSB7XG4gICAgLy8gY29udmVydHMgYmFjayB0byBhcnJheSBhbmQgc3RvcmUgaXQgaW4gdG9kb3MgYXJyYXlcbiAgICBjb25zdCB0b2RvbGlzdCA9IEpTT04ucGFyc2UocmVmZXJlbmNlKTtcblxuICAgIHRvZG9saXN0LmZvckVhY2goKHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHQuZHVlRGF0ZSk7XG5cbiAgICAgIC8vIHQuZHVlRGF0ZSA9IHBhcnNlSVNPKHQuZHVlRGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZpbHRlcmluZyA9IHRvZG9saXN0LmZpbHRlcigoZWwpID0+IGVsLnRpdGxlICE9PSBcIlwiKTsgLy8gZmlyc3QgaWYgc3RhdGVtZW50IGRvZXNudCB3b3JrIGlmIHBpY2tpbmcgZnJvbSBhcnJheS4uIG5lZWQgdG8gZmlsdGVyIG91dCBhbGwgZWxlbWVudHMgd2l0aCBhbiBlbXB0eSB0aXRsZSBiZWNhdXNlIHJlbWVtYmVyIHRoZSBkYXRlIHdvdWxkIHN0aWxsIHNob3cgdXAgYXMgaW52YWxpZCwgYnJpbmdpbmcgaXNzdWVzXG5cbiAgICBjb25zdCBhcnIgPSBmaWx0ZXJpbmcuc29ydChcbiAgICAgIChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICAgICk7XG5cbiAgICByZW5kZXJUb2RvTGlzdChhcnIpO1xuICB9XG4gIGNvbnN0IHllc21vYmlsZU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vYmlsZVwiKTtcbiAgaWYgKHllc21vYmlsZU1vZGUgPT09IFwiZW5hYmxlZFwiKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vYmlsZVwiLCBudWxsKTtcbiAgfVxuICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hQYWdlXCIpO1xuICBpbmJveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmdQYWdlXCIpO1xuICB1cGNvbWluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IHRvZGF5UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlQYWdlXCIpO1xuICB0b2RheVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuIiwiaW1wb3J0IHJlbmRlclRvZG9MaXN0IGZyb20gXCIuL3JlbmRlcnRvZG9saXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRwYWdlKCkge1xuICBjb25zdCB0b2RvbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XG4gIGNvbnN0IGZpbHRlcmluZyA9IHRvZG9saXN0LmZpbHRlcigoZWwpID0+IGVsLnByb2plY3QgPT09IHRoaXMuaWQpO1xuXG4gIGNvbnN0IGFyciA9IGZpbHRlcmluZy5zb3J0KFxuICAgIChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICApO1xuXG4gIGNvbnN0IHllc21vYmlsZU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vYmlsZVwiKTtcbiAgaWYgKHllc21vYmlsZU1vZGUgPT09IFwiZW5hYmxlZFwiKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vYmlsZVwiLCBudWxsKTtcbiAgfVxuXG4gIHJlbmRlclRvZG9MaXN0KGFycik7XG59XG4iLCIvLyBSZXRyaWV2ZSBleGlzdGluZyB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbi8vIEFkZCBhIG5ldyB0YXNrXG5mdW5jdGlvbiBhZGRUYXNrKHRvZG8pIHtcbiAgZXhpc3RpbmdUYXNrcy5wdXNoKHRvZG8pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nVGFza3MpKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gIGV4aXN0aW5nUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSk7XG59XG5cbmV4cG9ydCB7IGFkZFRhc2ssIGV4aXN0aW5nVGFza3MsIGFkZFByb2plY3QsIGV4aXN0aW5nUHJvamVjdHMgfTtcbiIsImltcG9ydCBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zIGZyb20gXCIuL3Byb2plY3RidXR0b25mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEZvcm1BY3Rpb25zKCkge1xuICBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zKCk7XG4gIGNvbnN0IHllc21vYmlsZU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vYmlsZVwiKTtcbiAgaWYgKHllc21vYmlsZU1vZGUgPT09IFwiZW5hYmxlZFwiKSB7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vYmlsZVwiLCBudWxsKTtcbiAgfVxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RQb3B1cFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG4iLCJpbXBvcnQgcmVuZGVyUHJvamVjdCBmcm9tIFwiLi9yZW5kZXJwcm9qZWN0XCI7XG5pbXBvcnQgZW5hYmxlUHJvamVjdFN1Ym1pdCBmcm9tIFwiLi9wcm9qZWN0dmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZXhpc3RpbmdQcm9qZWN0cywgYWRkUHJvamVjdCB9IGZyb20gXCIuL2xvY2Fsc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0QnV0dG9uRnVuY3Rpb25zKCkge1xuICBlbmFibGVQcm9qZWN0U3VibWl0KCk7XG5cbiAgZnVuY3Rpb24gcHJvamVjdEl0ZW1zKHByb2plY3RUaXRsZSwgaWQpIHtcbiAgICByZXR1cm4geyBwcm9qZWN0VGl0bGUsIGlkIH07XG4gIH1cbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3RUaXRsZSwgaWQpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0SXRlbXMocHJvamVjdFRpdGxlLCBpZCk7XG5cbiAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgYWRkTmV3UHJvamVjdCwgcHJvamVjdHMgfTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpLnZhbHVlO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xuICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gIGNvbnNvbGUubG9nKGlkKTtcbiAgLy8gbmVlZCBjb2RlIGJlbG93IHNvIHRoYXQgdGhlIHByb2plY3QgaXMgaW5zdGFudGVuZW91c2x5IGF2YWlsYWJsZSBpbiBkcm9wZG93biBvZiBwb3B1cCBmb3IgdG9kbyBjcmVhdGlvblxuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaWQpO1xuXG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgY29uc29sZS5sb2cob3B0aW9uLnRleHRDb250ZW50KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIC8vIHRpbGwgaGVyZVxuICBjb25zdCBmaW5hbFByb2plY3RMaXN0ID0gcHJvamVjdExpc3QoKTtcbiAgZmluYWxQcm9qZWN0TGlzdC5hZGROZXdQcm9qZWN0KHByb2plY3RUaXRsZSwgaWQpO1xuXG4gIGlmIChwcm9qZWN0VGl0bGUgPT09IFwiXCIpIHtcbiAgICAvLyByZXF1aXJlIHRoaXMgc28gdGhhdCBibGFuayB0b2RvcyBhcmUgbm90IGF0dGFjaGVkIG9uIHN1YnNlcXVlbnQgc3VibWl0c1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJQcm9qZWN0KGV4aXN0aW5nUHJvamVjdHMpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q2FuY2VsRm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RQb3B1cFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbiIsImltcG9ydCBwcm9qZWN0Rm9ybUFjdGlvbnMgZnJvbSBcIi4vcHJvamVjdEZvcm1BY3Rpb25zXCI7XG5pbXBvcnQgZW5hYmxlUHJvamVjdFN1Ym1pdCBmcm9tIFwiLi9wcm9qZWN0dmFsaWRhdGlvblwiO1xuaW1wb3J0IHByb2plY3RDYW5jZWxGb3JtIGZyb20gXCIuL3Byb2plY3Rmb3JtY2FuY2VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGlvblBvcHVwKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LmFkZChcInByb2plY3RQb3B1cFwiKTtcbiAgcHJvamVjdFBvcHVwLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICBwcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBvcHVwKTtcblxuICBjb25zdCBwcm9qZWN0UG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHByb2plY3RQb3B1cEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0UG9wdXBGb3JtIFwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdFBvcHVwRm9ybSBcIik7XG4gIHByb2plY3RQb3B1cC5hcHBlbmRDaGlsZChwcm9qZWN0UG9wdXBGb3JtKTtcblxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVuYWJsZVByb2plY3RTdWJtaXQpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdE5hbWVcIik7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiR3ltXCIpO1xuICBwcm9qZWN0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3RQb3B1cEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGJ1dHRvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbkJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbkJveFwiKTtcbiAgcHJvamVjdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChidXR0b25Cb3gpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpOyAvLyBubyBmb3JtIHZhbGlkYXRpb24gbmVlZGVkIHRocm91Z2ggcmVxdWlyZWQgdGFnLiBVc2VkIGFuIGlmL2Vsc2Ugc3RhdGVtZW50IHRvIGNoZWNrIGZvciBibGFuayBpbnB1dFxuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0U3VibWl0XCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGb3JtQWN0aW9ucyk7XG4gIGJ1dHRvbkJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0Q2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RDYW5jZWxGb3JtKTtcbiAgYnV0dG9uQm94LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG59XG5cbi8qIGZ1bmN0aW9uIGNhbGwoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFBvcHVwXCIpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID09PSBcImdyaWRcIiAmJlxuICAgICAgZS50YXJnZXQuY2xhc3MgIT09IFwicHJvamVjdFBvcHVwXCJcbiAgICApIHtcbiAgICAgIHByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuY2FsbCgpOyAqL1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZVByb2plY3RTdWJtaXQoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcbiAgbGV0IGFsbEZpbGxlZCA9IHRydWU7XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFN1Ym1pdFwiKTtcbiAgaWYgKGFsbEZpbGxlZCkge1xuICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gIH1cblxuICBpZiAoIXByb2plY3ROYW1lLnZhbHVlKSB7XG4gICAgYWxsRmlsbGVkID0gZmFsc2U7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vLyBpbXBvcnQgdG9kb0xpc3REZWxldGVCdXR0b24gZnJvbSBcIi4vdG9kb2xpc3RkZWxldGVcIjtcbmltcG9ydCBsb2FkcGFnZSBmcm9tIFwiLi9sb2FkcGFnZXByb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclByb2plY3QoZXhpc3RpbmdQcm9qZWN0cykge1xuICBjb25zdCB2YXJpYWJsZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YXJpYWJsZVByb2plY3RzXCIpO1xuICB2YXJpYWJsZVByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Byb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGV4aXN0aW5nUHJvamVjdHNbaV07XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGl0ZW0uaWQpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkcGFnZSk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gaXRlbS5wcm9qZWN0VGl0bGU7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB2YXJpYWJsZVByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gICAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlbGV0ZVwiKTtcbiAgICBwcm9qZWN0RGVsZXRlLmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXRyYXNoLTJcIj48cG9seWxpbmUgcG9pbnRzPVwiMyA2IDUgNiAyMSA2XCI+PC9wb2x5bGluZT48cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCI+PC9wYXRoPjxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIj48L2xpbmU+PGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiPjwvbGluZT48L3N2Zz4nO1xuICAgIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlkZW50aXR5ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgY29uc29sZS5sb2coaWRlbnRpdHkpO1xuICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG4gICAgICBjb25zdCBuZXdzdG9yZWRQcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzLmZpbHRlcihcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgICAoZWwpID0+IGVsLmlkICE9IGlkZW50aXR5XG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShuZXdzdG9yZWRQcm9qZWN0cykpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLyBvcHRlZCBmb3IgdGhpcyBzbyB0aGF0IHRoZSBkcm9wZG93biBtZW51IGluIHBvcHVwLmpzIGlzIGFsc28gdXBkYXRlZFxuICAgIH0pO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBwYXJzZUlTTyBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VJU09cIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IHRvZG9MaXN0RWRpdEJ1dHRvbiBmcm9tIFwiLi90b2RvbGlzdGVkaXRcIjtcbmltcG9ydCB0b2RvTGlzdENoZWNrZWQgZnJvbSBcIi4vdG9kb2xpc3RjaGVja2VkXCI7XG5pbXBvcnQgZGlzcGxheUhpZGVEZXRhaWxzIGZyb20gXCIuL2Rpc3BsYXloaWRlZGV0YWlsc1wiO1xuLy8gaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2xvY2Fsc3RvcmFnZVwiO1xuXG5jb25zdCBuZXdBcnJheSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJUb2RvTGlzdChhcnIpIHtcbiAgY29uc3QgbGlzdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VG9kb3NcIik7XG4gIGxpc3RUb2Rvcy5pbm5lckhUTUwgPSBcIlwiO1xuICBhcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBhcnIuc29ydCgoYSwgYikgPT4gYS5kdWVEYXRlIC0gYi5kdWVEYXRlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRvZG8gPSBhcnJbaV07XG4gICAgY29uc3QgdG9kb0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRvZG9MaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0b2RvLmluZGV4KTtcbiAgICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0SXRlbVwiKTtcbiAgICBpZiAodG9kby5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICB0b2RvTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgfVxuICAgIGxpc3RUb2Rvcy5hcHBlbmRDaGlsZCh0b2RvTGlzdEl0ZW0pO1xuXG4gICAgY29uc3QgdG9kb0xpc3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gICAgdG9kb0xpc3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kb0xpc3RQcmlvcml0eVwiKTtcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgLy8gc2V0IGRpZmZlcmVudCBzdmcgY29sb3JzIGZvciBhbGwgcHJpb3JpdHkgbGV2ZWxzXG4gICAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDBGRjAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PC9zdmc+JztcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgIHRvZG9MaXN0UHJpb3JpdHkuaW5uZXJIVE1MID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkE1MDBcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48L3N2Zz4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvTGlzdFByaW9yaXR5LmlubmVySFRNTCA9XG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkYwMDAwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PC9zdmc+JztcbiAgICB9XG4gICAgdG9kb0xpc3RQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0xpc3RDaGVja2VkKTtcbiAgICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RQcmlvcml0eSk7XG5cbiAgICBjb25zdCB0b2RvTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdFRpdGxlXCIpO1xuICAgIHRvZG9MaXN0VGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdFRpdGxlKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0b2RvTGlzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9MaXN0QnV0dG9uXCIpO1xuICAgIHRvZG9MaXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgdG9kb0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIaWRlRGV0YWlscyk7XG4gICAgdG9kb0xpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3RCdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb0xpc3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTGlzdER1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RHVlRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlRm9ybWF0dGVkID0gZm9ybWF0KFxuICAgICAgcGFyc2VJU08odG9kby5kdWVEYXRlLCBcInl5eXktTU0tZGRcIiksXG4gICAgICBcInl5eXktTU0tZGRcIlxuICAgICk7XG4gICAgdG9kb0xpc3REdWVEYXRlLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdHRlZDtcbiAgICB0b2RvTGlzdEl0ZW0uYXBwZW5kQ2hpbGQodG9kb0xpc3REdWVEYXRlKTtcblxuICAgIGNvbnN0IHRvZG9MaXN0RHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0xpc3REdWVUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdER1ZVRpbWVcIik7XG4gICAgdG9kb0xpc3REdWVUaW1lLnRleHRDb250ZW50ID0gdG9kby5kdWVUaW1lO1xuICAgIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdER1ZVRpbWUpO1xuXG4gICAgY29uc3QgdG9kb0xpc3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN2Z1wiKTtcbiAgICB0b2RvTGlzdEVkaXQuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0RWRpdFwiKTtcbiAgICB0b2RvTGlzdEVkaXQuaW5uZXJIVE1MID1cbiAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdFwiPjxwYXRoIGQ9XCJNMTEgNEg0YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0ydi03XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6XCI+PC9wYXRoPjwvc3ZnPic7XG4gICAgdG9kb0xpc3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvTGlzdEVkaXRCdXR0b24pO1xuICAgIHRvZG9MaXN0SXRlbS5hcHBlbmRDaGlsZCh0b2RvTGlzdEVkaXQpO1xuXG4gICAgY29uc3QgdG9kb0xpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3ZnXCIpO1xuICAgIHRvZG9MaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvTGlzdERlbGV0ZVwiKTtcbiAgICAvLyB0b2RvTGlzdERlbGV0ZS5kYXRhc2V0LmluZGV4ID0gdG9kby5pbmRleDtcbiAgICB0b2RvTGlzdERlbGV0ZS5pbm5lckhUTUwgPVxuICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiPjwvcG9seWxpbmU+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiPjwvcGF0aD48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCI+PC9saW5lPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIj48L2xpbmU+PC9zdmc+JztcbiAgICB0b2RvTGlzdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaWRlbnRpdHkgPSBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhpZGVudGl0eSk7XG4gICAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIGNvbnN0IG5ld1RvZG9MaXN0ID0gZXhpc3RpbmdUYXNrcy5maWx0ZXIoKGVsKSA9PiBlbC5pbmRleCAhPSBpZGVudGl0eSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9MaXN0KSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgdG9kb0xpc3RJdGVtLmFwcGVuZENoaWxkKHRvZG9MaXN0RGVsZXRlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBuZXdBcnJheSB9O1xuIiwiaW1wb3J0IGRpc3BsYXlIaWRlUG9wdXAgZnJvbSBcIi4vZGlzcGxheWhpZGVwb3B1cFwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IGR1ZVRvZGF5IGZyb20gXCIuL2R1ZXRvZGF5XCI7XG5pbXBvcnQgaW5ib3hQYWdlIGZyb20gXCIuL2luYm94cGFnZVwiO1xuaW1wb3J0IHVwY29taW5nUGFnZSBmcm9tIFwiLi91cGNvbWluZ3BhZ2VcIjtcbmltcG9ydCBsb2FkcGFnZSBmcm9tIFwiLi9sb2FkcGFnZXByb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVQYW5lbEZ1bmN0aW9uKCkge1xuICBjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcblxuICBjb25zdCB0b3BQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvcFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJ0b3BQYW5lbFwiKTtcbiAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKHRvcFBhbmVsKTtcblxuICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5ib3hcIik7XG4gIGluYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmJveFBhZ2UpO1xuICBjb25zdCBpY29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24xLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIj48L3BvbHlsaW5lPjxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCI+PC9wYXRoPjwvc3ZnPic7XG4gIGluYm94LmFwcGVuZENoaWxkKGljb24xKTtcbiAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQxLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICBpbmJveC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gIHRvcFBhbmVsLmFwcGVuZENoaWxkKGluYm94KTtcblxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gIHRvZGF5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkdWVUb2RheSk7XG4gIGNvbnN0IGljb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWNvbjIuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNhbGVuZGFyXCI+PHJlY3QgeD1cIjNcIiB5PVwiNFwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48bGluZSB4MT1cIjE2XCIgeTE9XCIyXCIgeDI9XCIxNlwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjJcIiB4Mj1cIjhcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxMFwiIHgyPVwiMjFcIiB5Mj1cIjEwXCI+PC9saW5lPjwvc3ZnPic7XG4gIHRvZGF5LmFwcGVuZENoaWxkKGljb24yKTtcbiAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQyLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICB0b2RheS5hcHBlbmRDaGlsZCh0ZXh0Mik7XG4gIHRvcFBhbmVsLmFwcGVuZENoaWxkKHRvZGF5KTtcblxuICBjb25zdCB1cGNvbWluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHVwY29taW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidXBjb21pbmdcIik7XG4gIHVwY29taW5nLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIHVwY29taW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGNvbWluZ1BhZ2UpO1xuICBjb25zdCBpY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGljb24zLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1saXN0XCI+PGxpbmUgeDE9XCI4XCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMy4wMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIzLjAxXCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIzLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz4nO1xuICB1cGNvbWluZy5hcHBlbmRDaGlsZChpY29uMyk7XG4gIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0ZXh0My50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdXBjb21pbmcuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICB0b3BQYW5lbC5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkQnV0dG9uXCIpO1xuICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1wbHVzLXNxdWFyZVwiPjxyZWN0IHg9XCIzXCIgeT1cIjNcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiByeD1cIjJcIiByeT1cIjJcIj48L3JlY3Q+PGxpbmUgeDE9XCIxMlwiIHkxPVwiOFwiIHgyPVwiMTJcIiB5Mj1cIjE2XCI+PC9saW5lPjxsaW5lIHgxPVwiOFwiIHkxPVwiMTJcIiB4Mj1cIjE2XCIgeTI9XCIxMlwiPjwvbGluZT48L3N2Zz4nO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlIaWRlUG9wdXApO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICBjb25zdCB0b29sdGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b29sdGlwMS5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcDEudGV4dENvbnRlbnQgPSBcIkFkZCBUbyBEbyBJdGVtXCI7XG4gIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sdGlwMSk7XG5cbiAgY29uc3QgYm90dG9tUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3R0b21QYW5lbC5jbGFzc0xpc3QuYWRkKFwiYm90dG9tUGFuZWxcIik7XG4gIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChib3R0b21QYW5lbCk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpO1xuICBib3R0b21QYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIGNvbnN0IHByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RzVGl0bGUpO1xuXG4gIGNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwZXJzb25hbFwiKTtcbiAgcGVyc29uYWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgcGVyc29uYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRwYWdlKTtcbiAgY29uc3QgdGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRleHQ0LnRleHRDb250ZW50ID0gXCJQZXJzb25hbFwiO1xuICBwZXJzb25hbC5hcHBlbmRDaGlsZCh0ZXh0NCk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHBlcnNvbmFsKTtcblxuICBjb25zdCB3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgd29yay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndvcmtcIik7XG4gIHdvcmsuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgd29yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZHBhZ2UpO1xuICBjb25zdCB0ZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGV4dDUudGV4dENvbnRlbnQgPSBcIldvcmtcIjtcbiAgd29yay5hcHBlbmRDaGlsZCh0ZXh0NSk7XG4gIGJvdHRvbVBhbmVsLmFwcGVuZENoaWxkKHdvcmspO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2YXJpYWJsZVByb2plY3RzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmFyaWFibGVQcm9qZWN0c1wiKTtcbiAgYm90dG9tUGFuZWwuYXBwZW5kQ2hpbGQodmFyaWFibGVQcm9qZWN0cyk7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9qZWN0XCIpO1xuICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGFkZFByb2plY3QuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLXBsdXMtc3F1YXJlXCI+PHJlY3QgeD1cIjNcIiB5PVwiM1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48bGluZSB4MT1cIjEyXCIgeTE9XCI4XCIgeDI9XCIxMlwiIHkyPVwiMTZcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCI+PC9saW5lPjwvc3ZnPic7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3QpO1xuICBzaWRlUGFuZWwuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgY29uc3QgdG9vbHRpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9vbHRpcDIuY2xhc3NMaXN0LmFkZChcInRvb2x0aXBcIik7XG4gIHRvb2x0aXAyLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdHNcIjtcbiAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZCh0b29sdGlwMik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydFBhZ2UoKSB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnUuaW5uZXJIVE1MID1cbiAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLW1lbnVcIj48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIyMVwiIHkyPVwiMThcIj48L2xpbmU+PC9zdmc+JztcbiAgLy8gbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkYXJrTW9kZVRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRhcmtNb2RlVG9nZ2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGFya01vZGVUb2dnbGVcIik7XG4gIGRhcmtNb2RlVG9nZ2xlLmlubmVySFRNTCA9XG4gICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTcuNSwyQzUuNzEsMy4xNSA0LjUsNS4xOCA0LjUsNy41QzQuNSw5LjgyIDUuNzEsMTEuODUgNy41MywxM0M0LjQ2LDEzIDIsMTAuNTQgMiw3LjVBNS41LDUuNSAwIDAsMSA3LjUsMk0xOS4wNywzLjVMMjAuNSw0LjkzTDQuOTMsMjAuNUwzLjUsMTkuMDdMMTkuMDcsMy41TTEyLjg5LDUuOTNMMTEuNDEsNUw5Ljk3LDZMMTAuMzksNC4zTDksMy4yNEwxMC43NSwzLjEyTDExLjMzLDEuNDdMMTIsMy4xTDEzLjczLDMuMTNMMTIuMzgsNC4yNkwxMi44OSw1LjkzTTkuNTksOS41NEw4LjQzLDguODFMNy4zMSw5LjU5TDcuNjUsOC4yN0w2LjU2LDcuNDRMNy45Miw3LjM1TDguMzcsNi4wNkw4Ljg4LDcuMzNMMTAuMjQsNy4zNkw5LjE5LDguMjNMOS41OSw5LjU0TTE5LDEzLjVBNS41LDUuNSAwIDAsMSAxMy41LDE5QzEyLjI4LDE5IDExLjE1LDE4LjYgMTAuMjQsMTcuOTNMMTcuOTMsMTAuMjRDMTguNiwxMS4xNSAxOSwxMi4yOCAxOSwxMy41TTE0LjYsMjAuMDhMMTcuMzcsMTguOTNMMTcuMTMsMjIuMjhMMTQuNiwyMC4wOE0xOC45MywxNy4zOEwyMC4wOCwxNC42MUwyMi4yOCwxNy4xNUwxOC45MywxNy4zOE0yMC4wOCwxMi40MkwxOC45NCw5LjY0TDIyLjI4LDkuODhMMjAuMDgsMTIuNDJNOS42MywxOC45M0wxMi40LDIwLjA4TDkuODcsMjIuMjdMOS42MywxOC45M1pcIiAvPjwvc3ZnPic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChkYXJrTW9kZVRvZ2dsZSk7XG59XG4iLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vbG9jYWxzdG9yYWdlXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5mdW5jdGlvbiB0b2RvaXRlbXMoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgZHVlVGltZSxcbiAgcHJpb3JpdHksXG4gIGluZGV4LFxuICBwcm9qZWN0LFxuICBjaGVja2VkXG4pIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGR1ZVRpbWUsXG4gICAgcHJpb3JpdHksXG4gICAgaW5kZXgsXG4gICAgcHJvamVjdCxcbiAgICBjaGVja2VkLFxuICB9O1xufVxuZXhwb3J0IGNvbnN0IHRvZG9zID0gW107XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvID0gKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgZHVlVGltZSxcbiAgICBwcmlvcml0eSxcbiAgICBpbmRleCxcbiAgICBwcm9qZWN0LFxuICAgIGNoZWNrZWRcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG9pdGVtcyhcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgZHVlVGltZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgaW5kZXgsXG4gICAgICBwcm9qZWN0LFxuICAgICAgY2hlY2tlZFxuICAgICk7XG4gICAgaWYgKHRpdGxlID09PSBcIlwiICYmIGR1ZURhdGUudmFsdWVPZigpLmlzTmFOKSB7XG4gICAgICAvLyByZXF1aXJlIHRoaXMgc28gdGhhdCBibGFuayB0b2RvcyBhcmUgbm90IGF0dGFjaGVkIG9uIHN1YnNlcXVlbnQgc3VibWl0c1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgICAgYWRkVGFzayhuZXdUb2RvKTtcbiAgICB9XG4gIH07XG5cbiAgLyogY29uc3QgdG9nZ2xlVG9kb0NvbXBsZXRpb24gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgdG9kb3NbaW5kZXhdLnRvZ2dsZUNvbXBsZXRpb24oKTtcbiAgICAgICAgcmVuZGVyVG9kb0xpc3QoKTtcbiAgICAgIH07ICovXG5cbiAgcmV0dXJuIHtcbiAgICB0b2RvcyxcbiAgICBhZGRUb2RvIC8qIHJlbW92ZVRvZG8sIHRvZ2dsZVRvZG9Db21wbGV0aW9uICovLFxuICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVG9kb0xpc3QgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9MaXN0Q2hlY2tlZChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpZGVudGl0eSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgY29uc29sZS5sb2coaWRlbnRpdHkpO1xuICBjb25zdCBleGlzdGluZ1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgZXhpc3RpbmdUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaW5kZXggPT0gaWRlbnRpdHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGFzay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiAvaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAgKi9cbiAgfSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUYXNrcykpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1pbm5lci1kZWNsYXJhdGlvbnMgKi9cblxuaW1wb3J0IGRpc3BsYXlIaWRlRWRpdFBvcHVwIGZyb20gXCIuL2Rpc3BsYXloaWRlZWRpdHBvcHVwXCI7XG4vLyBpbXBvcnQgZm9ybUFjdGlvbnMgZnJvbSBcIi4vZm9ybUFjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0xpc3RFZGl0QnV0dG9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlkZW50aXR5ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBjb25zb2xlLmxvZyhpZGVudGl0eSk7XG4gIGNvbnN0IGV4aXN0aW5nVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpIHx8IFtdO1xuICAvLyBjb25zdCBuZXdvbmVzID0gZXhpc3RpbmdUYXNrcy5maWx0ZXIoKGVsKSA9PiBlbC5pbmRleCAhPSBpZGVudGl0eSk7XG4gIGxldCBtYXRjaGluZ1Rhc2sgPSBudWxsO1xuXG4gIGV4aXN0aW5nVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmluZGV4ID09IGlkZW50aXR5KSB7XG4gICAgICBtYXRjaGluZ1Rhc2sgPSB0YXNrO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1hdGNoaW5nVGFzaykge1xuICAgIC8vIGNvbnN0IG5ld29uZXMgPSBleGlzdGluZ1Rhc2tzLmZpbHRlcigoZWwpID0+IGVsLmluZGV4ICE9IGlkZW50aXR5KTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG5ld29uZXMpKTtcblxuICAgIGRpc3BsYXlIaWRlRWRpdFBvcHVwKCk7XG4gICAgY29uc3QgcG9wdXBUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFBvcHVwVGl0bGVcIik7XG4gICAgcG9wdXBUaXRsZS52YWx1ZSA9IG1hdGNoaW5nVGFzay50aXRsZTtcbiAgICBjb25zdCBwb3B1cERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0UG9wdXBEZXNjcmlwdGlvblwiKTtcbiAgICBwb3B1cERlc2NyaXB0aW9uLnZhbHVlID0gbWF0Y2hpbmdUYXNrLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IHBvcHVwUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRwcmlvcml0eVwiKTtcbiAgICBwb3B1cFByaW9yaXR5LnZhbHVlID0gbWF0Y2hpbmdUYXNrLnByaW9yaXR5O1xuICAgIGNvbnN0IHBvcHVwUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHByb2plY3RcIik7XG4gICAgcG9wdXBQcm9qZWN0LnZhbHVlID0gbWF0Y2hpbmdUYXNrLnByb2plY3Q7XG4gICAgLy8gY29uc3QgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRkdWVEYXRlXCIpO1xuICAgIC8vIHByb2plY3REdWVEYXRlLnZhbHVlID0gbWF0Y2hpbmdUYXNrLmR1ZURhdGU7XG4gICAgLy8gY29uc3QgcHJvamVjdER1ZVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRkdWVUaW1lXCIpO1xuICAgIC8vIHByb2plY3REdWVUaW1lLnZhbHVlID0gbWF0Y2hpbmdUYXNrLnByb2plY3REdWVUaW1lO1xuXG4gICAgY29uc3QgZWRpdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdHN1Ym1pdFwiKTtcbiAgICBlZGl0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyg1MCk7XG4gICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGR1ZWRhdGVcIik7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RHVlRGF0ZS52YWx1ZSk7XG4gICAgICBjb25zdCBwcm9qZWN0RHVlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGR1ZXRpbWVcIik7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RHVlVGltZS52YWx1ZSk7XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgICAuLi5tYXRjaGluZ1Rhc2ssXG4gICAgICAgIHRpdGxlOiBwb3B1cFRpdGxlLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogcG9wdXBEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHBvcHVwUHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHByb2plY3Q6IHBvcHVwUHJvamVjdC52YWx1ZSxcbiAgICAgICAgZHVlVGltZTogcHJvamVjdER1ZVRpbWUudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IHByb2plY3REdWVEYXRlLnZhbHVlLFxuICAgICAgfTtcblxuICAgICAgLyogY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0UG9wdXBcIik7XG4gICAgICBwb3B1cFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgIHBvcHVwRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgcG9wdXBQcmlvcml0eS52YWx1ZSA9IFwiXCI7XG4gICAgICBwb3B1cFByb2plY3QudmFsdWUgPSBcIlwiO1xuICAgICAgLy8gcHJvamVjdER1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgLy8gcHJvamVjdER1ZVRpbWUudmFsdWUgPSBcIlwiO1xuICAgICAgY29udGVudC5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICovXG4gICAgICBjb25zdCBpZCA9IGV4aXN0aW5nVGFza3MuaW5kZXhPZihtYXRjaGluZ1Rhc2spO1xuXG4gICAgICAvLyBSZXBsYWNlIHRoZSBlbGVtZW50IHdpdGggdXBkYXRlZFRhc2tcbiAgICAgIGlmIChpZCAhPT0gLTEpIHtcbiAgICAgICAgZXhpc3RpbmdUYXNrc1tpZF0gPSB1cGRhdGVkVGFzaztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRUYXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nVGFza3MpO1xuICAgICAgLy8gZXhpc3RpbmdUYXNrc1ttYXRjaGluZ1Rhc2suaW5kZXhdID0gdXBkYXRlZFRhc2s7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nVGFza3MpKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGZvcm1hdCwgYWRkRGF5cywgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBjb21pbmdQYWdlKCkge1xuICBjb25zdCB0b2RheVRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVRvZG9zXCIpO1xuICBjb25zdCBsaXN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RUb2Rvc1wiKTtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXRlRm9ybWF0dGVkID0gZm9ybWF0KHRvZGF5LCBcInl5eXktTU0tZGRcIik7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBwYXJzZUlTTyhkYXRlRm9ybWF0dGVkKTtcbiAgY29uc3Qgd2VlayA9IFtdO1xuICBjb25zdCBkYXkxID0gZm9ybWF0KGFkZERheXMoZm9ybWF0dGVkRGF0ZSwgMSksIFwieXl5eS1NTS1kZFwiKTtcbiAgY29uc3QgZGF5MiA9IGZvcm1hdChhZGREYXlzKGZvcm1hdHRlZERhdGUsIDIpLCBcInl5eXktTU0tZGRcIik7XG4gIGNvbnN0IGRheTMgPSBmb3JtYXQoYWRkRGF5cyhmb3JtYXR0ZWREYXRlLCAzKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICBjb25zdCBkYXk0ID0gZm9ybWF0KGFkZERheXMoZm9ybWF0dGVkRGF0ZSwgNCksIFwieXl5eS1NTS1kZFwiKTtcbiAgY29uc3QgZGF5NSA9IGZvcm1hdChhZGREYXlzKGZvcm1hdHRlZERhdGUsIDUpLCBcInl5eXktTU0tZGRcIik7XG4gIGNvbnN0IGRheTYgPSBmb3JtYXQoYWRkRGF5cyhmb3JtYXR0ZWREYXRlLCA2KSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB3ZWVrLnB1c2goZGF0ZUZvcm1hdHRlZCwgZGF5MSwgZGF5MiwgZGF5MywgZGF5NCwgZGF5NSwgZGF5Nik7XG5cbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9MaXN0RHVlRGF0ZVwiKTtcblxuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkdWVVcGNvbWluZ1wiKSkge1xuICAgICAgLy8gZG8gbm90aGluZy4gRW5zdXJlcyBubyBkdXBsaWNhdGVzXG4gICAgfVxuICAgIGlmICh0b2RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHVlVG9kYXlcIikpIHtcbiAgICAgIHRvZGF5VG9kb3MucmVtb3ZlQ2hpbGQodG9kby5wYXJlbnROb2RlKTtcbiAgICAgIGxpc3RUb2Rvcy5hcHBlbmRDaGlsZCh0b2RvLnBhcmVudE5vZGUpO1xuICAgICAgdG9kby5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkdWVUb2RheVwiKTtcbiAgICB9XG4gICAgLyogZnVuY3Rpb24gZGVsZXRlaW50ZXJpb3IoKSB7XG4gICAgICB0b2RheVRvZG9zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGRlbGV0ZWludGVyaW9yKCk7ICovXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b2RvLnRleHRDb250ZW50ID09PSB3ZWVrW2ldKSB7XG4gICAgICAgIGNvbnN0IHllc21vYmlsZU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vYmlsZVwiKTtcbiAgICAgICAgaWYgKHllc21vYmlsZU1vZGUgPT09IFwiZW5hYmxlZFwiKSB7XG4gICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFuZWxcIik7XG4gICAgICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICAgICAgY29udGVudC5zdHlsZS53ZWJraXRGaWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vYmlsZVwiLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImR1ZVVwY29taW5nXCIpO1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hQYWdlXCIpO1xuICAgICAgICBpbmJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnN0IHVwY29taW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZ1BhZ2VcIik7XG4gICAgICAgIHVwY29taW5nLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnN0IHRvZGF5UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlQYWdlXCIpO1xuICAgICAgICB0b2RheVBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCB1cGNvbWluZ1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGNvbWluZ1RvZG9zXCIpO1xuICAgICAgICBsaXN0VG9kb3MucmVtb3ZlQ2hpbGQodG9kby5wYXJlbnROb2RlKTtcbiAgICAgICAgdXBjb21pbmdUb2Rvcy5hcHBlbmRDaGlsZCh0b2RvLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBpbXBvcnQgeyBmb3JtYXQsIGFkZERheXMsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG4vLyBpbXBvcnQgcGFyc2VKU09OIGZyb20gXCJkYXRlLWZucy9wYXJzZUpTT05cIjtcbmltcG9ydCBzdGFydFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdGFydHBhZ2VcIjtcbmltcG9ydCBtYWluQ29udGFpbmVyIGZyb20gXCIuL21vZHVsZXMvY29udGFpbmVyXCI7XG5pbXBvcnQgc2lkZVBhbmVsRnVuY3Rpb24gZnJvbSBcIi4vbW9kdWxlcy9zaWRlcGFuZWxcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCByZW5kZXJUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlcnRvZG9saXN0XCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlcnByb2plY3RcIjtcblxuc3RhcnRQYWdlKCk7XG5tYWluQ29udGFpbmVyKCk7XG5zaWRlUGFuZWxGdW5jdGlvbigpO1xuXG5jb25zdCB5ZXNtb2JpbGVNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2JpbGVcIik7XG5pZiAoeWVzbW9iaWxlTW9kZSA9PT0gXCJlbmFibGVkXCIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb2JpbGVcIiwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHJlZmVyZW5jZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik7XG4gIC8vIGlmIHJlZmVyZW5jZSBleGlzdHNcbiAgaWYgKHJlZmVyZW5jZSkge1xuICAgIC8vIGNvbnZlcnRzIGJhY2sgdG8gYXJyYXkgYW5kIHN0b3JlIGl0IGluIHRvZG9zIGFycmF5XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKHJlZmVyZW5jZSk7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuXG4gICAgY29uc3QgZmlsdGVyaW5nID0gdG9kb3MuZmlsdGVyKChlbCkgPT4gZWwudGl0bGUgIT09IFwiXCIpOyAvLyBmaXJzdCBpZiBzdGF0ZW1lbnQgZG9lc250IHdvcmsgaWYgcGlja2luZyBmcm9tIGFycmF5Li4gbmVlZCB0byBmaWx0ZXIgb3V0IGFsbCBlbGVtZW50cyB3aXRoIGFuIGVtcHR5IHRpdGxlIGJlY2F1c2UgcmVtZW1iZXIgdGhlIGRhdGUgd291bGQgc3RpbGwgc2hvdyB1cCBhcyBpbnZhbGlkLCBicmluZ2luZyBpc3N1ZXNcblxuICAgIGNvbnN0IGFyciA9IGZpbHRlcmluZy5zb3J0KFxuICAgICAgKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgKTtcblxuICAgIHJlbmRlclRvZG9MaXN0KGFycik7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gIGlmIChwcm9qZWN0cykge1xuICAgIC8vIGNvbnZlcnRzIGJhY2sgdG8gYXJyYXkgYW5kIHN0b3JlIGl0IGluIHRvZG9zIGFycmF5XG4gICAgY29uc3QgcHJvamVjdGxpc3QgPSBKU09OLnBhcnNlKHByb2plY3RzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG5cbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RsaXN0KTtcbiAgfVxufVxuLy8gaW5pdGlhbGx5IGdldCBldmVyeXRoaW5nIGZyb20gbG9jYWxTdG9yYWdlXG5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbi8vIHNldCBsb2NhbCBzdG9yYWdlIGZvciBwYWdlIG9uIGxvYWRcbmxldCBkYXJrTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFya01vZGVcIik7IC8vIG5hbWUgaXQgd2hhdGV2ZXIgeW91IHdhbnRcbmNvbnN0IGRhcmtNb2RlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXJrTW9kZVRvZ2dsZVwiKTsgLy8gYWNjZXNzZWQgZnJvbSBidXR0b24gb24gcGFnZS4gb24gaGluZHNpZ2h0IGNvdWxkIGhhdmUgdXNlZCBjbGFzcyBvbiBzdmdcblxuLy8gdGhpcyBmdW5jdGlvbiBpcyB0byBlbmFibGUgZGFyayBtb2RlXG5jb25zdCBlbmFibGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFya1RoZW1lXCIpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhcmtNb2RlXCIsIFwiZW5hYmxlZFwiKTsgLy8gdGhlIHR3byBpdGVtcyBpbiB0aGUgYnJhY2tldHMgYXJlIGtleXMuIGkgY291bGQgaGF2ZSBuYW1lZCB0aGUgc2Vjb25kIG9uZSBhbnl0aGluZyBsaWtlIHllcywgYWN0aXZlLCBldGNcbn07XG5cbi8vIHRoaXMgZGlzYWJsZXMgZGFya21vZGVcbmNvbnN0IGRpc2FibGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1RoZW1lXCIpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhcmtNb2RlXCIsIG51bGwpOyAvLyBzYW1lIGhlcmUuIHNlY29uZCBvbmUgY291bGQgaGF2ZSBiZWVuIGEgc3RyaW5nXG59O1xuXG4vLyBjaGVja3MgaWYgZGFya21vZGUgaXMgZW5hYmxlZCBvbmNlIGEgcGFnZSBsb2Fkc1xuaWYgKGRhcmtNb2RlID09PSBcImVuYWJsZWRcIikge1xuICBlbmFibGVEYXJrTW9kZSgpO1xufVxuXG4vLyB0b2dnbGVzIGJldHdlZW4gdGhlIHR3byB0aGVtZXNcbmRhcmtNb2RlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRhcmtNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXJrTW9kZVwiKTtcbiAgaWYgKGRhcmtNb2RlICE9PSBcImVuYWJsZWRcIikge1xuICAgIGVuYWJsZURhcmtNb2RlKCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzYWJsZURhcmtNb2RlKCk7XG4gIH1cbn0pO1xuXG5jb25zdCBtb2JpbGVNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2JpbGVcIik7XG5jb25zdCBtb2JpbGVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG5cbmNvbnN0IGVuYWJsZU1vYmlsZU1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlUGFuZWxcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYW5lbFwiKTtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBjb250ZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cigyMHB4KVwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vYmlsZVwiLCBcImVuYWJsZWRcIik7XG59O1xuXG4vLyB0aGlzIGRpc2FibGVzIGRhcmttb2RlXG5jb25zdCBkaXNhYmxlTW9iaWxlTW9kZSA9ICgpID0+IHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGVQYW5lbFwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblBhbmVsXCIpO1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnRlbnQuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9iaWxlXCIsIG51bGwpO1xufTtcblxuLy8gY2hlY2tzIGlmIGRhcmttb2RlIGlzIGVuYWJsZWQgb25jZSBhIHBhZ2UgbG9hZHNcbmlmIChtb2JpbGVNb2RlID09PSBcImVuYWJsZWRcIikge1xuICBlbmFibGVNb2JpbGVNb2RlKCk7XG59XG5cbi8vIHRvZ2dsZXMgYmV0d2VlbiB0aGUgdHdvIHRoZW1lc1xubW9iaWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGlmbW9iaWxlTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9iaWxlXCIpO1xuICBpZiAoaWZtb2JpbGVNb2RlICE9PSBcImVuYWJsZWRcIikge1xuICAgIGVuYWJsZU1vYmlsZU1vZGUoKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNhYmxlTW9iaWxlTW9kZSgpO1xuICB9XG59KTtcblxuLy8gdGhlIGJlbG93IHNjcmlwdCBpcyBhIGNvdW50ZXIgYWdhaW5zdCB0aGUgbW9iaWxlIHNjcmVlbiBtZW51IHBvcHVwIHN0YXlpbmcgdXAgaWYgc29tZW9uZSBleHBhbmRzIHRoZSBzY3JlZW5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oeCkge1xuICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgLy8gSWYgbWVkaWEgcXVlcnkgbWF0Y2hlc1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYW5lbFwiKTtcbiAgICBjb250ZW50LnN0eWxlLmZpbHRlciA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJub25lXCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtb2JpbGVcIiwgbnVsbCk7XG4gIH1cbn1cblxuY29uc3QgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNDUwcHgpXCIpO1xubXlGdW5jdGlvbih4KTsgLy8gQ2FsbCBsaXN0ZW5lciBmdW5jdGlvbiBhdCBydW4gdGltZVxueC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG15RnVuY3Rpb24pOyAvLyBBdHRhY2ggbGlzdGVuZXIgZnVuY3Rpb24gb24gc3RhdGUgY2hhbmdlc1xuIl0sIm5hbWVzIjpbImZvcm1hdCIsInBhcnNlSVNPIiwicmVuZGVyVG9kb0xpc3QiLCJjcmVhdGVUb2RvTGlzdCIsImVuYWJsZVN1Ym1pdCIsImFyciIsImJ1dHRvbkZ1bmN0aW9ucyIsInRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJkdWVUaW1lIiwicHJpb3JpdHkiLCJpbmRleCIsIkRhdGUiLCJub3ciLCJwcm9qZWN0IiwidG9kb0xpc3QiLCJhZGRUb2RvIiwidmFsdWVPZiIsImlzTmFOIiwiZXhpc3RpbmdUYXNrcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyaW5nIiwiZmlsdGVyIiwiZWwiLCJzb3J0IiwiYSIsImIiLCJwcm9qZWN0Q3JlYXRpb25Qb3B1cCIsImZvcm1BY3Rpb25zIiwiY2FuY2VsRm9ybSIsImNsb3NlRGlzcGxheSIsImVkaXRDYW5jZWxGb3JtIiwibWFpbkNvbnRhaW5lciIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJzaWRlUGFuZWwiLCJtYWluUGFuZWwiLCJpbmJveFBhZ2UiLCJ0b2RheVBhZ2UiLCJ1cGNvbWluZ1BhZ2UiLCJsaXN0VG9kb3MiLCJ0b2RheVRvZG9zIiwidXBjb21pbmdUb2RvcyIsInBvcHVwIiwic3R5bGUiLCJkaXNwbGF5IiwicG9wdXBGb3JtIiwic2V0QXR0cmlidXRlIiwicG9wdXBUaXRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3B1cERlc2NyaXB0aW9uIiwiY29udHJvbHMiLCJkYXRlTGFiZWwiLCJ0ZXh0Q29udGVudCIsImRhdGVQaWNrZXIiLCJyZXF1aXJlZCIsInRpbWVMYWJlbCIsInRpbWVQaWNrZXIiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlQaWNrZXIiLCJvcHRpb25QbGFjZWhvbGRlciIsIm9wdGlvbjEiLCJjb2xvciIsIm9wdGlvbjIiLCJvcHRpb24zIiwicHJvamVjdExhYmVsIiwicHJvamVjdFBpY2tlciIsInByb2plY3RQbGFjZWhvbGRlciIsIm9wdGlvbjQiLCJvcHRpb241IiwiZXhpc3RpbmdQcm9qZWN0cyIsImZvckVhY2giLCJvcHRpb24iLCJpZCIsInByb2plY3RUaXRsZSIsImJ1dHRvbkJveCIsImJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImVkaXRQb3B1cCIsImVkaXRQb3B1cEZvcm0iLCJlZGl0UG9wdXBUaXRsZSIsImVkaXRQb3B1cERlc2NyaXB0aW9uIiwiZWRpdENvbnRyb2xzIiwiZWRpdERhdGVMYWJlbCIsImVkaXREYXRlUGlja2VyIiwiZWRpdFRpbWVMYWJlbCIsImVkaXRUaW1lUGlja2VyIiwiZWRpdFByaW9yaXR5TGFiZWwiLCJlZGl0UHJpb3JpdHlQaWNrZXIiLCJlZGl0T3B0aW9uUGxhY2Vob2xkZXIiLCJlZGl0T3B0aW9uMSIsImVkaXRPcHRpb24yIiwiZWRpdE9wdGlvbjMiLCJlZGl0UHJvamVjdExhYmVsIiwiZWRpdFByb2plY3RQaWNrZXIiLCJlZGl0UHJvamVjdFBsYWNlaG9sZGVyIiwiZWRpdE9wdGlvbjQiLCJlZGl0T3B0aW9uNSIsImVkaXRPcHRpb24iLCJlZGl0QnV0dG9uQm94IiwiZWRpdEJ1dHRvbiIsImVkaXRDYW5jZWxCdXR0b24iLCJ0b2RvRGlzcGxheSIsInRvZG9EaXNwbGF5Q2FyZCIsInRvZG9EaXNwbGF5VGl0bGUiLCJ0b2RvRGlzcGxheVBhcmEiLCJ0b2RvRGlzcGxheUNvbnRyb2xzIiwidG9kb0Rpc3BsYXlEYXRlTGFiZWwiLCJ0b2RvRGlzcGxheURhdGUiLCJ0b2RvRGlzcGxheVRpbWVMYWJlbCIsInRvZG9EaXNwbGF5VGltZSIsInRvZG9EaXNwbGF5UHJpb3JpdHlMYWJlbCIsInRvZG9EaXNwbGF5UHJpb3JpdHkiLCJ0b2RvRGlzcGxheVByb2plY3RMYWJlbCIsInRvZG9EaXNwbGF5UHJvamVjdCIsImNsb3NlQnV0dG9uIiwiY3JlYXRlUHJvamVjdCIsInByb2plY3RQb3B1cCIsIndlYmtpdEZpbHRlciIsImRpc3BsYXlIaWRlRGV0YWlscyIsImV2ZW50IiwiaWRlbnRpdHkiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsIm1hdGNoaW5nVGFzayIsInRhc2siLCJwb3B1cFByaW9yaXR5IiwicG9wdXBQcm9qZWN0IiwicHJvamVjdER1ZURhdGUiLCJwcm9qZWN0RHVlVGltZSIsImRpc3BsYXlIaWRlRWRpdFBvcHVwIiwiZGlzcGxheUhpZGVQb3B1cCIsImR1ZVRvZGF5IiwidG9kYXkiLCJkYXRlRm9ybWF0dGVkIiwidG9kb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9kbyIsInBhcmVudE5vZGUiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwicmVtb3ZlIiwieWVzbW9iaWxlTW9kZSIsInNldEl0ZW0iLCJpbmJveCIsInVwY29taW5nIiwicHJldmVudERlZmF1bHQiLCJnZXRFbGVtZW50QnlJZCIsInJlcXVpcmVkRmllbGRzIiwiYWxsRmlsbGVkIiwic3VibWl0QnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwiZmllbGQiLCJpbm5lckhUTUwiLCJyZWZlcmVuY2UiLCJ0b2RvbGlzdCIsInQiLCJsb2FkcGFnZSIsImFkZFRhc2siLCJwdXNoIiwic3RyaW5naWZ5IiwiYWRkUHJvamVjdCIsInByb2plY3RCdXR0b25GdW5jdGlvbnMiLCJwcm9qZWN0Rm9ybUFjdGlvbnMiLCJyZW5kZXJQcm9qZWN0IiwiZW5hYmxlUHJvamVjdFN1Ym1pdCIsInByb2plY3RJdGVtcyIsInByb2plY3RzIiwicHJvamVjdExpc3QiLCJhZGROZXdQcm9qZWN0IiwibmV3UHJvamVjdCIsImZpbmFsUHJvamVjdExpc3QiLCJwcm9qZWN0Q2FuY2VsRm9ybSIsInByb2plY3RQb3B1cEZvcm0iLCJwcm9qZWN0TmFtZSIsInZhcmlhYmxlUHJvamVjdHMiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInRleHQiLCJwcm9qZWN0RGVsZXRlIiwic3RvcmVkUHJvamVjdHMiLCJuZXdzdG9yZWRQcm9qZWN0cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidG9kb0xpc3RFZGl0QnV0dG9uIiwidG9kb0xpc3RDaGVja2VkIiwibmV3QXJyYXkiLCJ0b2RvTGlzdEl0ZW0iLCJjaGVja2VkIiwidG9kb0xpc3RQcmlvcml0eSIsInRvZG9MaXN0VGl0bGUiLCJ0b2RvTGlzdEJ1dHRvbiIsInRvZG9MaXN0RHVlRGF0ZSIsInRvZG9MaXN0RHVlVGltZSIsInRvZG9MaXN0RWRpdCIsInRvZG9MaXN0RGVsZXRlIiwibmV3VG9kb0xpc3QiLCJzaWRlUGFuZWxGdW5jdGlvbiIsInRvcFBhbmVsIiwiaWNvbjEiLCJ0ZXh0MSIsImljb24yIiwidGV4dDIiLCJpY29uMyIsInRleHQzIiwiYWRkQnV0dG9uIiwidG9vbHRpcDEiLCJib3R0b21QYW5lbCIsInByb2plY3RzVGl0bGUiLCJwZXJzb25hbCIsInRleHQ0Iiwid29yayIsInRleHQ1IiwidG9vbHRpcDIiLCJzdGFydFBhZ2UiLCJib2R5IiwiaGVhZGVyIiwibWVudSIsImRhcmtNb2RlVG9nZ2xlIiwidG9kb2l0ZW1zIiwibmV3VG9kbyIsImVkaXRTdWJtaXRCdXR0b24iLCJ1cGRhdGVkVGFzayIsImluZGV4T2YiLCJhZGREYXlzIiwiZm9ybWF0dGVkRGF0ZSIsIndlZWsiLCJkYXkxIiwiZGF5MiIsImRheTMiLCJkYXk0IiwiZGF5NSIsImRheTYiLCJnZXRGcm9tTG9jYWxTdG9yYWdlIiwicHJvamVjdGxpc3QiLCJkYXJrTW9kZSIsImVuYWJsZURhcmtNb2RlIiwiZGlzYWJsZURhcmtNb2RlIiwibW9iaWxlTW9kZSIsIm1vYmlsZVRvZ2dsZSIsImVuYWJsZU1vYmlsZU1vZGUiLCJkaXNhYmxlTW9iaWxlTW9kZSIsImlmbW9iaWxlTW9kZSIsIm15RnVuY3Rpb24iLCJ4IiwibWF0Y2hlcyIsIm1hdGNoTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9