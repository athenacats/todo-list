import { addTask } from "./localstorage";

/* eslint-disable no-plusplus */
function todoitems(
  title,
  description,
  dueDate,
  dueTime,
  priority,
  index,
  project,
  checked
) {
  return {
    title,
    description,
    dueDate,
    dueTime,
    priority,
    index,
    project,
    checked,
  };
}
export const todos = [];

const createTodoList = () => {
  const addTodo = (
    title,
    description,
    dueDate,
    dueTime,
    priority,
    index,
    project,
    checked
  ) => {
    const newTodo = todoitems(
      title,
      description,
      dueDate,
      dueTime,
      priority,
      index,
      project,
      checked
    );
    if (title === "" && dueDate.valueOf().isNaN) {
      // require this so that blank todos are not attached on subsequent submits
      // do nothing
    } else {
      todos.push(newTodo);
      addTask(newTodo);
    }
  };

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
