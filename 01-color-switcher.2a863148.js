const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;//! Отримуємо посилання на кнопки та <body>
//!Змінна для збереження ідентифікатора
let a;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,
//! Запускаємо таймер який змінює колір фону кожну секунду
a=setInterval((function(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.2a863148.js.map
