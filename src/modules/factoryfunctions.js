import renderTodoList from "./rendertodolist";

export default function formActions() {
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
    const dueDate = document.querySelector("#duedate").value;
    const dueTime = document.querySelector("#duetime").value;
    const priority = document.querySelector("#priority").value;
    todoList.addTodo(title, description, dueDate, dueTime, priority);

    const todoListTitle = document.querySelector(".todoListTitle");
    todoListTitle.textContent = title;

    const todoListButton = document.querySelector("#todoListButton");
    todoListButton.textContent = "DETAILS";

    const todoListDueDate = document.querySelector(".todoListDueDate");
    todoListDueDate.textContent = dueDate;

    const todoListDueTime = document.querySelector(".todoListDueTime");
    todoListDueTime.textContent = dueTime;

    const todoListEdit = document.querySelector(".todoListEdit");
    todoListEdit.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';

    const todoListDelete = document.querySelector(".todoListDelete");
    todoListDelete.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
  });
}
