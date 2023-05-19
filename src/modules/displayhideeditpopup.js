export default function displayHideEditPopup() {
  const popup = document.querySelector(".editPopup");
  popup.style.display = "flex";
  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";
}
