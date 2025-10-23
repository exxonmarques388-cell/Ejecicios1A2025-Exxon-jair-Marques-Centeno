const prompt = require('prompt-sync')();
let contadorPares = 0;
let numero;

do {
  numero = parseInt(prompt("Teclea un número par (un impar termina el programa):"), 10);
  if (numero % 2 === 0) {
    contadorPares++;
  }
} while (numero % 2 === 0);

console.log("Cantidad de números pares ingresados: " + contadorPares);