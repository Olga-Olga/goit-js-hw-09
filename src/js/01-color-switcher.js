
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startEl = document.querySelector('[data-start]')
const stopEl = document.querySelector('[data-stop]')
const bodyEl = document.body
const currentColur = getRandomHexColor();

  
console.dir(startEl);
console.dir(stopEl);
console.dir(bodyEl);
console.log(getRandomHexColor());
let inter

startEl.addEventListener("click", setColorHandler)
function setColorHandler(event) {
  inter = setInterval(callback, 1000)
  function callback() {
    event.target.disabled = true
    stopEl.disabled = false
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
}
  

stopEl.addEventListener("click", resetColorHandler)
function resetColorHandler(event) {
  event.target.disabled = true
  startEl.disabled = false
  clearInterval(inter);
  console.log(123);
}

