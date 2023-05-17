import renderTodoList from "./rendertodolist";

export default function loadpage() {
  const todolist = JSON.parse(localStorage.getItem("tasks")) || [];
  const filtering = todolist.filter((el) => el.project === this.id);

  const arr = filtering.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  renderTodoList(arr);
}
