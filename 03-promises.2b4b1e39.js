function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(document.querySelector('input[name="delay"]').value),o=parseInt(document.querySelector('input[name="step"]').value),i=parseInt(document.querySelector('input[name="amount"]').value);if(isNaN(n)||isNaN(o)||isNaN(i)||n<0||o<=0||i<=0)e(r).Notify.Failure("Please enter valid values");else for(let t=1;t<=i;t++){l(t,n+(t-1)*o).then((({position:t,delay:n})=>{e(r).Notify.Success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.Failure(`❌ Rejected promise ${t} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.2b4b1e39.js.map
