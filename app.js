const stories = [
{
title:"Education Support",
image:"aventis1.png",
content:`
<p><strong>Education Support Initiative</strong></p>
<p>Omanchi Hope Foundation provides educational access for children who cannot afford school fees, uniforms, or learning materials.</p>
<p>Many of these children come from environments where survival takes priority over education.</p>
<p>We step in with structured support — books, mentorship, emotional encouragement, and consistent guidance.</p>
<p>Our goal is not just schooling, but restoring belief in a better future through education.</p>
`
},
{
title:"Child Welfare",
image:"aventis2.png",
content:`
<p><strong>Child Welfare Program</strong></p>
<p>We ensure vulnerable children receive protection, food, and emotional stability.</p>
<p>Our intervention focuses on safety, healing, and rebuilding trust.</p>
<p>Each child is placed in a supportive environment that encourages growth and dignity.</p>
`
},
{
title:"Community Outreach",
image:"aventis4.png",
content:`
<p><strong>Community Outreach</strong></p>
<p>We extend humanitarian aid to underserved communities through food, clothing, and basic support.</p>
<p>Every outreach restores dignity and strengthens social connection.</p>
`
},
{
title:"Humanitarian Impact",
image:"aventis5.jpg",
content:`
<p><strong>Humanitarian Impact Initiative</strong></p>
<p>We focus on long-term transformation rather than temporary relief.</p>
<p>Families are supported through structured aid systems designed for stability.</p>
`
},
{
title:"Community Support",
image:"aventis6.jpg",
content:`
<p><strong>Community Support System</strong></p>
<p>We provide continuous assistance to families facing hardship.</p>
<p>Support includes essentials, emotional care, and long-term follow-up.</p>
`
},
{
title:"Transformation Stories",
image:"aventis7.jpg",
content:`
<p><strong>Transformation Stories</strong></p>
<p>Each story represents a real journey from hardship to hope.</p>
<p>We document real impact created through consistent humanitarian work.</p>
`
}
];

let currentIndex = 0;

function openStory(index){
currentIndex = index;

const modal = document.getElementById("storyModal");
modal.style.display = "flex";
modal.style.opacity = "0";

setTimeout(()=>{
modal.style.opacity = "1";
},50);

document.getElementById("modalImage").src = stories[index].image;
document.getElementById("modalTitle").innerText = stories[index].title;
document.getElementById("modalBody").innerHTML = stories[index].content;

document.body.style.overflow = "hidden";
}

function nextStory(){
currentIndex = (currentIndex + 1) % stories.length;
openStory(currentIndex);
}

function prevStory(){
currentIndex = (currentIndex - 1 + stories.length) % stories.length;
openStory(currentIndex);
}

function closeStory(){
document.getElementById("storyModal").style.opacity = "0";
setTimeout(()=>{
document.getElementById("storyModal").style.display = "none";
document.body.style.overflow = "auto";
},200);
}

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape") closeStory();
});

document.addEventListener("click",(e)=>{
if(e.target.id==="storyModal") closeStory();
});
