import { Notify } from 'notiflix/build/notiflix-notify-aio';

let delay
let step
let amount

const submitEl = document.querySelector(".form")
console.dir(submitEl);
submitEl.addEventListener("submit", callback)

function callback(event) {
  event.preventDefault()
  // const { delay, step, amount } = event.target.elements
  delay = Number(event.target.elements.delay.value)
  step = Number(event.target.elements.step.value)
  amount = Number(event.target.elements.amount.value);
  Notify.warning(`Get valuve: ${delay}, ${step}, ${amount}`)
  setTimeout(() => {

  for (let i = 0; i < amount; i++) {    
      createPromise(i, step)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
  }
    
  }, delay)
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;  
  const myPromise = new Promise((res, rej) => {
    if (shouldResolve) {
      res({ position, delay });
    }
    else {
      rej({ position, delay })
    }
  });
  
  return myPromise
}
