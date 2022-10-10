// Explicar donde esta el error en este codigo y arreglo

let numero = prompt("digite cualquier numero:");

if (numero == Number(numero)) {
    alert("llegue aqui");
}

/** El codigo presentaba un problema, porque se estaba ingresando un string y no un numero, por lo que la variable se estaba igualando un 
 texto y no a un valor, por lo que habia que declarar que el valor ingresado era un valor numerico y no un texto, en este ejercicio, habia
 que especificar el tipo de dato ingresado*/