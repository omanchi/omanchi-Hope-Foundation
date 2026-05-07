(() => {
  const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

  const form = document.querySelector(".donation-form");
  const amountInput = document.querySelector(".donation-form input[type='number']");
  const buttons = document.querySelectorAll(".donation-options button");

  if (!form || !amountInput) return;

  // ===============================
  // PRESET AMOUNT BUTTONS
  // ===============================
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.innerText.replace(/[₦,]/g, "").trim();
      amountInput.value = value;

      // visual feedback
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ===============================
  // DONATE BUTTON → PAYSTACK
  // ===============================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = parseInt(amountInput.value, 10);

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // optional confirmation
    const confirmPay = confirm(
      `Proceed to donate ₦${amount.toLocaleString()} via Paystack?`
    );

    if (!confirmPay) return;

    // REDIRECT TO PAYSTACK
    window.location.href = PAYSTACK_URL;
  });

})();
