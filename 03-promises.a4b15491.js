let e,t,o;const n=document.querySelector(".form");function i(){const t=Math.random()>.3;return new Promise(((o,n)=>{t?o({position:position,delay:e}):n({position:position,delay:e})}))}console.dir(n),n.addEventListener("submit",(function(n){n.preventDefault(),e=Number(n.target.elements.delay.value),t=Number(n.target.elements.step.value),o=Number(n.target.elements.amount.value);for(let e=0;e<=o;e++)setTimeout((()=>{i().then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}),t)}));
//# sourceMappingURL=03-promises.a4b15491.js.map
