const stories = [
{
title: "Education Support",
image: "aventis1.png",
text: `
Education is one of the strongest tools for breaking the cycle of poverty.

Through the Omanchi Hope Foundation Education Support Program, we provide access to school materials, tuition assistance, uniforms, and mentorship for children who would otherwise be unable to attend school.

Many of the children we support come from extremely vulnerable backgrounds where survival is the priority over learning.

We step in to restore balance — ensuring that no child is denied the opportunity to learn, grow, and dream.

Our long-term mission is not just schooling, but rebuilding confidence, discipline, and hope for a better future through education.
`,
donations: [10000, 25000, 50000]
},

{
title: "Child Welfare Support",
image: "aventis2.png",
text: `
Child welfare is at the heart of everything we do.

We provide structured care for orphaned and vulnerable children, ensuring they have access to food, shelter support, emotional care, and safe environments.

Beyond physical needs, we also focus on emotional healing — helping children recover from trauma, neglect, or instability.

Each child is treated with dignity, love, and long-term attention, not just temporary aid.

Our goal is to rebuild trust, stability, and emotional security so that every child can grow in a healthy environment.
`,
donations: [15000, 30000, 60000]
},

{
title: "Community Outreach",
image: "aventis4.png",
text: `
Our outreach programs extend beyond individual support — we reach entire communities in need.

We provide food supplies, clothing, basic medical assistance, and emergency relief in underserved areas.

Each outreach is carefully planned to ensure maximum impact and sustainability.

We don’t just give aid — we restore dignity, strengthen communities, and encourage long-term resilience.

Every outreach is a reminder that humanity still cares.
`,
donations: [10000, 20000, 40000]
},

{
title: "Humanitarian Impact",
image: "aventis5.jpg",
text: `
Our humanitarian impact programs are designed for long-term transformation.

We work with families and communities to address root causes of hardship such as poverty, lack of education, and unstable living conditions.

Instead of temporary relief, we focus on sustainable change that improves quality of life over time.

Every intervention is measured by real, visible improvement in the lives of the people we support.
`,
donations: [20000, 50000, 100000]
},

{
title: "Community Support System",
image: "aventis6.jpg",
text: `
We believe no one should be left behind in difficult times.

Our community support system provides continuous assistance to families facing hardship.

This includes food support, educational aid, and emotional care for both children and guardians.

We stay connected with families to ensure progress is not temporary but lasting.

Consistency is what turns support into transformation.
`,
donations: [15000, 35000, 70000]
},

{
title: "Transformation Stories",
image: "aventis7.jpg",
text: `
Every transformation story represents a real human journey.

From struggle to stability, from pain to hope — these are the lives we witness every day.

Our work is not just about assistance, but about changing the direction of someone’s future.

Each story reflects resilience, recovery, and renewed hope made possible through collective support.
`,
donations: [10000, 25000, 75000]
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

// 💰 donation levels per story
const box=document.getElementById("donationBox");

box.innerHTML = stories[i].donations.map(amount=>{
return `
<a href="https://paystack.shop/pay/mrtyf-aq5c?story=${encodeURIComponent(stories[i].title)}&amount=${amount}"
target="_blank">
₦${amount.toLocaleString()}
</a>`;
}).join("");

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
