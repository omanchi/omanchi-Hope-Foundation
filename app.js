"use strict";

/* =========================
   STATE (GLOBAL SAFE STATE)
========================= */
let children = 74;
const counter = document.getElementById("counter");

/* =========================
   DARK MODE SYSTEM (SMOOTH + PERSISTENT)
========================= */
function applyTheme(theme){
if(theme === "dark"){
document.body.classList.add("dark");
}else{
document.body.classList.remove("dark");
}
localStorage.setItem("theme", theme);
}

function toggleDark(){
const isDark = document.body.classList.contains("dark");
applyTheme(isDark ? "light" : "dark");
}

// Load saved theme on startup
(function initTheme(){
const saved = localStorage.getItem("theme") || "light";
applyTheme(saved);
})();

/* =========================
   IMPACT SYSTEM (REALISTIC BEHAVIOR)
========================= */
function updateImpact(amount){
if(amount >= 10000){
children += 1;
animateCounter();
}
}

function animateCounter(){
if(!counter) return;
counter.innerText = children;
}

/* =========================
   DONATION SYSTEM (CLEAN UX FLOW)
========================= */
function donate(amount){

// subtle feedback instead of aggressive alerts
showToast(`₦${amount.toLocaleString()} selected`);

updateImpact(amount);

// redirect to Paystack after short delay
setTimeout(()=>{
window.open("https://paystack.shop/pay/mrtyf-aq5c", "_blank");
},600);
}

function customDonate(){
const input = document.getElementById("customAmount");
if(!input) return;

let value = Number(input.value || 0);

if(value < 10000){
showToast("Minimum donation is ₦10,000");
return;
}

showToast(`₦${value.toLocaleString()} selected`);
updateImpact(value);

setTimeout(()=>{
window.open("https://paystack.shop/pay/mrtyf-aq5c", "_blank");
},600);
}

/* =========================
   SIMPLE TOAST NOTIFICATION (NEW UX LAYER)
========================= */
function showToast(message){
let toast = document.createElement("div");
toast.className = "toast";
toast.innerText = message;

document.body.appendChild(toast);

setTimeout(()=>{
toast.classList.add("show");
},50);

setTimeout(()=>{
toast.classList.remove("show");
setTimeout(()=>toast.remove(),300);
},2000);
}

/* =========================
   SCROLL REVEAL (MATCHES YOUR CSS)
========================= */
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{
threshold:0.15
});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

/* =========================
   COUNTER INIT
========================= */
animateCounter();
