const prompt = require('prompt-sync')();
let numero;

do {
  numero = parseInt(prompt("Teclea un número entre 1 y 5:"), 10);
} while (!(numero >= 1 && numero <= 5));

console.log("¡Gracias! Has ingresado el número " + numero);