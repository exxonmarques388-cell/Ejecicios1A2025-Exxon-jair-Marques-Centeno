const prompt = require('prompt-sync')();

function suma() {
    let numero1;
    let numero2;
    numero1 = parseInt(prompt("Ingresa un valor entero: "));
    numero2 = parseInt(prompt("Ingresa otro valor entero: "));
    let resultado = numero1 + numero2;
    console.log(`La suma de ${numero1} y ${numero2} es: ${resultado}`);
}

suma();