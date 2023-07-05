import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.querySelector('#datetime-picker')
const btnEl = document.querySelector('[data-start]')
// const dayEl = document.querySelector('[data-days]')
// timesEl = document.querySelector(".timer")
// console.dir(timesEl.children[0].children[0].textContent);
// console.dir(timesEl.children[1].children[0].textContent);
// console.dir(timesEl.children[2].children[0].textContent);
// console.dir(timesEl.children[3].children[0].textContent);

const dayElAll = document.querySelectorAll('.timer .value')
dayElAll.forEach(el => console.log(el.textContent))

btnEl.disabled = true

let valueInputEl;
let dateArr
console.log(123);

flatpickr(inputEl, {
    enableTime: true,
    // dateFormat: "Y-m-d H:i",
    time_24hr: true,
    // altInput: true,
    onValueUpdate: function (selectedDates, dateStr, instance) {
    valueInputEl = inputEl.value
    },
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
        //console.log("selectedDates[0]", selectedDates[0], "dateStr:", dateStr, instance);
        if ((new Date()) > selectedDates[0]) {
             Notify.failure('Please choose a date in the future');
           // console.log(alert("Please choose a date in the future"));
            btnEl.classList.add('disable')
            btnEl.disabled = true
            }
        else {
            btnEl.disabled = false
            Notify.success('Press the Start button to invoke timer!');
            console.log("miliseconds", selectedDates[0].getTime());
            console.log("dateStr:", dateStr);
       
            dateArr = convertMs(selectedDates[0] - Date.now())
            console.log("convertMs(selectedDates[0] після конвертації", dateArr);

        }

    },

});


btnEl.addEventListener('click', handlerClickStart)

function handlerClickStart() { 
    setInterval(runTimer, 1000) // dateArr = convertMs(selectedDates[0] - Date.now())
    function runTimer() {
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
        
            for (let i = 0; i < dayElAll.length; i++) {
            dayElAll[i].textContent = Object.values(dateArr)[i]
        }
    }

}



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




// Задача: Создать программу, которая будет выводить случайные числа каждую секунду
// с использованием функции setInterval.
//     Через 5 секунд программа должна остановиться.
//const dayEl = document.querySelector('[data-days]')
//const dayEl = document.querySelector('[data-days]')
// console.dir(dayEl.textContent)
// function numGenerate() {
//     const num = Math.floor(Math.random() * 31) + 1;
//     console.log("num:", num);
//     dayEl.textContent = num
// }
// const y = setInterval(numGenerate, 1000)
// setTimeout((() => { clearInterval(y) }), 5000)
// console.log("Finish")



