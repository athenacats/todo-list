// Retrieve existing tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add a new task
function addTask(todo) {
  existingTasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

// Remove a task
function removeTask(index) {
  const reference = localStorage.getItem("tasks");
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    const todos = JSON.parse(reference);
    console.log(todos);
    todos.forEach((t) => {
      console.log(t.dueDate);

      // t.dueDate = parseISO(t.dueDate, "yyyy-MM-dd");
    });
    const filtering = todos.filter((el) => el.title !== ""); // first if statement doesnt work if picking from array.. need to filter out all elements with an empty title because remember the date would still show up as invalid, bringing issues

    const arr = filtering.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
    );

    arr.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(arr));
  }
}

export { addTask, removeTask, existingTasks };
