export default function taskPopUp() {
  const container = document.querySelector(".container");

  const content = document.querySelector(".content");
  content.style.filter = "blur(20px)";
  content.style.webkitFilter = "blur(20px)";

  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.filter = "none";
  container.appendChild(popup);

  const popupForm = document.createElement("form");
  popup.setAttribute("id", "popupForm");
  popup.setAttribute("name", "popupForm");
  popup.appendChild(popupForm);

  const popupTitle = document.createElement("input");
  popupTitle.setAttribute("type", "text");
  popupTitle.setAttribute("id", "popupTitle");
  popupTitle.setAttribute("placeholder", "Title");
  popupTitle.setAttribute("name", "Title");
  popupForm.appendChild(popupTitle);

  const popupDescription = document.createElement("input");
  popupDescription.setAttribute("type", "text");
  popupDescription.setAttribute("id", "popupDescription");
  popupDescription.setAttribute("placeholder", "Description");
  popupForm.appendChild(popupDescription);
}
