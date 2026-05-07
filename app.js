(() => {
  // ===============================
  // OMACHI HOPE FOUNDATION
  // DONATION SYSTEM (SOPHISTICATED VERSION)
  // ===============================

  const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

  // Elements
  const amountInput = document.querySelector(".donation-form input[type='number']");
  const form = document.querySelector(".donation-form");
  const buttons = document.querySelectorAll(".donation-options button");

  if (!form || !amountInput) return; // safety check

  let selectedAmount = null;

  // ===============================
  // FORMAT NUMBER (UX POLISH)
  // ===============================
  const formatNaira = (num) => {
    return new Intl.NumberFormat("en-NG").format(num);
  };

  // ===============================
  // HANDLE PRESET BUTTONS
  // ===============================
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const raw = btn.innerText.replace(/[₦,]/g, "").trim();
      const value = parseInt(raw, 10);

      if (isNaN(value)) return;

      selectedAmount = value;
      amountInput.value = value;

      // Visual feedback
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      btn.style.transform = "scale(0.96)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 120);
    });
  });

  // ===============================
  // HANDLE CUSTOM INPUT
  // ===============================
  amountInput.addEventListener("input", (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value)) {
      selectedAmount = value;
      buttons.forEach(b => b.classList.remove("active"));
    }
  });

  // ===============================
  // FORM SUBMIT → PAYSTACK REDIRECT
  // ===============================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = parseInt(amountInput.value, 10);

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Optional confirmation (clean UX)
    const confirmDonate = confirm(
      `You are about to donate ₦${formatNaira(amount)}. Continue?`
    );

    if (!confirmDonate) return;

    // Redirect to Paystack
    window.location.href = PAYSTACK_URL;
  });

})();
