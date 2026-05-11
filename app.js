const stories = [
{
title:"Education Support",
image:"aventis1.png",
text:"We support children without access to education by providing materials, mentorship and hope.",
donations:[10000, 25000, 50000]
},
{
title:"Child Welfare",
image:"aventis2.png",
text:"We ensure children receive care, safety and emotional stability.",
donations:[15000, 30000, 60000]
},
{
title:"Community Outreach",
image:"aventis4.png",
text:"We reach underserved communities with essential humanitarian aid.",
donations:[10000, 20000, 40000]
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
text:"We focus on long-term transformation and sustainable development.",
donations:[20000, 50000, 100000]
},
{
title:"Community Support",
image:"aventis6.jpg",
text:"We provide continuous assistance to struggling families.",
donations:[15000, 35000, 70000]
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
text:"Every story reflects real change, recovery and hope.",
donations:[10000, 25000, 75000]
}
];

let current=0;

function openStory(i){
current=i;

const modal=document.getElementById("modal");

modal.style.display="flex";
modal.style.opacity="0";

setTimeout(()=>{
modal.style.opacity="1";
},50);

document.getElementById("modalImg").src=stories[i].image;
document.getElementById("modalTitle").innerText=stories[i].title;
document.getElementById("modalText").innerText=stories[i].text;

// 🔥 BUILD DONATION BUTTONS PER STORY
const donateLink=document.getElementById("donateLink");

let buttonsHTML = stories[i].donations.map(amount=>{
return `
<a href="https://paystack.shop/pay/mrtyf-aq5c?story=${encodeURIComponent(stories[i].title)}&amount=${amount}"
target="_blank"
style="
display:inline-block;
margin:5px;
background:#00ffd5;
color:#000;
padding:8px 12px;
border-radius:15px;
text-decoration:none;
font-weight:600;
font-size:13px;">
₦${amount.toLocaleString()}
</a>`;
}).join("");

donateLink.innerHTML = buttonsHTML;

document.body.style.overflow="hidden";
}

function nextStory(){
current=(current+1)%stories.length;
openStory(current);
}

function prevStory(){
current=(current-1+stories.length)%stories.length;
openStory(current);
}

function closeStory(){
const modal=document.getElementById("modal");

modal.style.opacity="0";

setTimeout(()=>{
modal.style.display="none";
document.body.style.overflow="auto";
},200);
}

document.addEventListener("click",(e)=>{
if(e.target.id==="modal") closeStory();
});

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape") closeStory();
});
