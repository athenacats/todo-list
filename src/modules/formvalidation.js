/* eslint-disable no-plusplus */
export default function enableSubmit() {
  const popupForm = document.querySelector("#popupForm");
  const requiredFields = popupForm.querySelectorAll("[required]");
  let allFilled = true;
  requiredFields.forEach((field) => {
    if (!field.value) {
      allFilled = false;
    }
  });
  const submitButton = document.querySelector("#submit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
}

/* document.getElementById("submit").addEventListener("click", () => {
  console.log("You entered:", document.querySelector("#popupTitle").value);
}); */
