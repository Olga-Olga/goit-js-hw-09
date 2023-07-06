import { Notify } from 'notiflix/build/notiflix-notify-aio';

// let delay
// let step
// let amount

const submitEl = document.querySelector(".form")
console.dir(submitEl);
submitEl.addEventListener("submit", callback)

function callback(event) {
  event.preventDefault()
  let { delay, step, amount } = event.target.elements
  delay = Number(delay.value)
  step = Number(step.value)
  amount = Number(amount.value);
  Notify.warning(`Get valuve: ${delay}, ${step}, ${amount}`)

  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createPromise(i + 1, delay + i * step)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
    },
      (delay + i * step))
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;  
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
