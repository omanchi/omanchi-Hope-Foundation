(function(){

const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

const EMAILJS_SERVICE_ID = "service_gemvr0r";
const EMAILJS_TEMPLATE_ID = "template_3dcc8lq";
const EMAILJS_PUBLIC_KEY = "q_UrmnYn1ewI1H4A_";

emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.querySelector(".donation-form");
const amountInput = document.querySelector("input[type='number']");
const nameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");
const buttons = document.querySelectorAll(".donation-options button");

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    amountInput.value = btn.innerText;
  });
});

form.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const amount = amountInput.value;
  const name = nameInput.value;
  const email = emailInput.value;

  const transactionId = "TXN-" + Date.now();

  try{
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_name: name,
        to_email: email,
        amount: amount,
        transaction_id: transactionId
      }
    );
  }catch(err){
    console.log(err);
  }

  window.location.href = PAYSTACK_URL;
});

})();
