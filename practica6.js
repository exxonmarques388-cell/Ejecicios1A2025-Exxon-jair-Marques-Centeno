const prompt = require('prompt-sync')();
let suma = 0;
let numero;

do {
  numero = parseInt(prompt("Teclea un número (0 para terminar):"), 10);
  if (numero !== 0) {
    suma += numero;
  }
} while (numero !== 0);

console.log("La suma de todos los números tecleados es: " + suma);