document.getElementById("coupont-btn").addEventListener("click",function(event){
event.preventDefault();


const coupon = document.getElementById("bonus-number").value;

console.log(coupon);

const mainBalance = getInnerTextById("main-balance");

if(coupon === "1234"){
    const sum = mainBalance + 1000;
    setInnerText("main-balance",sum)
}
else if(coupon === "12580"){
    const sum = mainBalance + 2000;
    setInnerText("main-balance",sum)
}
else{
    const sum = mainBalance + 10;
    setInnerText("main-balance",sum)
}


})