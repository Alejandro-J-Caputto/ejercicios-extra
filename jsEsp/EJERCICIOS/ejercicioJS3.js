/* Hacer un programa que muestre todos los numeros entre 2 numero introducidos por el usuario */


var numero1 = parseInt(prompt('introduce un primer numero menor'));
var numero2 = parseInt(prompt('introduce un segundo numero mayor'));

document.write('<h1>De' + numero1 + ' a ' +numero2 + 'estan los siguientes numeros</h1>');

for(var i = numero1; i <= numero2; i++){
     document.write(i + '<br/>');
}
