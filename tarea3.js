// Algoritmo actividad3 en JavaScript
const prompt = require("prompt-sync")();

let cal = parseInt(prompt("Ingresa tu calificación:"));

if (cal >= 90 && cal <= 100) {
    console.log("Excelente");
}

if (cal >= 70 && cal <= 89) {
    console.log("Bien");
}

if (cal < 70) {
    console.log("Reprobado");
}