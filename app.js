let children = 74;
const counter = document.getElementById("counter");

/* =========================
   DARK MODE (PERSISTENT)
========================= */
function enableDarkMode(){
document.body.classList.add("dark");
localStorage.setItem("theme","dark");
}

function disableDarkMode(){
document.body.classList.remove("dark");
localStorage.setItem("theme","light");
}

function toggleDark(){
if(document.body.classList.contains("dark")){
disableDarkMode();
}else{
enableDarkMode();
}
}

// load saved theme
(function(){
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}
})();

/* =========================
   IMPACT COUNTER SYSTEM
========================= */
function updateImpact(amount){
if(amount >= 10000){
children += 1;
animateCounter();
}
}

function animateCounter(){
counter.innerText = children;
}

/* =========================
   DONATION HANDLERS
========================= */
function donate(amount){
alert("Donation selected: ₦" + amount);
updateImpact(amount);
}

function customDonate(){
let value = document.getElementById("customAmount").value;

value = Number(value);

if(value >= 10000){
alert("Donation of ₦" + value + " selected");
updateImpact(value);
}else{
alert("Minimum donation is ₦10,000");
}
}

/* =========================
   SHARE FUNCTION (optional if you add button later)
========================= */
function shareSite(){
if(navigator.share){
navigator.share({
title:"Omanchi Hope Foundation",
url:location.href
});
}else{
alert("Copy link: " + location.href);
}
}

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});

/* =========================
   INITIAL COUNTER LOAD
========================= */
animateCounter();
