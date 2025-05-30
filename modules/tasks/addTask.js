import { addtask } from "../storage/storage.js";
import { renderTasksFromLocalStorage } from "../ui/render.js";
/**
 * Sets up event listener for "Create Task" button
 * Handles the task creation, validation, saving to storage, rendering and modal closing
 */
export function setupCreateTaskHandler() {
  const form = document.getElementById("add-new-task-form");
  const titleInput = document.getElementById("title-enter");
  const descInput = document.getElementById("entering-description");
  const statusSelect = document.getElementById("add-task-status");
  const modal = document.getElementById("add-new-task-modal");

  const createTaskBtn = document.getElementById("create-task");
  createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //Creates a new task object with input values
    const newTask = {
      id: Date.now(),
      title: titleInput.value.trim(),
      description: descInput.value.trim(),
      status: statusSelect.value,
    };

    //Validates that title is not empty
    if (!newTask.title) {
      alert("Please Enter a title");
      return;
    }
    //Saves the task, re-renders the task list and resets the modal
    addtask(newTask);
    renderTasksFromLocalStorage();
    modal.close();
    form.reset();
  });
}
