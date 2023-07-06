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

    const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promise = createPromise(position, delay);
    promises.push(promise);
  }

  let counter = 0;

  const intervalID = setInterval(() => {
    if (counter >= promises.length) {
      clearInterval(intervalID);
      return;
    }

    const promise = promises[counter];
    promise
      .then(({ position, delay }) => {
        console.log(`✅ Промис ${position} выполнен через ${delay} мс`);
        Notify.success(`✅ Промис ${position} выполнен через ${delay} мс`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Промис ${position} отклонен через ${delay} мс`);
        Notify.failure(`❌ Промис ${position} отклонен через ${delay} мс`);
      });

    counter++;
  }, step);
}

  // const setTimeoutID = setTimeout(() => {
//     setInterval (() => {
//     for (let i = 0; i < amount; i++) {
//       createPromise(i, step)
//         .then(({ position, delay }) => {
//           console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//           Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//           console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//           Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//         });
//     }
//   // clearTimeout(setTimeoutID)
//   //   }, step) 
  
//   }, delay)
// }

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
