

//Tabla de multiplicar de un numero introducido por pantalla

var multi = parseInt(prompt('De que numero quieres la tabla?', 1));
document.write(`<h1> La tabla del ${multi} es la siguiente: </h1>`)
for(i = 1; i <= 10 ; i++){
    document.write(i +" x " + multi+" = "+(i*multi)+" <br/> ");
}

//Todas las tablas de multiplicar
for(c = 1; c <= 10 ; c++){
     document.write(`<h1> La tabla del ${c} es la siguiente: </h1>`)
            for(i = 1; i <= 10 ; i++){
                document.write(i +" x " + c +" = "+(i*c)+" <br/> ");
            }
}


