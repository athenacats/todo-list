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

export { addTask, existingTasks, addProject, existingProjects };
