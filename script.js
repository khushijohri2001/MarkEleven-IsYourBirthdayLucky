var bdate = document.querySelector("#b-date");
var luckyNum= document.querySelector("#l-num");
var checkBtn= document.querySelector("#check-btn");
var showMessage= document.querySelector("#show-Message");




checkBtn.addEventListener('click', checkButtonHandler)
 

function compareValues(sum, luckyNum){
if(sum%luckyNum === 0){
  showMessage.innerText="Yehhii🥳, Your Birthday is Lucky."
}
else{
  showMessage.innerText="Sorry, Your Birthday is not that Lucky😔"
}
}



function calculate(bdateNum){
  bdateNum= bdateNum.replaceAll("-","");
  let sum=0;

  for (let i=0; i<bdateNum.length; i++){
    sum= sum + Number(bdateNum.charAt(i));
  }
  return sum;
  
}

function checkButtonHandler(){
  var bdateNum= bdate.value;
  var sum = calculate(bdateNum);
  
  if (sum&&bdateNum){
    compareValues(sum, luckyNum.value);
  }
  else{
    showMessage.innerText="Please enter a valid value for both fields.";
  }
}
