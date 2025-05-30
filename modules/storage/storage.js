/**
 * Saves the given array of tasks to localStorage
 * @param {Array} tasks - The list of tasks to be saved
 */
export function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
/**
 * Loads and returns the array of tasks from localStorage
 * @returns {Array} The list of saved tasks, or an empty array if none exist
 */
export function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}
/**
 * Adds a new task to the existing list in localStorage
 * @param {object} newTask - The new task object to be added
 */
export function addtask(newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
