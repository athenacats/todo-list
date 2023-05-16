// Retrieve existing tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add a new task
function addTask(todo) {
  existingTasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

// Remove a task
function removeTask(index) {
  existingTasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

export { addTask, removeTask, existingTasks };
