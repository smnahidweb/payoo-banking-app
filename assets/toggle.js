document.getElementById("cashout").style.display="none";
document.getElementById("transection-history").style.display="none";
document.getElementById("Transfer-section").style.display="none";
document.getElementById("payBil-section").style.display="none";
document.getElementById("Bonus").style.display="none";
// document.getElementById("Bonus").style.display="none";
 document.getElementById("add-money-box").addEventListener('click',function(){


 handleToggle("addmoney","block");
 handleToggle("cashout","none");
 handleToggle("transection-history","none");
 document.getElementById("Transfer-section").style.display="none";
document.getElementById("payBil-section").style.display="none";
document.getElementById("Bonus").style.display="none";

})
function handleToggle(id,status){
    document.getElementById(id).style.display=status;
 
}

document.getElementById("cashout-box").addEventListener('click',function(){

    handleToggle("cashout","block");
    handleToggle("addmoney","none");
    handleToggle("transection-history","none");
    handleToggle("payBil-section","none");
    handleToggle("Transfer-section","none");
    
    

})

document.getElementById("Transaction-box").addEventListener("click",function(){
    handleToggle("cashout","none");
    handleToggle("addmoney","none");
    handleToggle("transection-history","block");
    handleToggle("payBil-section","none");
    handleToggle("Bonus","none");
    // document.getElementById("Transfer-section").style.display="none";
    handleToggle("Transfer-section","none");


})

document.getElementById("transfer-box").addEventListener('click',function(){
    
   handleToggle("Transfer-section","block");
   handleToggle("cashout","none");
   handleToggle("addmoney","none");
   handleToggle("transection-history","none");
   handleToggle("payBil-section","none");
   handleToggle("Bonus","none");

})

document.getElementById("pay-bil-box").addEventListener("click",function(){
    handleToggle("payBil-section","block");
    handleToggle("Transfer-section","none");
    handleToggle("cashout","none");
    handleToggle("addmoney","none");
    handleToggle("transection-history","none");

})


document.getElementById("bonus-box").addEventListener("click",function(){
    handleToggle("payBil-section","none");
    handleToggle("Transfer-section","none");
    handleToggle("cashout","none");
    handleToggle("addmoney","none");
    handleToggle("transection-history","none");
    handleToggle("Bonus","block");
})