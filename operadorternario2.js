const prompt=require("prompt-sync")();

function calificacion(){
 let cal=parseInt(prompt("ingresa la calificacion"))
 let respuesta= cal > 6 && cal <8? "regular" : "exelente"
 console.log(`la calificacion es ${cal} y es ${respuesta}`);
}

calificacion();