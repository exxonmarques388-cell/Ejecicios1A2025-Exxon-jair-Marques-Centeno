// Algoritmo trabajo1 en JavaScript
const prompt = require("prompt-sync")();

let valor = parseInt(prompt("Ingrese un valor:"));

if (valor === 0) {
    console.log("valor es cero");
}

if (valor > 0) {
    console.log("positivo");
} else {
    if (valor < 0) {
        console.log("negativo");
    }
}

