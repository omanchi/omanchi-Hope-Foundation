// DARK MODE
function toggleDark(){
document.body.classList.toggle("dark");
localStorage.setItem("dark", document.body.classList.contains("dark"));
}

if(localStorage.getItem("dark") === "true"){
document.body.classList.add("dark");
}

// SHARE FUNCTION
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

// COUNTER ANIMATION (SMOOTH)
let count = 0;
let counterEl = document.getElementById("counter");

function animateCounter(){
let interval = setInterval(()=>{
if(count < 120){
count++;
counterEl.innerText = count;
}else{
clearInterval(interval);
}
},25);
}

animateCounter();
