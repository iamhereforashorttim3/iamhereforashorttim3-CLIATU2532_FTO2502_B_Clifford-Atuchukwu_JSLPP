/**
 * It fetches the tasks from the API
 */
export async function fetchTasks() {
  try {
    const response = await fetch("https://jsl-kanban-api.vercel.app");
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}
