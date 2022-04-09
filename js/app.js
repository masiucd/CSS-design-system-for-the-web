;(() => {
  const toggleButton = document.querySelector(".toggle-button")
  const theme = localStorage.getItem("theme")
  const checkTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("theme", "dark")
      toggleButton.textContent = "🌙"
    } else {
      toggleButton.textContent = "☀️"
    }
  }
  // Initial run

  checkTheme()
  toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
    let theme = "light"
    if (document.documentElement.classList.contains("dark")) {
      theme = "dark"
      toggleButton.textContent = "🌙"
    } else {
      toggleButton.textContent = "☀️"
    }
    localStorage.setItem("theme", theme)
  })
})()
