function maior(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
var maior = num1;

    if(num2 > maior)
     maior = num2;
alert("Maior: "+maior);
  }
function menor(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
var menor = num1;

    if(num2 < menor)
     menor = num2;
alert("Menor: "+menor);
   }