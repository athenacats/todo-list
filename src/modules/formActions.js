import buttonFunctions from "./buttonfunctions";

export default function formActions() {
  const popupForm = document.querySelector("#popupForm"); // call eventlistener to form so that preventdefault works
  popupForm.addEventListener(
    "submit", // click method only validated first item in form, not all items
    (event) => {
      event.preventDefault();
      buttonFunctions();
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
    },
    true
  );
}
