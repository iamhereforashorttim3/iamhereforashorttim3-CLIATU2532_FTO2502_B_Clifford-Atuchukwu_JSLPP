import { handleTaskClick } from "./modal.js";
export function renderTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const removeElements = document.querySelectorAll(".tasks-container");

  removeElements.forEach((container) => {
    container.innerHTML = "";
  });

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    taskDiv.dataset.taskTitle = task.title;
    taskDiv.dataset.taskDescription = task.description;
    taskDiv.dataset.taskStatus = task.status;

    taskDiv.addEventListener("click", handleTaskClick);

    taskDiv.textContent = task.title;

    const column = document.querySelector(
      `.column-div[data-status="${task.status}"]`
    );
    const container = column?.querySelector(".tasks-container");

    if (container) {
      container.appendChild(taskDiv);
    }
  });
}
