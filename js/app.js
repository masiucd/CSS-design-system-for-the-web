;(() => {
  const toggleButton = document.querySelector(".toggle-button")
  let theme = localStorage.getItem("theme")

  const enableDarkTheme = () => {
    document.body.classList.add("dark")
    toggleButton.textContent = "🌙"
    localStorage.setItem("theme", "dark")
  }
  const disableDarkMode = () => {
    document.body.classList.remove("dark")
    toggleButton.textContent = "🌞"
    localStorage.setItem("theme", "light")
  }

  if (theme === "dark") {
    enableDarkTheme()
  }

  toggleButton.addEventListener("click", () => {
    theme = localStorage.getItem("theme")
    if (theme === "dark") {
      disableDarkMode()
    } else {
      enableDarkTheme()
    }
  })
})()
