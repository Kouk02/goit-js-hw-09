function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; //рандомний колір
}

 
const startButton = document.querySelector('[data-start]');//! Отримуємо посилання на кнопки та <body>
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

//!Змінна для збереження ідентифікатора
let intervalId; 


startButton.addEventListener('click', function() {//!кнопка "Start"
  
  startButton.disabled = true;// вкл "Start"
  stopButton.disabled = false;// викл "Stop"

  //! Запускаємо таймер який змінює колір фону кожну секунду
  intervalId = setInterval(function() {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});


