import renderProject from "./renderproject";

export default function projectButtonFunctions() {
  const project = document.getElementById("projectName").value;

  if (project === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    renderProject();
  }
}
