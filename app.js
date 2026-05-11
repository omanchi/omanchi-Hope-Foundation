// ==============================
// STORIES ARRAY (SYNCED SYSTEM)
// ==============================

const stories = [
{
title: "Education Support",
image: "aventis1.png",
content: `
<p><strong>Education Support Initiative</strong></p>
<p>This program helps children who cannot afford education due to financial hardship.</p>
<p>We provide books, uniforms, and mentorship to rebuild confidence and learning ability.</p>
<p>Our mission is to restore hope through education and opportunity.</p>
`
},
{
title: "Child Welfare",
image: "aventis2.png",
content: `
<p><strong>Child Welfare Program</strong></p>
<p>We ensure vulnerable children receive care, safety, and emotional stability.</p>
<p>Support includes food, counseling, and safe environments for growth.</p>
<p>We focus on long-term healing and emotional restoration.</p>
`
},
{
title: "Community Outreach",
image: "aventis4.png",
content: `
<p><strong>Community Outreach</strong></p>
<p>We provide essential aid to underserved communities.</p>
<p>Each outreach restores dignity and strengthens community bonds.</p>
`
},
{
title: "Humanitarian Impact",
image: "aventis5.jpg",
content: `
<p><strong>Humanitarian Impact</strong></p>
<p>We focus on structured long-term transformation.</p>
<p>Our goal is stability, dignity, and sustainable change.</p>
`
},
{
title: "Community Support",
image: "aventis6.jpg",
content: `
<p><strong>Community Support</strong></p>
<p>We support families with essential needs and care.</p>
<p>Consistency ensures no one is left behind.</p>
`
},
{
title: "Transformation Stories",
image: "aventis7.jpg",
content: `
<p><strong>Transformation Stories</strong></p>
<p>Every life represents a journey from hardship to hope.</p>
<p>We believe even small support creates lasting impact.</p>
`
}
];

// ==============================
// STATE
// ==============================

let currentIndex = 0;

// ==============================
// OPEN STORY
// ==============================

function openStory(index) {
currentIndex = index;

document.getElementById("storyModal").style.display = "flex";
document.getElementById("modalImage").src = stories[index].image;
document.getElementById("modalTitle").innerText = stories[index].title;
document.getElementById("modalBody").innerHTML = stories[index].content;

document.body.style.overflow = "hidden";
}

// ==============================
// NEXT STORY
// ==============================

function nextStory() {
currentIndex = (currentIndex + 1) % stories.length;
openStory(currentIndex);
}

// ==============================
// PREVIOUS STORY
// ==============================

function prevStory() {
currentIndex = (currentIndex - 1 + stories.length) % stories.length;
openStory(currentIndex);
}

// ==============================
// CLOSE
// ==============================

function closeStory() {
document.getElementById("storyModal").style.display = "none";
document.body.style.overflow = "auto";
}

// CLOSE ON BACKDROP CLICK
document.addEventListener("click", function(e) {
if (e.target.id === "storyModal") {
closeStory();
}
});
