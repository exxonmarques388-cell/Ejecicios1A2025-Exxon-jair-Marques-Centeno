const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingresa la edad: "));

if (edad >= 1 && edad < 10) {
    console.log("Infante");
} else if (edad >= 10 && edad < 15) {
    console.log("Adolescente");
} else if (edad >= 15 && edad <= 20) {
    console.log("Joven");
} else {
    console.log("Miguel reprobado");
}