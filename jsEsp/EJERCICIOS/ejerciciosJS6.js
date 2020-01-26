/*
 Que nos diga si un numero es par o impar
 Ventana prompt
 verficar si el numero es valido
 mostrar si el numero es par o impar
 */


var number  = parseInt(prompt('Introduce un número'));
    
while(isNaN(number)){  //while es muy util para controlar que el tipo de dato que necesitamos se introduce correctamente
    number = parseInt(prompt('Introduce un número'));

}
if( number % 2 ==0 ){
    alert('es un numero par')
}else{
    alert('es un numero impar')
}


