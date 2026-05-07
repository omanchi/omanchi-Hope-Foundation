"use strict";

/* =========================
   STATE
========================= */
let children = 74;
const counter = document.getElementById("counter");

/* =========================
   DARK MODE SYSTEM (SYNCED WITH CSS)
========================= */
function setTheme(mode){
if(mode === "dark"){
document.body.classList.add("dark");
}else{
document.body.classList.remove("dark");
}
localStorage.setItem("theme", mode);
}

function toggleDark(){
const isDark = document.body.classList.contains("dark");
setTheme(isDark ? "light" : "dark");
}

// load saved theme
(function initTheme(){
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);
})();

/* =========================
   IMPACT SYSTEM
========================= */
function updateImpact(amount){
if(amount >= 10000){
children += 1;
animateCounter();
}
}

function animateCounter(){
if(counter){
counter.innerText = children;
}
}

/* =========================
   DONATION SYSTEM (CLEAN FLOW)
========================= */
function donate(amount){
showToast(`₦${amount.toLocaleString()} selected`);

updateImpact(amount);

setTimeout(()=>{
window.open("https://paystack.shop/pay/mrtyf-aq5c", "_blank");
},600);
}

function customDonate(){
const input = document.getElementById("customAmount");

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
   TOAST NOTIFICATION (UX LAYER)
========================= */
function showToast(message){
const toast = document.createElement("div");
toast.className = "toast";
toast.innerText = message;

document.body.appendChild(toast);

setTimeout(()=>toast.classList.add("show"),50);

setTimeout(()=>{
toast.classList.remove("show");
setTimeout(()=>toast.remove(),300);
},2000);
}

/* =========================
   MULTILINGUAL ENGINE (CORE FEATURE)
========================= */
const translations = {
en:{
title:"Omanchi Hope Foundation",
subtitle:"Restoring dignity, hope, and opportunity to vulnerable children",
about:"About",
family:"Hope Family",
news:"News",
donate:"Donate"
},

fr:{
title:"Fondation Omanchi Hope",
subtitle:"Restaurer la dignité et l’espoir des enfants vulnérables",
about:"À propos",
family:"Famille Espoir",
news:"Actualités",
donate:"Donner"
},

es:{
title:"Fundación Omanchi Hope",
subtitle:"Restaurando dignidad y esperanza a los niños vulnerables",
about:"Sobre",
family:"Familia Esperanza",
news:"Noticias",
donate:"Donar"
}
};

function changeLanguage(lang){
const t = translations[lang];
if(!t) return;

/* HERO TEXT */
const heroTitle = document.querySelector(".hero h1");
const heroSub = document.querySelector(".hero p");

if(heroTitle) heroTitle.innerText = t.title;
if(heroSub) heroSub.innerText = t.subtitle;

/* NAV LINKS (safe targeting) */
const links = document.querySelectorAll("nav a");

if(links[0]) links[0].innerText = t.about;
if(links[1]) links[1].innerText = t.family;
if(links[2]) links[2].innerText = t.news;
if(links[3]) links[3].innerText = t.donate;
}

/* =========================
   SCROLL REVEAL (MATCH CSS)
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
   INITIAL RENDER
========================= */
animateCounter();
