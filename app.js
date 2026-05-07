/* =========================
   DARK MODE
========================= */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* =========================
   COUNTER (SMOOTH ANIMATION)
========================= */
function animateCounter(){
const el = document.getElementById("counter");
let target = 74;
let current = 0;

let timer = setInterval(()=>{
current++;
el.innerText = current;

if(current >= target){
clearInterval(timer);
}
},30);
}

animateCounter();

/* =========================
   DONATION SYSTEM
========================= */
function donate(amount){
window.location.href = "https://paystack.shop/pay/mrtyf-aq5c";
}

function customDonate(){
let amt = document.getElementById("customAmount").value;

if(amt && amt > 0){
window.location.href = "https://paystack.shop/pay/mrtyf-aq5c";
}
}

/* =========================
   LANGUAGE SYSTEM (LIGHTWEIGHT BUT FULL PAGE READY)
========================= */
const translations = {
fr:{
title:"Fondation Omanchi Hope",
subtitle:"Restaurer l’espoir et la dignité des enfants vulnérables"
},
es:{
title:"Fundación Omanchi Hope",
subtitle:"Restaurando esperanza y dignidad"
}
};

function changeLanguage(lang){
if(lang === "en") location.reload();
else{
document.getElementById("title").innerText = translations[lang].title;
document.getElementById("subtitle").innerText = translations[lang].subtitle;
}
}

/* =========================
   SCROLL ANIMATION
========================= */
window.addEventListener("scroll",()=>{
let elements = document.querySelectorAll(".reveal");

elements.forEach(el=>{
let top = el.getBoundingClientRect().top;
let height = window.innerHeight;

if(top < height - 80){
el.classList.add("active");
}
});
});
