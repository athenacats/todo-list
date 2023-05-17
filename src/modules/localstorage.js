// Retrieve existing tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add a new task
function addTask(todo) {
  existingTasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

export { addTask, existingTasks };
