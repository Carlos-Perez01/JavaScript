 /*Objetos*/

/*Objetos declarativos o literales*/
var persona1 = {
    nombre: "Carlos",
    edad: 19,
    saludar: function() {
        console.log("Hola");
        console.log("Hola " + this.nombre)
    }
};

console.log(persona1.nombre);
persona1.saludar()

/*Objetos construidos*/

function persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function(){
        console.log("Hola")
    }
};
var Persona = new persona("Pepe", 30);

/*Usando New Object */

var persona2 = new Object({
    nombre:"carlos",
    edad:20,
    saludar: function(){
        console.log("Hola")
    }
});


/*Ejercicio*/

var Jugador ={
    fuerza: 1,
    incremento: function (){
        this.fuerza += 1;
    },
    consultar: function (){
        console.log("Tu fuerza es de: " + this.fuerza);
    }
}

Jugador.consultar()
Jugador.incremento()
Jugador.consultar()

/* Date */

var date = new Date();

console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay();

console.log("Día: " + day + " del mes " + month + " del año " + year)

/* Math */

const PI = Math.PI
console.log(PI)

console.log(Math.min(1,2,3,4,5,5,6,7,-12,-442));
console.log(Math.max(1,2,3,4,5,5,6,7,-12,-442));
console.log(Math.round(4.582849287494)); /*Redondeo a la alta*/
console.log(Math.floor(4.582849287494)); /* Redondeo a la baja*/
console.log(Math.ceil(4.2)) /* Redondeo a la alta si tiene decimales */

var aleatorio = Math.random() /*Siempre es menor a 1*/
/* Para obtener un numero random del 0 al 100 */
function generarnumero(numeromaximo){
    return Math.round(aleatorio * numeromaximo);
}

console.log(generarnumero(100))


/* Array */

var cosa1 = ["carlos", 2, true];

//o también

var cosa2 = new Array(3);

//o también 

var cosa3 = new Array("rojo", "verde", "azul");

console.log(cosa1[1]);
console.log(cosa1[0]);
console.log(cosa1[4]);

/* Para agregar elementos al array */
cosa3.push("negro");
console.log(cosa3)


// Bucles

var nombres = new Array("Pepe", "Lolo", "Juan" , "Ale");

for (var i = 0 ; i < nombres.length; i += 1){
    console.log(nombres[i]);
}



var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];

/* Ejercicio - Mostrar los numeros pares*/
for (var i = 0 ; i < numeros.length; i += 1){
    if (i % 2 == 0){
    console.log(numeros[i])
    }
}

/* Ejercicio - Suma de todos los numeros*/
var total = 0;
for (var l = 0; l < numeros.length; l +=1){
    total += numeros[l];
}
console.log("El total es: " + total)