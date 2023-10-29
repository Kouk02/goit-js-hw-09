const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;//! Отримуємо посилання на кнопки та <body>
//!Змінна для збереження ідентифікатора
let a;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,
//! Запускаємо таймер який змінює колір фону кожну секунду
a=setInterval((function(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)}));
//# sourceMappingURL=01-color-switcher.df2fb5ec.js.map
