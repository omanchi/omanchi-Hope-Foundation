const stories = [
{
title:"Education Support",
image:"aventis1.png",
text:"We support children without access to education by providing materials, mentorship and hope.",
donations:[10000,25000,50000]
},
{
title:"Child Welfare",
image:"aventis2.png",
text:"We ensure children receive care, safety and emotional stability.",
donations:[15000,30000,60000]
},
{
title:"Community Outreach",
image:"aventis4.png",
text:"We reach underserved communities with essential humanitarian aid.",
donations:[10000,20000,40000]
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
text:"We focus on long-term transformation and sustainable development.",
donations:[20000,50000,100000]
},
{
title:"Community Support",
image:"aventis6.jpg",
text:"We provide continuous assistance to struggling families.",
donations:[15000,35000,70000]
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
text:"Every story reflects real change, recovery and hope.",
donations:[10000,25000,75000]
}
];

let current = 0;

function openStory(i){

current = i;

const modal = document.getElementById("modal");
const img = document.getElementById("modalImg");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const box = document.getElementById("donationBox");

if(!modal || !img || !title || !text){
console.error("Modal elements missing - check HTML IDs");
return;
}

modal.style.display = "flex";

img.src = stories[i].image;
title.innerText = stories[i].title;
text.innerText = stories[i].text;

box.innerHTML = stories[i].donations.map(amount=>{
return `
<a href="https://paystack.shop/pay/mrtyf-aq5c?story=${encodeURIComponent(stories[i].title)}&amount=${amount}"
target="_blank">
₦${amount.toLocaleString()}
</a>`;
}).join("");

document.body.style.overflow = "hidden";
}

function nextStory(){
current = (current + 1) % stories.length;
openStory(current);
}

function prevStory(){
current = (current - 1 + stories.length) % stories.length;
openStory(current);
}

function closeStory(){
document.getElementById("modal").style.display = "none";
document.body.style.overflow = "auto";
}

document.addEventListener("click",(e)=>{
if(e.target.id === "modal") closeStory();
});

document.addEventListener("keydown",(e)=>{
if(e.key === "Escape") closeStory();
});
