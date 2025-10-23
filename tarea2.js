// Algoritmo trabajo2 en JavaScript
const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Di tu edad:"));

if (edad >= 18) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}