let btn=document.getElementById("btn");
function mostrar(){   
let txt1=document.getElementById("txt1").value;
let txt2=document.getElementById("txt2").value;
let result=parseInt(txt1)+parseInt(txt2);
console.log("LA SUMA ES = ", result);
result=parseInt(txt1)-parseInt(txt2);
console.log("LA RESTA ES = ", result);
result=parseInt(txt1)*parseInt(txt2);
console.log("LA MULTIPLICACION ES = ", result);
result=parseInt(txt1)/parseInt(txt2);
console.log("LA DIVISION ES = ", result);

let masculino=document.getElementById("m");
let femenino=document.getElementById("f");
if(!masculino.checked&&!femenino.checked){
    alert("MARQUE UNA OPCION")
}
let peso=document.getElementById("peso").value;
    let altura=document.getElementById("altura").value;
    let total=peso/(Math.pow(altura,2));
    console.log("la altura "+peso/(altura*2));

switch(true){
    case  (total<18):
    console.log("BAJO PESO");
    break;
    case (total>18.5&&total<24.9):
    console.log("PESO normal");
    break;
    case (total>25):
    console.log("SOBRE PESO");
    break;
    case total>30:
    console.log("SOBREPESO");
    break;
    default:
    console.log("no muestra nada")
}
}
btn.addEventListener("click",mostrar);
let reini=document.getElementById("reini")
function actu(){
    location.reload;
}
reini.addEventListener("click",actu);