document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const amount = getInputValueById("cashout-amount")
    const pinNumber = getInputValueById("chashout-pin");
    const mainBalance = getInnerTextById("main-balance");
    const CashOutContainer = document.getElementById("Transaction-section");
    if(accountNumber.length ===11){
        if(pinNumber === 1234){
            const sub = mainBalance - amount;
            setInnerText("main-balance",sub);
            const transactionContainer = document.getElementById("transaction-container");
            const div = document.createElement("div");
           
            div.innerHTML = `
            
            <h2> Added Amount : ${amount } from this ${accountNumber};
        
            `
            transactionContainer.appendChild(div)
        }
        
        

        else{
            alert("Give valid PIN");
        }
    }
    else{
        alert("Give valid Account Number");
    }
})