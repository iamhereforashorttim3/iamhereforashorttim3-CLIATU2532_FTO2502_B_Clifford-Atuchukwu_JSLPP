import { handleTaskClick } from "./modal.js";
export function renderTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const removeElements = document.querySelectorAll(".tasks-container");

  removeElements.forEach((container) => {
    container.innerHTML = "";
  });

  function updateTaskCounts() {
    const statuses = ["todo", "doing", "done"];

    statuses.forEach((status) => {
      const container = document.querySelector(
        `.column-div[data-status="${status}"] .tasks-container`
      );
      const count = container ? container.children.length : 0;

      const header = document.getElementById(`${status}Text`);
      if (header) {
        const capitalizedStatus = status.toUpperCase();
        header.textContent = `${capitalizedStatus} (${count})`;
      }
    });
  }

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    taskDiv.dataset.taskTitle = task.title;
    taskDiv.dataset.taskDescription = task.description;
    taskDiv.dataset.taskStatus = task.status;

    taskDiv.addEventListener("click", handleTaskClick);

    taskDiv.textContent = task.title;
    taskDiv.dataset.taskId = task.id;

    const column = document.querySelector(
      `.column-div[data-status="${task.status}"]`
    );
    const container = column?.querySelector(".tasks-container");

    if (container) {
      container.appendChild(taskDiv);
    }
  });

  updateTaskCounts();
}
