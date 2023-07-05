function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

let delay
let step
let amount

const submitEl = document.querySelector(".form")
console.dir(submitEl);
submitEl.addEventListener("submit", callback)

function callback(event) {
  event.preventDefault()
  delay = Number(event.target.elements.delay.value)
  step = Number(event.target.elements.step.value)
  amount = Number(event.target.elements.amount.value);
  console.log(delay, step, amount);
  //Напиши скрипт, який на момент сабміту форми викликає функцію
  //createPromise(position, delay) стільки разів,
  //скільки ввели в поле amount.
  //Під час кожного виклику передай їй номер промісу(position),
  //що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step). 
  
for (let i = 0; i < amount; i++) {
  setTimeout(() => { 
    createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }, delay)
}
}
