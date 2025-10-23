// Algoritmo act5 en JavaScript
const prompt = require("prompt-sync")();
// Medidas en sistema métrico
let busto_cm = 89;
let cintura_cm = 58;
let cadera_cm = 89;
let estatura_mts = 1.70;
let peso_kg = 53;

// Conversión a sistema imperial
let busto_in = busto_cm / 2.54;
let cintura_in = cintura_cm / 2.54;
let cadera_in = cadera_cm / 2.54;
let estatura_ft = estatura_mts * 3.281;
let peso_lb = peso_kg * 2.205;

// Mostrar resultados
console.log("Medidas en pulgadas:");
console.log("Busto:", busto_in.toFixed(2));
console.log("Cintura:", cintura_in.toFixed(2));
console.log("Cadera:", cadera_in.toFixed(2));
console.log("Estatura en pies:", estatura_ft.toFixed(2));
console.log("Peso en libras:", peso_lb.toFixed(2));