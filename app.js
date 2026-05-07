(() => {

  // ============================
  // PAYSTACK LINK
  // ============================
  const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

  // ============================
  // DONATION ELEMENTS
  // ============================
  const buttons = document.querySelectorAll(".donation-options button");
  const amountInput = document.querySelector(".donation-form input[type='number']");
  const donationForm = document.querySelector(".donation-form");

  // ============================
  // PRESET BUTTONS
  // ============================
  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      const value = btn.innerText
        .replace(/[₦,]/g, "")
        .trim();

      amountInput.value = value;

      buttons.forEach((b) => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

    });

  });

  // ============================
  // DONATE FORM SUBMIT
  // ============================
  donationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const amount = parseInt(amountInput.value, 10);

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const confirmDonate = confirm(
      `Proceed to donate ₦${amount.toLocaleString()}?`
    );

    if (!confirmDonate) return;

    window.location.href = PAYSTACK_URL;

  });

  // ============================
  // COUNTER ANIMATION
  // ============================
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {

    const updateCounter = () => {

      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;

      const increment = target / 80;

      if(current < target){

        counter.innerText = `${Math.ceil(current + increment)}`;

        setTimeout(updateCounter, 30);

      } else {

        counter.innerText = target;

      }

    };

    updateCounter();

  });

})();
