const prompt = require("prompt-sync")();

let edad;
edad = parseInt(prompt("Ingresa la edad: "));

if (edad > 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
