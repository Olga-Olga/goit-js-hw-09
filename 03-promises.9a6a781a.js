var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var i=t("iQIUW");const r=document.querySelector(".form");function l(e,o){const n=Math.random()>.5;return new Promise(((t,i)=>{n?t({position:e,delay:o}):i({position:e,delay:o})}))}console.dir(r),r.addEventListener("submit",(function(e){e.preventDefault();let{delay:o,step:n,amount:t}=e.target.elements;o=Number(o.value),n=Number(n.value),t=Number(t.value),i.Notify.warning(`Get valuve: ${o}, ${n}, ${t}`);for(let e=0;e<t;e++)setTimeout((()=>{l(e+1,o+e*n).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}),o+e*n)}));
//# sourceMappingURL=03-promises.9a6a781a.js.map
