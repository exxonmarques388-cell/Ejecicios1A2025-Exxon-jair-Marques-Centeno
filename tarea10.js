const prompt = require('prompt-sync')();

let indice = parseFloat(prompt("Ingrese el índice de contaminación de la ciudad: "));

if (indice <= 37) {
    console.log("Nivel de contaminación: Aceptable");
} else {
    if (indice >= 38 && indice <= 55) {
        console.log("Nivel de contaminación: Desagradable");
    } else {
        console.log("Nivel de contaminación: Peligroso");
    }
}