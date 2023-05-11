import renderProject from "./renderproject";
import enableProjectSubmit from "./projectvalidation";

export default function projectButtonFunctions() {
  enableProjectSubmit();
  const project = document.getElementById("projectName").value;

  if (project === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    renderProject();
  }
}
