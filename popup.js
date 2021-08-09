const the_button = document.querySelector(".js-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close")

document.addEventListener("DOMContentLoaded",() => {
  the_button.addEventListener("click", handleClick)
})

function handleClick(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
  })
}