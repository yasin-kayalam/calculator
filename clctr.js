  

  function clickBtn(val){
   
   document.getElementById("screen").value+=val;
   
   
 }





 function clearScreen(cler){
   location.reload();
   
   document.getElementById("screen").value=cler;
   
}

function clickEqual() {
  let text
  let rslt
  text=document.getElementById("screen").value
  rslt=eval(text)
  document.getElementById('screen').value=rslt
}

function dlt(){

  
  document.getElementById("screen").value="";
  
}
 

 