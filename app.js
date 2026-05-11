// ==============================
// STORY DATA (NGO IMPACT TEXTS)
// ==============================

const stories = {

story1: `
<p><strong>Education Support Initiative</strong></p>

<p>
Omanchi Hope Foundation believes education is the strongest foundation for breaking the cycle of poverty.
This initiative supports children who lack access to school fees, learning materials, and academic guidance.
Many of these children come from environments where survival is a daily struggle.
</p>

<p>
We provide school supplies, uniforms, and mentorship to help restore confidence and direction.
Beyond materials, we focus on emotional support and encouragement.
Over time, children begin to rediscover hope, ambition, and self-belief.
</p>
`,

story2: `
<p><strong>Child Welfare Program</strong></p>

<p>
This program ensures vulnerable children receive care, protection, and emotional stability.
Many lack stable family structures and access to basic needs.
We step in to provide consistent support systems.
</p>

<p>
Through food assistance, counseling, and safe environments, we help restore dignity.
Our focus is long-term healing, not temporary relief.
Children gradually regain confidence, trust, and emotional balance.
</p>
`,

story3: `
<p><strong>Community Outreach Program</strong></p>

<p>
We reach underserved communities facing hardship and instability.
Essential supplies such as food, clothing, and basic support are provided.
</p>

<p>
Each outreach restores dignity and reminds people they are not forgotten.
Communities begin to rebuild trust and strength through consistent support.
</p>
`,

story4: `
<p><strong>Humanitarian Impact Initiative</strong></p>

<p>
This initiative focuses on structured long-term humanitarian support.
We work closely with families to identify urgent needs.
</p>

<p>
The goal is sustainable transformation, not temporary relief.
Every action is designed to restore dignity and stability.
</p>
`,

story5: `
<p><strong>Community Support System</strong></p>

<p>
We believe strong communities are built through consistent care.
This program supports families struggling with basic survival needs.
</p>

<p>
Through food, emotional care, and engagement, we help restore stability.
Families gradually regain hope and strength.
</p>
`,

story6: `
<p><strong>Transformation Stories</strong></p>

<p>
Every life we support represents a journey from hardship to hope.
This program captures real transformation experiences.
</p>

<p>
We believe even small acts of kindness can create lasting impact.
Each story is proof that change is possible.
</p>
`

};

// ==============================
// OPEN STORY MODAL
// ==============================

function openStory(image, title, key) {
    const modal = document.getElementById("storyModal");
    const img = document.getElementById("modalImage");
    const titleEl = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    modal.classList.add("active");

    img.src = image;
    titleEl.innerText = title;
    body.innerHTML = stories[key] || "<p>Story not available.</p>";

    document.body.style.overflow = "hidden";
}

// ==============================
// CLOSE STORY MODAL
// ==============================

function closeStory() {
    document.getElementById("storyModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

// ==============================
// OPTIONAL: CLICK OUTSIDE TO CLOSE
// ==============================

document.addEventListener("click", function(e) {
    const modal = document.getElementById("storyModal");

    if (e.target === modal) {
        closeStory();
    }
});
