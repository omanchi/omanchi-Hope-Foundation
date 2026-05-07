let children = 74;
let counterEl = document.getElementById("childrenCount");

// simulate donation impact
function increaseImpact(amount){
if(amount >= 10000){
children += 1;
counterEl.innerText = children;
}
}

// preset donation buttons
function donate(amount){
alert("You selected ₦" + amount);
increaseImpact(amount);
}

// custom donation
function customDonate(){
let value = document.getElementById("customAmount").value;

if(value && value >= 10000){
alert("Donation of ₦" + value + " selected");
increaseImpact(value);
}else{
alert("Minimum donation is ₦10,000");
}
}
