const prompt = require('prompt-sync')();

let cal=parseInt(prompt("ingresa la califiacion"))
let resultado=cal>6?"bien":
cal>8?"muy bien":"exelente"
console.log(resultado);
