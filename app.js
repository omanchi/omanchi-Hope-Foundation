
function toggleDark(){
document.body.classList.toggle("dark");
localStorage.setItem("dark", document.body.classList.contains("dark"));
}

// restore dark mode
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
alert(location.href);
}
}

// COUNTER ANIMATION
let count = 0;
let counterEl = document.getElementById("counter");

setInterval(()=>{
if(count < 120){
count++;
counterEl.innerText = count;
}
},20);
