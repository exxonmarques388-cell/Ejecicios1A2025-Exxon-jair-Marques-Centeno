// Algoritmo act8 en JavaScript
const prompt = require("prompt-sync")();

// Precios base
let libro1 = 568;
console.log("El precio de un libro es:", libro1);

// Descuento en libros
let libro2 = libro1 * 0.20;
let libros = libro2 * 4;
console.log("El precio del descuento es:", libro2);

// Precio de discos
let disco1 = 45;
console.log("El precio de los discos es:", disco1);

// Descuento en discos
let disco2 = disco1 * 0.05;
let discos = disco2 * 3;
console.log("El descuento sería de:", disco2);

// Suma de descuentos
let total = libros + discos;
console.log("La suma de descuentos es:", total);

// Precio sin descuentos
let suma1 = 45 * 4;
let suma2 = 568 * 3;
let suma3 = suma2 + suma1;

// Precio final con descuentos aplicados
let suma4 = suma3 - total;
console.log("El resultado con el descuento es:", suma4);