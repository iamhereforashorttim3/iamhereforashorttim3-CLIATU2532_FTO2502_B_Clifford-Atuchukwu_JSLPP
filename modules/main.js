/**
 * Function imports tasks from the API
 */
import { fetchTasks } from "./api/api.js";
import { renderTasksFromLocalStorage } from "./ui/render.js";

const loading = document.createElement("div");
loading.id = "loading";
loading.textContent = "Tasks loading...";
document.body.appendChild(loading);

async function startApp() {
  try {
    const tasks = await fetchTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasksFromLocalStorage();

    console.log("Tasks loaded:", tasks);
    //This removes the loading message if the tasks are loaded
    const loadingElement = document.getElementById("loading");
    if (loadingElement) loadingElement.remove();
  } catch (error) {
    /**
     * In case of error, the loading is removed and an error message will show
     */
    console.log("Failed to load tasks:", error);
    const loadingElement = document.getElementById("loading");
    if (loadingElement) loadingElement.remove();
    document.body.innerHTML =
      '<p style="color:red;">Failed to load tasks. Please try again later.</p>';
  }
}

startApp();
