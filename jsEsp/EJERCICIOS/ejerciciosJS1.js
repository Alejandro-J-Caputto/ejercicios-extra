//EJERCICIO 1

/* Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/ 

var numero1 = parseInt(prompt('Introduce el primer numero'));
var numero2 = parseInt(prompt('Introduce el segundo numero'));

if(numero1 == numero2){
    alert('los dos numeros son iguales');
}else if(numero1 > numero2){
    alert('el numero 1 es mayor');
}else if(numero2> numero1){
    alert('el numero 2 es mayor al numero 1 ');
}else{
    alert('introduce numeros correctos');
}

//plus si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir

while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1=parseInt(prompt('Introduce el primer numero',0));
    numero2= parseInt(prompt('introduce el segundo numero', 0));

}
