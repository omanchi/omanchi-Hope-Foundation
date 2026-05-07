/* DARK MODE */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* COUNTER */
let count = 0;
let target = 74;

let counterEl = document.getElementById("counter");

setInterval(()=>{
if(count < target){
count++;
counterEl.innerText = count;
}
},40);

/* DONATION */
function donate(amount){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}

function customDonate(){
let val = document.getElementById("custom").value;
if(val > 0){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}
}

/* LANGUAGE (SAFE VERSION) */
function setLang(lang){
if(lang !== "en"){
alert("Language feature coming next upgrade");
}
}
