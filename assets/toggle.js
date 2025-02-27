document.getElementById("cashout").style.display="none";
document.getElementById("transection-history").style.display="none";
document.getElementById("add-money-box").addEventListener('click',function(){


 handleToggle("addmoney","block");
 handleToggle("cashout","none");
 handleToggle("transection-history","none");

})
function handleToggle(id,status){
    document.getElementById(id).style.display=status;
 
}

document.getElementById("cashout-box").addEventListener('click',function(){

    handleToggle("cashout","block");
    handleToggle("addmoney","none");
    handleToggle("transection-history","none");
})

document.getElementById("Transaction-box").addEventListener("click",function(){
    handleToggle("cashout","none");
    handleToggle("addmoney","none");
    handleToggle("transection-history","block");
})