export function setupSidebarToggle() {
  const sidebar = document.getElementById("side-bar-div");
  const toggleBtn = document.getElementById("toggle-sidebar-btn");

  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    const icon = document.getElementById("sidebar-icon");
    if (sidebar.classList.contains("collapsed")) {
      icon.src = "./assets/icon-show-sidebar.svg";
    } else {
      icon.src = "./assets/icon-hide-sidebar.svg";
    }
  });
}
