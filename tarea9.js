const prompt = require('prompt-sync')();

// Leer primeros dos números
console.log("Introducir primer número:");
let num1 = parseInt(prompt("> "));

console.log("Introduce segundo número:");
let num2 = parseInt(prompt("> "));

let resultado = num1 + num2;
console.log("El resultado es:", resultado);

// Leer otros dos números
let num3 = parseInt(prompt("Introduce tercer número: "));
let num4 = parseInt(prompt("Introduce cuarto número: "));

let resultado2 = num3 + num4;
console.log("El resultado es:", resultado2);

// Comparar resultados
if (resultado < resultado2) {
    console.log("El número más alto es:", resultado2);
} else {
    console.log("El número más alto es:", resultado);
}