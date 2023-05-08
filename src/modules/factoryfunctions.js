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

export { todoitems, createTodoList };
