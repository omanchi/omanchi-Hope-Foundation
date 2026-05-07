/* DARK MODE */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* COUNTER */
let count = 0;
let target = 74;
let counter = document.getElementById("counter");

function runCounter(){
let interval = setInterval(()=>{
if(count < target){
count++;
counter.innerText = count;
}else{
clearInterval(interval);
}
},30);
}

runCounter();

/* DONATION */
function donate(amount){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}

function customDonate(){
let amt = document.getElementById("customAmount").value;
if(amt>0){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}
}

/* LANGUAGE */
function changeLanguage(lang){
if(lang=="en") location.reload();
}

/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});
