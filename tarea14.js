const prompt = require('prompt-sync')();

console.log("Este programa lee un número N y determina si es par o impar, y si es mayor que cero.");

let n = parseInt(prompt("Ingresa un número: "));

if (n > 0) {
    console.log("El número ingresado es mayor que cero");
} else {
    if (n % 2 === 0) {
        console.log("Es número par");
    } else {
        console.log("Es un número impar");
    }
    console.log("El número no es mayor a cero");
}