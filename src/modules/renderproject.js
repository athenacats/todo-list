/* eslint-disable no-plusplus */
// import todoListDeleteButton from "./todolistdelete";
import loadpage from "./loadpageprojects";

export default function renderProject(existingProjects) {
  const variableProjects = document.querySelector("#variableProjects");
  variableProjects.innerHTML = "";

  for (let i = 0; i < existingProjects.length; i++) {
    const item = existingProjects[i];

    const newProject = document.createElement("button");
    newProject.setAttribute("id", item.id);
    newProject.setAttribute("type", "button");
    newProject.addEventListener("click", loadpage);
    const text = document.createElement("h3");
    text.textContent = item.projectTitle;
    newProject.appendChild(text);
    variableProjects.appendChild(newProject);

    const projectDelete = document.createElement("svg");
    projectDelete.classList.add("projectDelete");
    projectDelete.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    projectDelete.addEventListener("click", (event) => {
      event.preventDefault();
      const identity = event.currentTarget.parentNode.getAttribute("id");
      console.log(identity);
      const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];

      const newstoredProjects = storedProjects.filter(
        // eslint-disable-next-line eqeqeq
        (el) => el.id != identity
      );
      localStorage.setItem("projects", JSON.stringify(newstoredProjects));
      window.location.reload(); // opted for this so that the dropdown menu in popup.js is also updated
    });
    newProject.appendChild(projectDelete);
  }
}
