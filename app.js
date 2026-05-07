/* DARK MODE */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* COUNTER */
let count = 74;

function animateCounter(){
const el = document.getElementById("counter");
let target = 74;
let current = 0;

let interval = setInterval(()=>{
if(current >= target){
clearInterval(interval);
} else {
current++;
el.innerText = current;
}
},30);
}

animateCounter();

/* DONATION */
function donate(amount){
window.location.href = "https://paystack.shop/pay/mrtyf-aq5c";
}

function customDonate(){
let amt = document.getElementById("customAmount").value;
if(amt){
window.location.href = "https://paystack.shop/pay/mrtyf-aq5c";
}
}

/* TRANSLATION SYSTEM */
const translations = {
fr:{
title:"Fondation Omanchi Hope",
subtitle:"Redonner espoir aux enfants vulnérables"
},
es:{
title:"Fundación Omanchi Hope",
subtitle:"Restaurando esperanza"
}
};

function changeLanguage(lang){
if(lang === "en") location.reload();
else{
document.getElementById("title").innerText = translations[lang].title;
document.getElementById("subtitle").innerText = translations[lang].subtitle;
}
}

/* SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
for(let i=0;i<reveals.length;i++){
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
reveals[i].classList.add("active");
}
}
});
