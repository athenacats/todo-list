/* eslint-disable no-plusplus */
export default function enableSubmit() {
  document.getElementById("submit").disabled = true;
  if (
    document.getElementById("popupTitle").value === "" ||
    document.getElementById("duedate").value === "" ||
    document.getElementById("duetime").value === "" ||
    document.getElementById("priority").value === ""
  ) {
    document.getElementById("submit").disabled = true;
  } else if (
    !document.getElementById("popupTitle").value === "" &&
    !document.getElementById("duedate").value === "" &&
    !document.getElementById("duetime").value === "" &&
    !document.getElementById("priority").value === ""
  ) {
    document.getElementById("submit").disabled = false;
  }
}

/* document.getElementById("submit").addEventListener("click", () => {
  console.log("You entered:", document.querySelector("#popupTitle").value);
}); */
