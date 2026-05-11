const stories = {

story1: `
<p><strong>Education Support Initiative</strong></p>
<p>We support children who lack access to education due to financial hardship. Many come from unstable homes where schooling is not guaranteed.</p>
<p>We provide uniforms, books, and mentorship to rebuild confidence and learning ability.</p>
<p>Our goal is to help children believe in their future again through education.</p>
`,

story2: `
<p><strong>Child Welfare Program</strong></p>
<p>We ensure vulnerable children receive care, safety, and emotional stability.</p>
<p>Support includes food, counseling, and safe environments for growth.</p>
<p>We focus on long-term healing and emotional restoration.</p>
`,

story3: `
<p><strong>Community Outreach</strong></p>
<p>We provide food, clothing, and essential aid to underserved communities.</p>
<p>Each outreach restores dignity and hope.</p>
<p>We strengthen communities through consistent humanitarian support.</p>
`,

story4: `
<p><strong>Humanitarian Impact</strong></p>
<p>This program focuses on long-term transformation and structured support.</p>
<p>We work directly with families to solve urgent needs.</p>
<p>Our aim is lasting dignity and stability.</p>
`,

story5: `
<p><strong>Community Support</strong></p>
<p>We support families with essential needs and emotional care.</p>
<p>Consistency ensures no one is left behind.</p>
<p>Hope grows through continuous support.</p>
`,

story6: `
<p><strong>Transformation Stories</strong></p>
<p>Every life we touch represents a journey from hardship to hope.</p>
<p>These stories show real change through compassion and action.</p>
<p>Even small support creates lasting transformation.</p>
`

};

function openStory(image,title,key){
document.getElementById("storyModal").style.display="flex";
document.getElementById("modalImage").src=image;
document.getElementById("modalTitle").innerText=title;
document.getElementById("modalBody").innerHTML=stories[key];
document.body.style.overflow="hidden";
}

function closeStory(){
document.getElementById("storyModal").style.display="none";
document.body.style.overflow="auto";
}

document.addEventListener("click",function(e){
if(e.target.id==="storyModal"){
closeStory();
}
});
