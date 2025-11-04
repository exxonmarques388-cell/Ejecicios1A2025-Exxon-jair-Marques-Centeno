//declaracion de arreglos
/*
tipos de datos
number
string
boolean
null
undefined
tipos de datos compuestos
object
array
function
*/

function Datosarreglos() {
    let Datos = [3, 7, 9, 3, 2];
    let suma = 0;
    for (let i = 0; i < Datos.length; i++) {
        if (Datos[i] % 2 === 0) {
            suma += Datos[i];
        }
        console.log(`La suma de los datos pares hasta la posición ${i} es ${suma}`);
    }
}

Datosarreglos();