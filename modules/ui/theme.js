/**
 * Initializes the handles and theme toggle switch
 * Applies the dark or light mode
 * Updates the logo and icon depending on the theme.
 * Listens for user toggling and updates the theme dynamically
 */
export function themeToggleSwitch() {
  const toggleBtn = document.getElementById("theme-toggle");

  let darkmode = localStorage.getItem("darkmode");
  const themeSwitch = document.getElementById("theme-toggle");

  const logo = document.getElementById("logo");
  const mobileSvgIcon = document.getElementById("mobile-svg-icon");

  /**
   * Enables dark mode
   * Changes logo and icon to dark versions
   * stores the preference in localStorage
   */
  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");

    if (logo) logo.src = "./assets/logo-dark.svg";
    if (mobileSvgIcon) mobileSvgIcon.src = "./assets/logo-dark.svg";
  };

  /**
   * Disables the dark mode
   * Changes logo and iconto light versions
   */
  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);

    if (logo) logo.src = "./assets/logo-light (1).svg";
    if (mobileSvgIcon) mobileSvgIcon.src = "./assets/favicon (3).svg";
  };

  /**
   * This applies the saved theme on load
   */
  if (darkmode === "active") {
    enableDarkmode();
  } else {
    disableDarkMode();
  }

  /**
   * Listens for toggle switch click
   * Toggles between dark and light mode
   */
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkMode();
  });
}
