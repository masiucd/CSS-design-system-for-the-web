const toggleButton = document.querySelector(".toggle-button")

toggleButton.addEventListener("click", () => {
  // toggle the class of the body
  document.body.classList.toggle("dark")
})
