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
  } else {
    disableDarkMode()
  }

  toggleButton.addEventListener("click", () => {
    // console.log("document.body.scrollHeight", document.body.scrollHeight, document.body.offsetTop)
    theme = localStorage.getItem("theme")
    if (theme === "dark") {
      disableDarkMode()
    } else {
      enableDarkTheme()
    }
  })

  window.addEventListener("scroll", e => {
    if (window.scrollY > 55) {
      document.querySelector("header").style.opacity = 0.85
    } else {
      document.querySelector("header").style.opacity = 1
    }
  })

  const date = new Date()
  const year = date.getFullYear()
  console.log("year", year)
  document.querySelector("#footer-date").textContent = year
})()
