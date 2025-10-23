const prompt = require('prompt-sync')();

let N = parseInt(prompt("Ingresar número N: "));
let contador = 0;

console.log("Los números impares de " + N + " son:");

for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        contador++;
    }
}

console.log("Cantidad de números impares encontrados:", contador);