const prompt = require("prompt-sync")();

function tablaMultiplicar() {
    let numero1 = parseInt(prompt("Ingresa el valor: "));
    let resultado = 0;

    if (numero1 > 0 && numero1 <= 10) {
        for (let i = 1; i <= 10; i++) {
            resultado = numero1 * i;
            console.log(`${numero1} * ${i} = ${resultado}`);
        }
    } else {
        console.log("Valor inválido. Ingresa un número entre 1 y 10.");
    }
}

tablaMultiplicar();