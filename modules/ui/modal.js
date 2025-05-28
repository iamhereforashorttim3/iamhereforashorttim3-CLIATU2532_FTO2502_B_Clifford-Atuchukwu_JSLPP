export function handleTaskClick(task) {
  const titleElement = document.getElementById("task-title");
  const descriptionElement = document.getElementById("task-description");
  const statusElement = document.getElementById("task-status");

  const title = e.currentTarget.dataset.taskTitle;
  const description = e.currentTarget.dataset.TaskDescription;
  const status = e.currentTarget.dataset.taskStatus;

  titleElement.value = title;
  descriptionElement.value = description;
  statusElement.value = status;

  document.getElementById("task-modal").showModal();
}
