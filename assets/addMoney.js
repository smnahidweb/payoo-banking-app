document.getElementById("add-money").addEventListener("click",function(event){
    event.preventDefault();
   const amount =   getInputValueById("amount");
   const pinNumber = getInputValueById("pin");
    const mainBalance= getInnerTextById("main-balance");
   const accountNumber = document.getElementById("Account-number").value;

   if(accountNumber.length === 11){
    
  if(pinNumber === 1234){
   
  const sum = mainBalance + amount;
//   document.getElementById("main-balance").innerText = sum;
     setInnerText("main-balance",sum);
const transactionContainer = document.getElementById("transaction-container");
    const div = document.createElement("div");
   
    div.innerHTML = `
    
    <h2> Added Amount : ${amount } from this ${accountNumber};

    `
    transactionContainer.appendChild(div)
  }

   }
   else{
    alert("Give valid 11 digit Number");
   }

})