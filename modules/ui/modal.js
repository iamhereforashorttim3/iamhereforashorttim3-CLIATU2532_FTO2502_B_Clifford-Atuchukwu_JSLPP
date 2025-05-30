/**
 * Opens the task details modal and places the clicked task's data inside
 * @param {MouseEvent} e - The click event from the task element
 */
export function handleTaskClick(e) {
  const titleElement = document.getElementById("task-title");
  const descriptionElement = document.getElementById("task-description");
  const statusElement = document.getElementById("task-status");
  const modal = document.getElementById("task-modal");
  //Retrieves the task data from the clicked element's dataset
  const title = e.currentTarget.dataset.taskTitle;
  const description = e.currentTarget.dataset.taskDescription;
  const status = e.currentTarget.dataset.taskStatus;
  const id = e.currentTarget.dataset.taskId;
  //Populates modal input fields with task data
  titleElement.value = title;
  descriptionElement.value = description;
  statusElement.value = status;

  modal.dataset.taskId = id;

  //Displays the modal
  document.getElementById("task-modal").showModal();
}
