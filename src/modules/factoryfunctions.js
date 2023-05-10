import renderTodoList from "./rendertodolist";

function todoitems(title, descriprion, dueDate, dueTime, priority) {
  return { title, descriprion, dueDate, dueTime, priority };
}

const createTodoList = () => {
  const todos = [];

  const addTodo = (title, descriprion, dueDate, dueTime, priority) => {
    const newTodo = todoitems(title, descriprion, dueDate, dueTime, priority);
    todos.push(newTodo);
    renderTodoList();
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
    renderTodoList();
  };

  const toggleTodoCompletion = (index) => {
    todos[index].toggleCompletion();
    renderTodoList();
  };

  return { todos, addTodo, removeTodo, toggleTodoCompletion };
};

const todoList = createTodoList();

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#popupTitle").value;
  const description = document.querySelector("#popupDescription").value;
  const dueDate = document.querySelector("#dueDate").value;
  const dueTime = document.querySelector("#dueTime").value;
  const priority = document.querySelector("#priority").value;
  todoList.addTodo(title, description, dueDate, dueTime, priority);
});

export { todoitems, createTodoList };
