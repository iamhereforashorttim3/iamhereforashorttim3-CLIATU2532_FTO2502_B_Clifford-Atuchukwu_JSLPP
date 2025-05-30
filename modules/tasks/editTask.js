import { renderTasksFromLocalStorage } from "../ui/render.js";
/**
 * Sets up event listeners for saving and deleting tasks from the task modal
 * updates the localStorage and re-renders the task board accordingly
 */
export function setupEditTaskHandlers() {
  const saveBtn = document.getElementById("save-changes-btn");
  const deleteBtn = document.getElementById("delete-task-btn");
  const modal = document.getElementById("task-modal");
  /**
   * Retrieves the list of tasks from localStorage
   * @returns {Array} list of tasks
   */
  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  /**
   * Saves the updated list to localStorage
   * @param {Array} tasks - updated list of tasks
   */
  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  //Re-renders the task on the UI from localStorage
  function renderTasks() {
    renderTasksFromLocalStorage();
  }

  if (saveBtn && deleteBtn && modal) {
    //Re-renders the tasks on the UI from localStorage
    saveBtn.addEventListener("click", () => {
      const id = modal.dataset.taskId;
      const tasks = getTasks();
      const task = tasks.find((t) => t.id == id);

      if (task) {
        task.title = document.getElementById("task-title").value.trim();
        task.description = document
          .getElementById("task-description")
          .value.trim();
        task.status = document.getElementById("task-status").value;
        saveTasks(tasks);
        renderTasks();
        modal.close();
      }
    });
    //Handles deleting a task from the modal
    deleteBtn.addEventListener("click", () => {
      const id = modal.dataset.taskId;
      let tasks = getTasks();
      tasks = tasks.filter((t) => t.id != id);
      saveTasks(tasks);
      renderTasks();
      modal.close();
    });
  }
}
