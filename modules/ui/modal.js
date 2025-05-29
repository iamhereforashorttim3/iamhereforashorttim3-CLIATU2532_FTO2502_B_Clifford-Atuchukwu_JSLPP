export function handleTaskClick(e) {
  const titleElement = document.getElementById("task-title");
  const descriptionElement = document.getElementById("task-description");
  const statusElement = document.getElementById("task-status");
  const modal = document.getElementById("task-modal");

  const title = e.currentTarget.dataset.taskTitle;
  const description = e.currentTarget.dataset.taskDescription;
  const status = e.currentTarget.dataset.taskStatus;
  const id = e.currentTarget.dataset.taskId;

  titleElement.value = title;
  descriptionElement.value = description;
  statusElement.value = status;

  modal.dataset.taskId = id;

  document.getElementById("task-modal").showModal();
}
