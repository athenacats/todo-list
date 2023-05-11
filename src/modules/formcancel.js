export default function cancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".popup");
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}
