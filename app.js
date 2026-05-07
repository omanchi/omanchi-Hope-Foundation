"use strict";

/* =========================
   STATE
========================= */
let children = 74;
const counter = document.getElementById("counter");

/* =========================
   DARK MODE
========================= */
function setTheme(mode){
document.body.classList.toggle("dark", mode === "dark");
localStorage.setItem("theme", mode);
}

function toggleDark(){
const isDark = document.body.classList.contains("dark");
setTheme(isDark ? "light" : "dark");
}

(function initTheme(){
setTheme(localStorage.getItem("theme") || "light");
})();

/* =========================
   IMPACT SYSTEM
========================= */
function updateImpact(amount){
if(amount >= 10000){
children += 1;
if(counter) counter.innerText = children;
}
}

/* =========================
   PAYSTACK FLOW
========================= */
const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

function redirectToPaystack(amount){
showToast(`Processing ₦${amount.toLocaleString()} donation`);

updateImpact(amount);

setTimeout(()=>{
window.location.href = PAYSTACK_URL;
},700);
}

function donate(amount){
if(amount < 10000){
showToast("Minimum donation is ₦10,000");
return;
}
redirectToPaystack(amount);
}

function customDonate(){
const input = document.getElementById("customAmount");
let value = Number(input.value || 0);

if(value < 10000){
showToast("Minimum donation is ₦10,000");
return;
}

redirectToPaystack(value);
}

/* =========================
   TOAST SYSTEM
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
   🌍 MODERN TRANSLATION ENGINE (UPGRADED)
========================= */
const LANG_DATA = {
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

/* Detect browser language automatically */
function detectLanguage(){
const lang = navigator.language.slice(0,2);
return LANG_DATA[lang] ? lang : "en";
}

/* Apply translations smoothly */
function applyLanguage(lang){

const t = LANG_DATA[lang];
if(!t) return;

/* Hero */
const h1 = document.querySelector(".hero h1");
const p = document.querySelector(".hero p");

if(h1) h1.innerText = t.title;
if(p) p.innerText = t.subtitle;

/* Nav links */
const links = document.querySelectorAll("nav a");

if(links[0]) links[0].innerText = t.about;
if(links[1]) links[1].innerText = t.family;
if(links[2]) links[2].innerText = t.news;
if(links[3]) links[3].innerText = t.donate;
}

/* Manual switch from dropdown */
function changeLanguage(lang){
applyLanguage(lang);
localStorage.setItem("lang", lang);
}

/* Auto init language (smart UX) */
(function initLanguage(){
const saved = localStorage.getItem("lang");
const auto = detectLanguage();

applyLanguage(saved || auto);
})();

/* =========================
   SCROLL REVEAL
========================= */
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

/* =========================
   INIT
========================= */
if(counter) counter.innerText = children;
