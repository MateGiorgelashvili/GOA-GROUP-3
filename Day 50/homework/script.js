let amount = document.getElementById("amount");
let withdrawbtn = document.getElementById("withdraw");
let depositbtn = document.getElementById("deposit");
let balance = document.getElementById("balance");

depositbtn.addEventListener("click", function(){
  let depositAmount = parseFloat(amount.value);

  if (!isNaN(depositAmount)) {
    balance.innerText = parseFloat(balance.innerText) + depositAmount;

    amount.value = "";
  } else {
    alert("Please enter a valid number to deposit.");
  }
});

withdrawbtn.addEventListener("click", function(){
  let withdrawAmount = parseFloat(amount.value);
  if (!isNaN(withdrawAmount)){
    if (withdrawAmount < parseFloat(balance.innerHTML)){
      balance.innerHTML = parseFloat(balance.innerHTML) - withdrawAmount;
    } else{
      alert("You broke go sleep")
    }
    
    amount.value = ""
  } else {
    alert("Please ented valid number to withdraw.");
  }
})
