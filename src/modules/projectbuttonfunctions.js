import renderProject from "./renderproject";
import enableProjectSubmit from "./projectvalidation";
import { existingProjects, addProject } from "./localstorage";

export default function projectButtonFunctions() {
  enableProjectSubmit();

  function projectItems(projectTitle, id) {
    return { projectTitle, id };
  }
  const projects = [];

  const projectList = () => {
    const addNewProject = (projectTitle, id) => {
      const newProject = projectItems(projectTitle, id);

      projects.push(newProject);
      addProject(newProject);
    };
    return { addNewProject, projects };
  };

  const projectTitle = document.getElementById("projectName").value;
  console.log(projectTitle);
  const id = Date.now();
  console.log(id);
  // need code below so that the project is instanteneously available in dropdown of popup for todo creation
  const option = document.createElement("option");
  option.setAttribute("value", id);

  option.textContent = projectTitle;
  console.log(option.textContent);
  document.getElementById("project").appendChild(option);
  // till here
  const finalProjectList = projectList();
  finalProjectList.addNewProject(projectTitle, id);

  if (projectTitle === "") {
    // require this so that blank todos are not attached on subsequent submits
    // do nothing
  } else {
    renderProject(existingProjects);
  }
}
