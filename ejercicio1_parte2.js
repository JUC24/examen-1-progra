console.log("Ingrese 3 notas, con valores del 0 al 100.");
let val1 = prompt("Ingrese la primera nota: ");
val1 = (Number(val1)); 
let val2 = prompt("Ingrese la segunda nota: ");
val2 = (Number(val2));
let val3 = prompt("Ingrese la tercera nota: ");
val3 = parseInt(val3);

promedio = (val1 + val2 + val3)/ 3;

alert (promedio.toFixed(2));

if (promedio < 65){
  console.log("Esta quedado.")
}
else if (promedio >= 65 && promedio <= 70){
  console.log("Paso raspando")
}
else if (promedio > 70 && promedio <= 85){
  console.log("No esta mal")
}
else if (promedio > 85 && promedio <=99){
  console.log ("Muy bien")
}
else if (promedio = 100){
  console.log ("Excelente te ganaste un abrazo :)")
}
else{
  console.log()
}