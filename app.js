function toggleDark(){
document.body.classList.toggle("dark");
}

/* COUNTER */
let count = 0;
let target = 74;
let el = document.getElementById("counter");

function runCounter(){
let t = setInterval(()=>{
if(count < target){
count++;
el.innerText = count;
}else{
clearInterval(t);
}
},30);
}
runCounter();

/* DONATION */
function donate(amount){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}

function customDonate(){
let val = document.getElementById("customAmount").value;
if(val > 0){
window.location.href="https://paystack.shop/pay/mrtyf-aq5c";
}
}

/* LANGUAGE (FULL PAGE BASIC ENGINE) */
function changeLanguage(lang){
if(lang === "en") location.reload();
}

/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});
