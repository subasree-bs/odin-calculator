// alert("HI");
var display= document.getElementById("display");

function myfunction(a){
  document.getElementById("display").value+=a;
  // console.log("HI");
}
 function ac(){
  document.getElementById("display").value="";
 }
 function c(){
  document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
 }
 function calc(){
  document.getElementById("display").value= eval(document.getElementById("display").value);
 }