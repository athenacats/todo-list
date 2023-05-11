/* eslint-disable no-plusplus */
export default function enableProjectSubmit() {
  const projectPopupForm = document.querySelector("#projectPopupForm");
  const requiredFields = projectPopupForm.querySelectorAll("[required]");
  let allFilled = true;
  const submitButton = document.querySelector("#projectSubmit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }
  requiredFields.forEach((field) => {
    if (!field.value) {
      allFilled = false;
    }
  });
}
