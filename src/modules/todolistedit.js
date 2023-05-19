/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-inner-declarations */

import displayHideEditPopup from "./displayhideeditpopup";
// import formActions from "./formActions";

export default function todoListEditButton(event) {
  event.preventDefault();
  const identity = event.currentTarget.parentElement.getAttribute("id");
  console.log(identity);
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // const newones = existingTasks.filter((el) => el.index != identity);
  let matchingTask = null;

  existingTasks.forEach((task) => {
    if (task.index == identity) {
      matchingTask = task;
    }
  });

  if (matchingTask) {
    // const newones = existingTasks.filter((el) => el.index != identity);
    // localStorage.setItem("tasks", JSON.stringify(newones));

    displayHideEditPopup();
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
        dueDate: projectDueDate.value,
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
