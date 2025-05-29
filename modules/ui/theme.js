export function themeToggleSwitch() {
  const toggleBtn = document.getElementById("theme-toggle");

  let darkmode = localStorage.getItem("darkmode");
  const themeSwitch = document.getElementById("theme-toggle");

  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    if (logo) logo.src = "./assets/logo-dark.svg";
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
    if (logo) logo.src = "./assets/logo-light (1).svg";
  };

  if (darkmode === "active") {
    enableDarkmode();
  } else {
    disableDarkMode();
  }

  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkMode();
  });
}
