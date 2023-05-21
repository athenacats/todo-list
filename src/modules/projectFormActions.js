import projectButtonFunctions from "./projectbuttonfunctions";

export default function projectFormActions() {
  projectButtonFunctions();
  const yesmobileMode = localStorage.getItem("mobile");
  if (yesmobileMode === "enabled") {
    const popup = document.querySelector(".sidePanel");
    const content = document.querySelector(".mainPanel");
    popup.style.display = "none";
    content.style.filter = "none";
    content.style.webkitFilter = "none";
    localStorage.setItem("mobile", null);
  }
  const content = document.querySelector(".content");
  const projectPopup = document.querySelector(".projectPopup");
  document.getElementById("projectName").value = "";
  content.style.filter = "none";
  content.style.webkitFilter = "none";
  projectPopup.style.display = "none";
}
