import flatpickr from 'flatpickr';
//! Імпорт додаткового стилю
import 'flatpickr/dist/themes/dark.css';
//! Імпорт додаткового пакету "Notiflix"
import Notiflix from 'notiflix';

// Отримання елементів сторінки за їх ідентифікаторами
const dataInput = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

// Елементи які відображатимуть значення таймера
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

// Змінна для збереження вибраної дати та часу
let userTime = null;

//! Додаткові налаштування для flatpickr
const options = {
  enableTime: true,// Можливість вибору часу
  time_24hr: true,// Використання 24-годинного формату часу
  defaultDate: new Date(),// За замовчуванням встановлюється поточна дата та час
  minuteIncrement: 1, // Крок вибору хвилин
  onClose(selectedDates) {
    userTime = selectedDates[0]; // Зберігається вибрана користувачем дата та час
    console.log(userTime);
    disableStartButton(); // Викликається функція для відключення кнопки "Start"
  },
};
// Ініціалізація flatpickr з заданими налаштуваннями
flatpickr(dataInput, options);

// Функція для перетворення мілісекунд в об'єкт зі значеннями днів, годин, хвилин та секунд
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

// Функція для додавання ведучого нуля до числа
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Функція для відображення текстового вмісту на основі значень днів, годин, хвилин та секунд
function renderTimeContent(days, hours, minutes, seconds) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

// Вимкнення кнопки "Start" в таймері за замовчуванням
startButton.disabled = true;

// Функція для визначення доступності кнопки "Start" в залежності від вибраної дати та часу
function disableStartButton() {
  if (Date.now() > userTime) {
    startButton.disabled = true;
    // Додатковий сповіщення "failure" за допомогою Notiflix
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startButton.disabled = false;
    // Додатковий сповіщення "success" за допомогою Notiflix
    Notiflix.Notify.success('Congratulations! Click "Start" to begin');
  }
}
// Додавання слухача подій на кнопку "Start"
startButton.addEventListener('click', onCountdownTimer);

// Управління таймером з вказаної дати до поточного моменту
function onCountdownTimer() {
  // Вимкнення кнопки "Start" в таймері
  startButton.disabled = true;
  // Вимкнення поля вводу дати та часу
  dataInput.disabled = true;

  // Приховання кнопки "Start"
  startButton.classList.add('hidden');

 // Додаткове сповіщення "warning" за допомогою Notiflix
  Notiflix.Notify.warning('Press the "Reset" Button to reset the timer');

  // Додавання кнопки "Скинути"
  dataInput.insertAdjacentHTML(
    'afterend',
    '<button type="button" data-reset>Reset</button>'
  );
  // Пошук кнопки "Скинути" за допомогою querySelector
  let resetButton = document.querySelector('[data-reset]');

  // Додавання події на кнопку "Скинути"
  resetButton.addEventListener('click', onResetTimer);

  function onResetTimer() {
    // Включення кнопки "Start" в таймері
    startButton.disabled = false;
    // Включення поля вводу дати та часу
    dataInput.disabled = false;
    clearInterval(tymeId);
    renderTimeContent(0, 0, 0, 0);
    // Додаткове сповіщення "success" за допомогою
    Notiflix.Notify.success('Timer Reset Successful');
    // Видалення кнопки "Скинути" і відображення кнопки "Start"
    resetButton.remove();
    startButton.classList.remove('hidden');
    // Видалення слухача подій з кнопки "Скинути"
    resetButton.removeEventListener('click', onResetTimer);
  }

  // Встановлення інтервалу для таймера
  const tymeId = setInterval(() => {
    // Отримання різниці між поточним часом і вибраним часом в мілісекундах
    const currentTime = Date.now();
    const differenceTime = userTime - currentTime;

    console.log(convertMs(differenceTime));
    // Розкладання результату різниці часу за допомогою функції convertMs
    const { days, hours, minutes, seconds } = convertMs(differenceTime);
    // Відображення текстового вмісту часу на основі різниці
    renderTimeContent(days, hours, minutes, seconds);

   // Обробка завершення таймера, скидання, включення кнопки "Start" та оновлення кнопки.
    if (differenceTime <= 0) {
      // Включення кнопки "Start" в таймері.
      startButton.disabled = false;
      // Включення поля вводу дати та часу в таймері.
      dataInput.disabled = false;
      clearInterval(tymeId);
      renderTimeContent(0, 0, 0, 0);
      // Видалення кнопки "Скинути" і відображення кнопки "Start".
      resetButton.remove();
      startButton.classList.remove('hidden');
    }
  }, 1000);
}