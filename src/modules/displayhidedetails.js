export default function displayHideDetails(event) {
  const popup = document.querySelector(".todoDisplay");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";

  const identity = event.currentTarget.parentElement.getAttribute("id");

  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let matchingTask = null;

  existingTasks.forEach((task) => {
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
