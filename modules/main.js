/**
 * Imports the needed modules for app functionality
 */
import { fetchTasks } from "./api/api.js";
import { renderTasksFromLocalStorage } from "./ui/render.js";
import { setupCreateTaskHandler } from "./tasks/addTask.js";
import { setupEditTaskHandlers } from "./tasks/editTask.js";
import { themeToggleSwitch } from "./ui/theme.js";
import { setupSidebarToggle } from "./ui/sidebar.js";

/**
 * Fetches the tasks from the API
 * Renders the tasks onto the board
 * Displays an error message if task loading fails
 */
async function startApp() {
  try {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks || tasks.length === 0) {
      tasks = await fetchTasks();
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

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

/**
 * Runs after the DOM has fully loaded in
 * Sets up the handlers for creating and editing tasks
 * Enables theme and sidebar toggle features
 * Adds event listeners to open/close modals
 */
document.addEventListener("DOMContentLoaded", () => {
  startApp();
  setupCreateTaskHandler();
  setupEditTaskHandlers();
  themeToggleSwitch();
  setupSidebarToggle();

  /**
   * Closes the task view modal when the close button is clicked
   */
  const closebtn = document.getElementById("task-close-btn");
  const modal = document.getElementById("task-modal");

  if (closebtn && modal) {
    closebtn.addEventListener("click", () => {
      modal.close();
    });
  }
  /**
   * Opens the add new task modal when the +Add New Task button is clicked
   */
  const addBtn = document.getElementById("add-btn");
  const addNewTaskModal = document.getElementById("add-new-task-modal");

  if (addBtn && addNewTaskModal) {
    addBtn.addEventListener("click", () => {
      addNewTaskModal.showModal();
    });
  }
  /**
   * Closes the add new tasl modal when the close button is clicked
   */
  const addCloseBtn = document.getElementById("add-close-btn");
  const addModal = document.getElementById("add-new-task-modal");

  if (addCloseBtn && addModal) {
    addCloseBtn.addEventListener("click", () => {
      addModal.close();
    });
  }
});
