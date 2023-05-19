/* eslint-disable eqeqeq */
/* eslint-disable no-inner-declarations */

import displayHidePopup from "./displayhidepopup";

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
    displayHidePopup();
    const popupTitle = document.getElementById("popupTitle");
    popupTitle.value = matchingTask.title;
    const popupDescription = document.getElementById("popupDescription");
    popupDescription.value = matchingTask.description;
    const popupPriority = document.getElementById("priority");
    popupPriority.value = matchingTask.priority;
    const popupProject = document.getElementById("project");
    popupProject.value = matchingTask.project;
    const projectDueDate = document.getElementById("dueDate");
    projectDueDate.value = matchingTask.dueDate;
    const projectDueTime = document.getElementById("dueTime");
    projectDueTime.value = matchingTask.projectDueTime;

    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", () => {
      const updatedTask = {
        ...matchingTask,
        title: popupTitle.value,
        description: popupDescription.value,
        priority: popupPriority.value,
        project: popupProject.value,
        dueTime: projectDueTime.value,
        dueDate: projectDueDate.value,
      };

      existingTasks[matchingTask.index] = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(existingTasks));
      window.location.reload();
    });
  }
}
