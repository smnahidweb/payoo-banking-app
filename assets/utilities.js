function getInputValueById(id){
   
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
   return convertedValue;

}

function getInnerTextById(id){

    const text = document.getElementById(id).innerText;
    const convertedText = parseFloat(text);
    return convertedText;

}

function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}