/* eslint-disable no-plusplus */
export default function enableProjectSubmit() {
  const projectName = document.querySelector("#projectName");
  let allFilled = true;
  const submitButton = document.querySelector("#projectSubmit");
  if (allFilled) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "");
  }

  if (!projectName.value) {
    allFilled = false;
  }
}
