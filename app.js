const stories = [
{
title:"Education Support",
image:"aventis1.png",
text:`
Education remains one of the strongest tools for breaking the cycle of poverty.

At Omanchi Hope Foundation, we support orphaned and vulnerable children by providing access to school fees, uniforms, textbooks, and mentorship programs that guide them academically and emotionally.

Many of these children come from environments where education is a luxury, not a right. Without intervention, their future becomes limited by circumstance rather than potential.

Through consistent support, we help restore confidence, discipline, and long-term hope.

Every child deserves the chance to learn, grow, and build a better future — and that is the foundation of our mission.
`,
donations:[10000,25000,50000]
},

{
title:"Child Welfare Support",
image:"aventis2.png",
text:`
Child welfare is at the heart of our humanitarian mission.

We provide structured care for orphaned and vulnerable children, ensuring they have access to food, shelter support, emotional stability, and safe living environments.

Beyond physical needs, we focus on emotional healing — helping children recover from trauma, neglect, and instability.

Each child is treated with dignity, care, and long-term attention, not temporary relief.

Our goal is to rebuild trust, restore emotional balance, and create a safe foundation where every child can grow with confidence and hope for the future.
`,
donations:[15000,30000,60000]
},

{
title:"Community Outreach",
image:"aventis4.png",
text:`
Our community outreach programs are designed to reach underserved and vulnerable populations with essential humanitarian support.

We provide food supplies, clothing, and emergency assistance to families facing hardship.

Each outreach is carefully structured to ensure that support is meaningful and impactful, not temporary.

We believe in restoring dignity alongside providing aid.

By engaging directly with communities, we help strengthen resilience and encourage long-term stability where it is most needed.
`,
donations:[10000,20000,40000]
},

{
title:"Humanitarian Impact",
image:"aventis5.jpg",
text:`
Our humanitarian impact initiatives focus on long-term transformation rather than short-term relief.

We work closely with families and communities to address the root causes of poverty, lack of education, and unstable living conditions.

Instead of temporary aid, we invest in sustainable change that improves quality of life over time.

Each program is designed to create measurable, lasting impact that continues beyond immediate intervention.

Our mission is to transform lives through consistent, structured humanitarian development.
`,
donations:[20000,50000,100000]
},

{
title:"Community Support System",
image:"aventis6.jpg",
text:`
We believe no family should be left behind in times of difficulty.

Our community support system provides continuous assistance to families facing financial and emotional hardship.

This includes food support, educational assistance, and emotional care for both children and guardians.

We maintain ongoing relationships with families to ensure that progress is sustained, not temporary.

Consistency is what turns humanitarian aid into lasting transformation.
`,
donations:[15000,35000,70000]
},

{
title:"Transformation Stories",
image:"aventis7.jpg",
text:`
Every transformation story represents a real journey of resilience and change.

From hardship to stability, from struggle to hope — these are the lives impacted through our work.

We do not just provide assistance; we help redirect the future of individuals and families.

Each story reflects courage, recovery, and renewed possibility.

These transformations are made possible through collective support and consistent humanitarian action.
`,
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
