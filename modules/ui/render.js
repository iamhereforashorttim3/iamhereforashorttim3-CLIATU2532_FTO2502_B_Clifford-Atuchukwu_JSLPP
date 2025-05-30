import { handleTaskClick } from "./modal.js";
/**
 * Renders all the tasks stored in localStorage and places them in their respected columns
 * Creates and appends new task elements for each stored task
 * Updates column headers with the task count
 * Displays or hides the "No tasks available" message based on task count
 */
export function renderTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //Removes all current task elements to avoid duplication
  const removeElements = document.querySelectorAll(".tasks-container");
  removeElements.forEach((container) => {
    container.innerHTML = "";
  });

  /**
   * Updates the count next to each column header
   */
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
  let renderedTaskCount = 0;
  //loops through tasks and creates a visual element for each
  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    //Sets data attributes used for modal details
    taskDiv.dataset.taskTitle = task.title;
    taskDiv.dataset.taskDescription = task.description;
    taskDiv.dataset.taskStatus = task.status;
    taskDiv.textContent = task.title;

    // Adds click event to open modal with task info
    taskDiv.addEventListener("click", handleTaskClick);
    //Displays task title
    taskDiv.dataset.taskId = task.id;
    // Append the task to the correct column container
    const column = document.querySelector(
      `.column-div[data-status="${task.status}"]`
    );
    const container = column?.querySelector(".tasks-container");

    if (container) {
      container.appendChild(taskDiv);
      renderedTaskCount++;
    }
  });

  updateTaskCounts();
  // Show or hide the "No tasks" message based on rendered task count
  const noTasksMessage = document.getElementById("no-tasks-message");
  if (noTasksMessage) {
    noTasksMessage.style.display = renderedTaskCount === 0 ? "block" : "none";
  }
}
