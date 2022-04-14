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
    console.log(
      "document.body.scrollTop",
      document.body.scrollTop,
      document.body.offsetTop,
      document.body.scrollHeight
    )
    if (document.body.scrollTop > 0) {
      document.body.classList.add("scrolled")
    } else {
      document.body.classList.remove("scrolled")
    }
  })
})()
