
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");


const btnEl = document.querySelector("[data-start]");
btnEl.disabled = true;


const options = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future")
      btnEl.disabled = true
    } else {
      btnEl.disabled = false
    }
  },
});


btnEl.addEventListener('click', timer)

function timer() {
  const selectedDate = options.selectedDates[0]
  const interval = setInterval(() => {
    const diferenceTime = selectedDate - new Date()
    if (diferenceTime <= 0) {
      clearInterval(interval)
      return
    }


    const { days, hours, minutes, seconds } = convertMs(diferenceTime)


    daysElement.textContent = pad(days);
    hoursElement.textContent = pad(hours);
    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);


    daysElement.textContent = pad(days);
    hoursElement.textContent = pad(hours);
    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);
  }, 1000)


}
function pad(value) {
  return value.toString().padStart(2, "0");
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
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