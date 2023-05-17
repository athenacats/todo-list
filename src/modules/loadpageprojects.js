import renderTodoList from "./rendertodolist";

export default function loadpage() {
  const reference = localStorage.getItem("tasks");

  const todolist = JSON.parse(reference);
  const filtering = todolist.filter((el) => el.project === this.id);

  const arr = filtering.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  renderTodoList(arr);
}
