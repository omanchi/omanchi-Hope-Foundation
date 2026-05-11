// ==============================
// STORIES DATA
// ==============================

const stories = [
{
title: "Education Support",
image: "aventis1.png",
content: `
<p><strong>Education Support Initiative</strong></p>
<p>This program supports children who lack access to education due to financial hardship...</p>
<p>We provide learning materials, uniforms, and mentorship to rebuild confidence...</p>
<p>The goal is to help children rediscover hope through education.</p>
`
},
{
title: "Child Welfare",
image: "aventis2.png",
content: `
<p><strong>Child Welfare Program</strong></p>
<p>We ensure vulnerable children receive care, safety, and emotional stability...</p>
<p>Support includes food, counseling, and safe environments for growth...</p>
<p>We focus on long-term healing and restoration.</p>
`
},
{
title: "Community Outreach",
image: "aventis4.png",
content: `
<p><strong>Community Outreach</strong></p>
<p>We reach underserved communities with essential aid...</p>
<p>Each outreach restores dignity and strengthens communities...</p>
`
},
{
title: "Humanitarian Impact",
image: "aventis5.jpg",
content: `
<p><strong>Humanitarian Impact</strong></p>
<p>We provide structured support for long-term transformation...</p>
<p>The goal is stability, dignity, and sustainable change.</p>
`
},
{
title: "Community Support",
image: "aventis6.jpg",
content: `
<p><strong>Community Support</strong></p>
<p>We support struggling families with consistent care...</p>
<p>Hope grows through continuous humanitarian engagement.</p>
`
},
{
title: "Transformation Stories",
image: "aventis7.jpg",
content: `
<p><strong>Transformation Stories</strong></p>
<p>Every life represents a journey from hardship to hope...</p>
<p>We believe even small support creates lasting impact.</p>
`
}
];

// ==============================
// STATE TRACKING
// ==============================

let currentIndex = 0;

// ==============================
// OPEN MODAL
// ==============================

function openStory(index) {
currentIndex = index;

const modal = document.getElementById("storyModal");
const img = document.getElementById("modalImage");
const title = document.getElementById("modalTitle");
const body = document.getElementById("modalBody");

modal.style.display = "flex";

img.src = stories[index].image;
title.innerText = stories[index].title;
body.innerHTML = stories[index].content;

document.body.style.overflow = "hidden";
}

// ==============================
// CLOSE MODAL
// ==============================

function closeStory() {
document.getElementById("storyModal").style.display = "none";
document.body.style.overflow = "auto";
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
// CLICK OUTSIDE TO CLOSE
// ==============================

document.addEventListener("click", function(e) {
if (e.target.id === "storyModal") {
closeStory();
}
});
