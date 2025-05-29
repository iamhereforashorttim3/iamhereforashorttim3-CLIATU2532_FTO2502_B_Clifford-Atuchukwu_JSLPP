export function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

export function addtask(newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
