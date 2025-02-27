document.getElementById("transfer-btn").addEventListener("click",function(){

    const amount = getInputValueById("transfer-amount");
    const pinNumber = getInputValueById("trnsfer-pin");
    const accountNumber = document.getElementById("user-number").value;
    const mainBalance =  getInnerTextById("main-balance");
   
   if(accountNumber.length === 11){
    if(pinNumber === 1234){
        
   const sum = mainBalance - amount;

//    document.getElementById("main-balance").innerText = sum;
setInnerText("main-balance",sum);
const transactionContainer = document.getElementById("transaction-container");
    const div = document.createElement("div");
   
    div.innerHTML = `
    
    <h2> Added Amount : ${amount } from this ${accountNumber};

    `
    transactionContainer.appendChild(div)

    }
    else{
        alert("Give valid pin");
    }
   }
   else{
    alert("Give 11 digit numbers");
   }


})