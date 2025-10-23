const prompt = require('prompt-sync')();

const alumnos = prompt('Ingrese el número de alumnos: ');
const num = Number(alumnos);

if (num > 0 && Number.isInteger(num)) {
  let costoPorAlumno;
  let total;

  if (num >= 100) {
    costoPorAlumno = 65;
    total = num * costoPorAlumno;
  } else if (num >= 50) {
    costoPorAlumno = 70;
    total = num * costoPorAlumno;
  } else if (num >= 30) {
    costoPorAlumno = 95;
    total = num * costoPorAlumno;
  } else {
    total = 4000;
    costoPorAlumno = total / num;
  }

  console.log(`\nNúmero de alumnos: ${num}`);
  console.log(`Costo por alumno: $${costoPorAlumno.toFixed(2)}`);
  console.log(`Costo total a pagar: $${total.toFixed(2)}`);
} else {
  console.log('Número inválido. Intente de nuevo.');
}