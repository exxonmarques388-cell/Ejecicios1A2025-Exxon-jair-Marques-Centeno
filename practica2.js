const prompt = require('prompt-sync')();


// Solicitar datos al usuario
const edad = parseInt(prompt("Ingresa tu edad:"), 10);
const nota = parseFloat(prompt("Ingresa tu nota:"));
const sexo = prompt("Ingresa tu sexo (M o F):");

// Evaluar si una solicitud es aceptada, posible o no aceptada
function evaluarSolicitud(edad, nota, sexo) {
  if (nota >= 5 && edad >= 18) {
    if (sexo.toUpperCase() === 'F') {
      return "ACEPTADA";
    } else if (sexo.toUpperCase() === 'M') {
      return "POSIBLE";
    }
  }
  return "NO ACEPTADA";
}

// Evaluar y mostrar el resultado
const resultado = evaluarSolicitud(edad, nota, sexo);
console.log(`Resultado: ${resultado}`);