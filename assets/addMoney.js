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
const transactionContainer = document.getElementById("Transaction-section");
    const p = document.createElement("p");
    p.innerText=`
     added ${amount} from ${accountNumber} account
    `
    transactionContainer.appendChild(p);

  }

   }
   else{
    alert("Give valid 11 digit Number");
   }

})