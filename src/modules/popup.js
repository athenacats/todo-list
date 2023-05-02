export default function taskPopUp() {
  const container = document.querySelector(".container");
  container.style.filter = "blur(20px)";
  container.style.webkitFilter = "blur(20px)";

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  container.appendChild(popup);

  const popupForm = document.createElement("form");
  popup.setAttribute("id", "popupForm");
  popup.appendChild(popupForm);

  const popupTitle = document.createElement("input");
  popupTitle.setAttribute("type", "text");
  popupTitle.setAttribute("id", "popupTitle");
  popupTitle.setAttribute("placeholder", "Title");
  popupTitle.setAttribute("required");
  popupForm.appendChild(popupTitle);

  const popupContent = document.createElement("textarea");
}
