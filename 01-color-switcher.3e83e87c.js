!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.body;//! Отримуємо посилання на кнопки та <body>
t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)}))}();
//# sourceMappingURL=01-color-switcher.3e83e87c.js.map
