//function olamundo() {
 //    alert('Olá mundo');
//}

function calcularconsumo(){
 var km, gas, consumo;

 km = document.getElementById ('km').value;
 gas = document.getElementById('gas').value;


 document.getElementById("consumo").innerHTML = km / gas;


}

