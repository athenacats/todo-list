export default function createProject() {
  const projectPopup = document.querySelector(".projectPopup");
  projectPopup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}
