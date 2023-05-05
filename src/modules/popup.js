export default function taskPopUp() {
  const container = document.querySelector(".container");

  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  container.appendChild(popup);

  const popupForm = document.createElement("form");
  popup.setAttribute("id", "popupForm");
  popup.setAttribute("name", "popupForm");
  popup.appendChild(popupForm);

  const popupTitle = document.createElement("input");
  popupTitle.setAttribute("type", "text");
  popupTitle.setAttribute("id", "popupTitle");
  popupTitle.setAttribute("placeholder", "Title");
  popupTitle.setAttribute("name", "Title");
  popupForm.appendChild(popupTitle);

  const popupDescription = document.createElement("input");
  popupDescription.setAttribute("type", "text");
  popupDescription.setAttribute("id", "popupDescription");
  popupDescription.setAttribute("placeholder", "Description");
  popupForm.appendChild(popupDescription);

  const controls = document.createElement("div");
  popupForm.appendChild(controls);

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "duedate");
  dateLabel.textContent = "Due Date";
  controls.appendChild(dateLabel);

  const datePicker = document.createElement("input");
  datePicker.setAttribute("type", "date");
  datePicker.setAttribute("id", "duedate");
  datePicker.setAttribute("name", "duedate");
  datePicker.setAttribute("placeholder", "Today");
  datePicker.setAttribute("onfocus", "(this.type='date')");
  datePicker.setAttribute("onfocus", "(this.type='date')");
  controls.appendChild(datePicker);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority");
  priorityLabel.textContent = "Priority Level";
  controls.appendChild(priorityLabel);

  const priorityPicker = document.createElement("select");
  priorityPicker.setAttribute("id", "priority");
  priorityPicker.setAttribute("name", "priority");
  priorityPicker.setAttribute("onchange", "updatePriority(this.value)");
  priorityPicker.setAttribute("onfocus", "(this.type='select')");
  controls.appendChild(priorityPicker);

  const timePicker = document.createElement("select");
  prioritypicker.setAttribute("id", "priority");
  prioritypicker.setAttribute("name", "priority");
  prioritypicker.setAttribute("onchange", "updatePriority(this.value)");
  prioritypicker.setAttribute("onfocus", "(this.type='select')");
  controls.appendChild(prioritypicker);

  const option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.textContent = "Low";
  prioritypicker.appendChild(option1);

  const option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.textContent = "Medium";
  prioritypicker.appendChild(option2);

  const option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  option3.textContent = "High";
  prioritypicker.appendChild(option3);

  const button = document.createElement("button");
}
