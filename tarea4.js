// Algoritmo actividad4 en JavaScript
const prompt = require("prompt-sync")();

let numero_m = parseInt(prompt("Ingresa un número para realizar la multiplicación"));

for (let l = 1; l <= 10; l++) {
    console.log(`${numero_m} x ${l} = ${numero_m * l}`);
}