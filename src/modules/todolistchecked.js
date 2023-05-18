/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
export default function todoListChecked(event) {
  event.preventDefault();
  const identity = event.currentTarget.parentElement.getAttribute("id");
  console.log(identity);
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  existingTasks.forEach((task) => {
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
