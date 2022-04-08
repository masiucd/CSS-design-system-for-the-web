const getFromStorage = key => localStorage.getItem(key)
const storeTheme = (key, value) => {
  localStorage.setItem(key, value)
}
;(() => {
  const toggleButton = document.querySelector(".toggle-button")
  if (!theme) {
    storeTheme("theme", "light")
  }
  const theme = localStorage.getItem("theme")

  toggleButton.addEventListener("click", () => {
    if (theme === "light") {
      localStorage.removeItem("theme")
      storeTheme("theme", "dark")
      document.body.classList.toggle("dark")
    } else {
      localStorage.removeItem("theme")
      storeTheme("theme", "light")
      document.body.classList.toggle("light")
    }

    console.log({theme})
    // toggle the class of the body
  })
})()
