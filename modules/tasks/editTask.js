import { renderTasksFromLocalStorage } from "../ui/render.js";

export function setupEditTaskHandlers() {
  const saveBtn = document.getElementById("save-changes-btn");
  const deleteBtn = document.getElementById("delete-task-btn");
  const modal = document.getElementById("task-modal");

  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    renderTasksFromLocalStorage();
  }

  if (saveBtn && deleteBtn && modal) {
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
