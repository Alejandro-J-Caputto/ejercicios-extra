//UTILIZANDO UN BUCLE MOSTRAR LA MEDIA Y LA SUMA DE DOS RESULTADOS. Se parara la operacion con un numero negativo





var suma = 0;
var contador = 0; // En este caso el numero de iter

do{
    var numero = parseInt(prompt('Introduce numeros hasta que emtas uno negativo'))
    if(isNaN(numero)){        
        numero = 0;
                                // isNaN is not a number.. en caso de que no sea un numero le damos valor a 0 para que el bucle siga

    }else if(numero >= 0){  
        suma += numero;         // si el numero es mayor igual a 0
        contador ++;            // se iniciara la operacion de suma que sera = a si misma mas le valor
    }                           // el contador se aplica para que se den interaciones
    
}while(numero >= 0);            //mientras el valor de numero sea mayor igual a 0 no se interrumpira

alert('la suma de todos los numeros es : '+ suma);
alert('la media de todos los numeros es: '+ (suma/contador));