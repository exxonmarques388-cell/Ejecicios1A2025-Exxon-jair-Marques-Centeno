const prompt = require('prompt-sync')();

function potencia() {
    let numero = parseInt(prompt("Ingrese un número: "));
    let exponente = parseInt(prompt("Ingrese el exponente: "));
    let resultado = 1;

    if (exponente > 0) {
        for (let i = 0; i < exponente; i++) {
            resultado *= numero;
        }
    } else if (exponente === 0) {
        resultado = 1;
    } else {
        console.log("El exponente no puede ser negativo.");
        return;
    }

    console.log(`El resultado de ${numero} elevado a ${exponente} es: ${resultado}`);
}

potencia();