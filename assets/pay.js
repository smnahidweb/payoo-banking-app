document.getElementById("pay-btn").addEventListener("click",function(event){

    event.preventDefault();

   const amount = getInputValueById("pay-amount");
   const pinNumber = getInputValueById("pay-pin");
   const accountNumber = document.getElementById("pay-number").value;
   const mainBalance =  getInnerTextById("main-balance");
   const container = document.getElementById("transaction-container");
   if(accountNumber.length === 11){
    if(pinNumber === 1234){
     const sub = mainBalance - amount;
    //  document.getElementById("main-balance").innerText = sub;

    setInnerText("main-balance",sub);

    const div = document.createElement("div");
    div.innerHTML =`
    
    <h1> Pay Amount: ${amount} </h1>
    <p> Account Number: ${accountNumber} </p>

    

    `
    container.appendChild(div);

    }
    else{
        alert("Give Valid PIN")
    }
   }
   else{
    alert("Give 11 digit numbers");
   }


})