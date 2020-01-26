/* Calculadora */


/*
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultao de sumar, restar,multiplicar y divicir esas dos cigras.
*/

var numero1 = parseInt(prompt('Introduce el primer numero'),0);
var numero2 = parseInt(prompt('Introduce el segundo numero'),0);

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero'),0);
    numero2 = parseInt(prompt('Introduce el segundo numero'),0);

    
}

var resultado = 'La suma es: '+(numero1+numero2)+'<br/>'+
                'La resta es: '+ (numero1-numero2)+'<br/>'+
                'la multiplicacion: '+(numero1*numero2)+'<br/>'+
                'la division es: '+(numero1/numero2)+ '<br/>'
document.write(resultado)


