const stories = [
{
title:"Education Support",
image:"aventis1.png",
content:"<p>We support children without access to education by providing materials and mentorship.</p>"
},
{
title:"Child Welfare",
image:"aventis2.png",
content:"<p>We ensure children receive care, safety and emotional stability.</p>"
},
{
title:"Community Outreach",
image:"aventis4.png",
content:"<p>We reach underserved communities with essential aid.</p>"
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
content:"<p>We focus on long-term transformation and stability.</p>"
},
{
title:"Community Support",
image:"aventis6.jpg",
content:"<p>We provide continuous support to struggling families.</p>"
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
content:"<p>Every life we support reflects real change and hope.</p>"
}
];

let currentIndex=0;

function openStory(index){
currentIndex=index;
document.getElementById("storyModal").style.display="flex";
document.getElementById("modalImage").src=stories[index].image;
document.getElementById("modalTitle").innerText=stories[index].title;
document.getElementById("modalBody").innerHTML=stories[index].content;
document.body.style.overflow="hidden";
}

function nextStory(){
currentIndex=(currentIndex+1)%stories.length;
openStory(currentIndex);
}

function prevStory(){
currentIndex=(currentIndex-1+stories.length)%stories.length;
openStory(currentIndex);
}

function closeStory(){
document.getElementById("storyModal").style.display="none";
document.body.style.overflow="auto";
}

document.addEventListener("click",(e)=>{
if(e.target.id==="storyModal") closeStory();
});

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape") closeStory();
});
