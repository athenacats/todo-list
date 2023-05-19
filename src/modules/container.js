import projectCreationPopup from "./projectpopup";
import formActions from "./formActions";
import enableSubmit from "./formvalidation";
import cancelForm, { closeDisplay, editCancelForm } from "./formcancel";

export default function mainContainer() {
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
  popupTitle.addEventListener("input", enableSubmit);
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
  datePicker.addEventListener("input", enableSubmit);
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
  timePicker.addEventListener("input", enableSubmit);
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
  priorityPicker.setAttribute("change", enableSubmit);
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
  projectPicker.setAttribute("change", enableSubmit);
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
  existingProjects.forEach((project) => {
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
    formActions();
  });
  buttonBox.appendChild(button);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.setAttribute("id", "cancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", cancelForm);
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
  editPopupTitle.addEventListener("input", enableSubmit);
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
  editDatePicker.addEventListener("input", enableSubmit);
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
  editTimePicker.addEventListener("input", enableSubmit);
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
  editPriorityPicker.setAttribute("change", enableSubmit);
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
  editProjectPicker.setAttribute("change", enableSubmit);
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
  existingProjects.forEach((project) => {
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
  editCancelButton.addEventListener("click", editCancelForm);
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

  const todoDisplayDate = document.createElement("p");
  todoDisplayDate.classList.add("todoDisplayDate");
  todoDisplayCard.appendChild(todoDisplayDate);

  const todoDisplayTime = document.createElement("p");
  todoDisplayTime.classList.add("todoDisplayTime");
  todoDisplayCard.appendChild(todoDisplayTime);

  const todoDisplayPriority = document.createElement("p");
  todoDisplayPriority.classList.add("todoDisplayPriority");
  todoDisplayCard.appendChild(todoDisplayPriority);

  const todoDisplayProject = document.createElement("p");
  todoDisplayProject.classList.add("todoDisplayProject");
  todoDisplayCard.appendChild(todoDisplayProject);

  const closeButton = document.createElement("button");
  closeButton.classList.add("closeButton");
  closeButton.setAttribute("type", "button");
  closeButton.addEventListener("click", closeDisplay);
  todoDisplayCard.appendChild(closeButton);

  projectCreationPopup();
}
