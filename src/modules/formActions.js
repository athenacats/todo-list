import buttonFunctions from "./buttonfunctions";

export default function formActions() {
  const popupForm = document.querySelector("#popupForm"); // call eventlistener to form so that preventdefault works
  popupForm.addEventListener(
    "submit", // click method only validated first item in form, not all items
    (event) => {
      event.preventDefault();
      buttonFunctions();
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
