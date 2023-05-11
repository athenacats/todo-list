import projectButtonFunctions from "./projectbuttonfunctions";

export default function projectFormActions() {
  const projectPopupForm = document.querySelector("#projectPopupForm"); // call eventlistener to form so that preventdefault works
  projectPopupForm.addEventListener(
    "click", // click method only validated first item in form, not all items
    (event) => {
      event.stopImmediatePropagation();
      projectButtonFunctions();
      const content = document.querySelector(".content");
      const projectPopup = document.querySelector(".projectPopup");
      document.getElementById("projectName").value = "";
      content.style.filter = "none";
      content.style.webkitFilter = "none";
      projectPopup.style.display = "none";
    },
    true
  );
}
