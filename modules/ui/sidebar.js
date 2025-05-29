document.addEventListener("DOMContentLoaded", () => {
  const hideSidebarButton = document.getElementById("hidden-sidebar");

  hideSidebarButton.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-div");

    if (document.body.classList.contains("sidebar-div")) {
      hideSidebarButton.textContent = "Show Sidebar";
    } else {
      hideSidebarButton.textContent = "Hide Sidebar";
    }
  });
});
