const prompt = require('prompt-sync')();
let respuesta = "";

while (respuesta.toLowerCase() !== "n") {
  respuesta = prompt("¿Deseas continuar? (Pulsa 'n' para salir):");

  // Si el usuario cancela el prompt, también se termina
  if (respuesta === null) {
    break;
  }
}

console.log("Programa finalizado.");