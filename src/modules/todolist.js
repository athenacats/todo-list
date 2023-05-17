import { addTask } from "./localstorage";

/* eslint-disable no-plusplus */
function todoitems(title, descriprion, dueDate, dueTime, priority, index) {
  return { title, descriprion, dueDate, dueTime, priority, index };
}
export const todos = [];

const createTodoList = () => {
  const addTodo = (title, descriprion, dueDate, dueTime, priority, index) => {
    const newTodo = todoitems(
      title,
      descriprion,
      dueDate,
      dueTime,
      priority,
      index
    );
    if (title === "" && dueDate.valueOf().isNaN) {
      // require this so that blank todos are not attached on subsequent submits
      // do nothing
    } else {
      todos.push(newTodo);
      addTask(newTodo);
    }
  };

  /* const removeTodo = (index) => {
        todos.splice(index, 1);
        renderTodoList();
      }; */

  /* const toggleTodoCompletion = (index) => {
        todos[index].toggleCompletion();
        renderTodoList();
      }; */

  return {
    todos,
    addTodo /* removeTodo, toggleTodoCompletion */,
  };
};

export { createTodoList };
