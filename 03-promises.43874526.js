!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var i=t("h6c0i"),c=document.querySelector(".form");console.dir(c),c.addEventListener("submit",(function(e){var o=function(e){setTimeout((function(){var o,n,r;(o=e+1,n=t+e*c,r=Math.random()>.5,new Promise((function(e,t){r?e({position:o,delay:n}):t({position:o,delay:n})}))).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}),t+e*c)};e.preventDefault();var n=e.target.elements,t=n.delay,c=n.step,r=n.amount;t=Number(t.value),c=Number(c.value),r=Number(r.value),i.Notify.warning("Get valuve: ".concat(t,", ").concat(c,", ").concat(r));for(var a=0;a<r;a++)o(a)}))}();
//# sourceMappingURL=03-promises.43874526.js.map
