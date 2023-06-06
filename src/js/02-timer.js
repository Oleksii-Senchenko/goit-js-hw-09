// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('input#datetime-picker')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    //выводит выбраную дату
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };


  flatpickr(inputEl, options)