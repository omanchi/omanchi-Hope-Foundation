(function(){

const PAYSTACK_URL = "https://paystack.shop/pay/mrtyf-aq5c";

const EMAILJS_SERVICE_ID = "service_gemvr0r";
const EMAILJS_TEMPLATE_ID = "template_3dcc8lq";
const EMAILJS_PUBLIC_KEY = "q_UrmnYn1ewI1H4A_";

emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.querySelector(".donation-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", async (e)=>{
e.preventDefault();

const name = inputs[0].value;
const email = inputs[1].value;
const amount = inputs[2].value;

const transactionId = "TXN-" + Date.now();

try{
await emailjs.send(
EMAILJS_SERVICE_ID,
EMAILJS_TEMPLATE_ID,
{
to_name:name,
to_email:email,
amount:amount,
transaction_id:transactionId
}
);
}catch(err){
console.log(err);
}

window.location.href = PAYSTACK_URL;

});

})();
