import { addtask } from "../storage/storage.js";
import { renderTasksFromLocalStorage } from "../ui/render.js";

export function setupCreateTaskHandler() {
  const form = document.getElementById("add-new-task-form");
  const titleInput = document.getElementById("title-enter");
  const descInput = document.getElementById("entering-description");
  const statusSelect = document.getElementById("add-task-status");
  const modal = document.getElementById("add-new-task-modal");

  const createTaskBtn = document.getElementById("create-task");
  createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: titleInput.value.trim(),
      description: descInput.value.trim(),
      status: statusSelect.value,
    };

    if (!newTask.title) {
      alert("Please Enter a title");
      return;
    }

    addtask(newTask);
    renderTasksFromLocalStorage();
    modal.close();
    form.reset();
  });
}
