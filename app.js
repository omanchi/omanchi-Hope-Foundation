const stories=[
{
title:"Education Support",
image:"aventis1.png",
text:`We support children without access to education by providing materials, mentorship and emotional guidance.`
},
{
title:"Child Welfare",
image:"aventis2.png",
text:`We ensure vulnerable children receive care, safety, food and emotional stability.`
},
{
title:"Community Outreach",
image:"aventis4.png",
text:`We reach underserved communities with essential humanitarian aid and support.`
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
text:`We focus on long-term transformation and sustainable community development.`
},
{
title:"Community Support",
image:"aventis6.jpg",
text:`We provide continuous assistance to families in need of support and stability.`
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
text:`Every story represents a real journey from hardship to hope and recovery.`
}
];

let current=0;

function openStory(i){
current=i;

document.getElementById("modal").style.display="flex";
document.getElementById("modalImg").src=stories[i].image;
document.getElementById("modalTitle").innerText=stories[i].title;
document.getElementById("modalText").innerText=stories[i].text;

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
document.getElementById("modal").style.display="none";
document.body.style.overflow="auto";
}

document.addEventListener("click",(e)=>{
if(e.target.id==="modal") closeStory();
});

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape") closeStory();
});
