const stories = [
{
title:"Education Support",
image:"aventis1.png",
text:"We support children through education, mentorship and learning materials.",
donations:[10000,25000,50000]
},
{
title:"Child Welfare",
image:"aventis2.png",
text:"We ensure safety, care and emotional stability for vulnerable children.",
donations:[15000,30000,60000]
},
{
title:"Community Outreach",
image:"aventis4.png",
text:"We provide essential humanitarian aid to underserved communities.",
donations:[10000,20000,40000]
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
text:"We focus on long-term sustainable transformation.",
donations:[20000,50000,100000]
},
{
title:"Community Support",
image:"aventis6.jpg",
text:"We support struggling families with continuous assistance.",
donations:[15000,35000,70000]
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
text:"Each story represents real human change and recovery.",
donations:[10000,25000,75000]
}
];

let current = 0;

function openStory(i){
current = i;

const modal = document.getElementById("modal");

modal.style.display = "flex";

document.getElementById("modalImg").src = stories[i].image;
document.getElementById("modalTitle").innerText = stories[i].title;
document.getElementById("modalText").innerText = stories[i].text;

const box = document.getElementById("donationBox");

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

/* SAFE CLOSE CONTROLS */
document.addEventListener("click",(e)=>{
if(e.target.id === "modal") closeStory();
});

document.addEventListener("keydown",(e)=>{
if(e.key === "Escape") closeStory();
});
