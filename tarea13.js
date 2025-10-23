// Algoritmo actividad13 en JavaScript
const prompt = require('prompt-sync')();

let suma = 0;

for (let pares = 500; pares <= 800; pares++) {
    if (pares % 2 === 0) {
        suma += pares;
    }
}

console.log("La sumatoria de los números pares entre 500 y 800 es:", suma);