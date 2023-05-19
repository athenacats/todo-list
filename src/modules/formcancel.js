export default function cancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".popup");
  document.getElementById("popupTitle").value = "";
  document.getElementById("popupDescription").value = "";
  document.getElementById("duedate").value = "";
  document.getElementById("duetime").value = "";
  document.getElementById("priority").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}

export function editCancelForm() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".editPopup");
  document.getElementById("editPopupTitle").value = "";
  document.getElementById("editPopupDescription").value = "";
  document.getElementById("editduedate").value = "";
  document.getElementById("editduetime").value = "";
  document.getElementById("editpriority").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}

export function closeDisplay() {
  const content = document.querySelector(".content");
  const popup = document.querySelector(".todoDisplay");
  document.querySelector(".todoDisplayTitle").value = "";
  document.querySelector(".todoDisplayPara").value = "";
  document.querySelector(".todoDisplayDate").value = "";
  document.querySelector(".todoDisplayTime").value = "";
  document.querySelector(".todoDisplayPriority").value = "";
  document.querySelector(".todoDisplayProject").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  popup.style.display = "none";
}
