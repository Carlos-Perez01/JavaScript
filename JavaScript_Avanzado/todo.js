// Coerción a tipos

/*String*/

    /*Coerción explícita

        String(123) // "123"
        String(-14.4) // "-14.4"
        String(null) // "null"
        String(undefined) // "undefined"
        string(true) // "true"
        string(false) // "false"
        let num = 123;
        num.toString(); // "123"
    */

    /*Coerción Implicita

        123 + "" // "123"
        "" + 123 // "123"
    */

/*Boolean*/

    /*Coerción explícita

        Boolean("") // false
        Boolean(0) // false
        Boolean(-0) // false
        Boolean(NaN) // false
        Boolean(undefined) // false
        Boolean(false) // false 
    */

    /*Coerción Implicita

        if (2){ } // Se evalúa true
        !!2 // true , negar dos veces
        2 || "false" // Se evalúa true, devuelve 2
    */

/*Number*/

    /*Coerción explícita
        Number("2") // 2
        Number(null) // 0
        Number(undefined) // NaN
        Number(true) // 1
        Number(false) // 0
        Number("-20.1") // -20.1
        Number("\n") // 0 
        Number("28s") // NaN
        Number(123) // 123
    */

    /*Coerción Implicita
        +"123" // 123
        123 != "123" //false
        4 < "5" // true
        5/null // infinity
        true | 0 // 1
    */

    /*Ejemplos

        "128" + 200 + 3 // "1802003"
        //"hola" ++ "mundo" // "holaNaN"
        !+[]+[]+![] // truefalse

        if ("true" == true){} // se evalúa false, no entra
        if ("ture"){} // Se evalúa true, entra 
        if (!!"false" == !!"true") // Se evalúa true, entra
        if (0) {} // Se evalúa false, no entra
        if (38) {} // Se evalúa true, entra
    */

    /*

        0 == [] // true
        0 == "" // true
        1 == true // true
        1 != "1" // false
        1 != true //false
        
        0 === [] // false
        0 === "" // false
        1 === true // false
        1 !== "1" // true
        1 !== true //true
    */

/*Operadores*/

    /*Operadoeres de comparación
            == 
            !=
            ===
            !==
            <=,>=
            <,>
        */

    /*Operadores de Asignación

        x += y --> x = x + y
        x %= y --> x = x % y
        x **= y --> x = x ** y
        x &&= y --> x && (x = y)
        x ||= y --> x || (x = y)
        */

    /*destructuring

        let variable = [2,4];
        let uno = variable[0];
        let dos = variable[1];

        let [uno,dos] = variable;

    */

    /*Operadores aritméticos
        % --> El resto
        ++ --> Nos suma uno
        -- --> Nos resta uno
        - --> -1
        + --> 1
        ** --> Exponenciales
        x/0 --> infinity
    */

    /*Operadores Ternarios
        x = 5 > 2 ? 'Si!' : 'No!';
        // Te dice si

        x = 5 > 2 ? (2 < 1 ? "es menor" : "es mayor") : "no !"; 
        // Te dice si es mayor
    */

    /*Operadores binarios && y ||
        let a = null
        let b = 3

        let res = a || b // --> 3

        a = 5
        b = 4

        let res = a || b // --> 5

        a = undefined
        b = 4 

        let res = a || b // --> 4
    */

/*Estructura*/

    /*Set

        const A = [1,2,3,2,3]
        new Set(A) = [1,2,3]

        /*add() , has() y delete()
            const setEjemplo = new Set([2,3,3,2]); // --> Solo almacena [2,3]

            setEjemplo.has(2); // --> true
            setEjemplo.has(1); // --> false

            setEjemplo.add(2); // --> [2,3]
            setEjemplo.add(1); // --> [2,3,1]

            setEjemplo.delete(2) // --> [3,1]
            setEjemplo.add(2); // --> [3,1,2]

            const newObj = {}
            const otherObj = {}

            setEjemplo.add(newObj); // --> [3,1,2,{}]
            setEjemplo.add(newObj); // --> [3,1,2,{}]
            setEjemplo.add(otherObj); // --> [3,1,2,{},{}]
        */

    

    /*Map
    
        const B {a:'v1', b:'v2'};
        new Map(B) = {a:'v1', b:'v2'}

        /*get() , set() y delete()
            const mapEjemplo = new Map({a: 1, b: 4}) // --> Almacena {a: 1, b: 4}

            mapEjemplo.has("a") // --> true
            mapEjemplo.has("c") // --> false

            mapEjemplo.set("c", 5) // --> {a: 1, b: 4, c: 5}
            mapEjemplo.get("c") // --> 5

            mapEjemplo.delete("a") // --> {b: 4, c: 5}

            const newObj = {}

            mapEjemplo.set(newObj, 5) // --> {b: 4, c: 5, ref: 5}
            mapEjemplo.delete({}) // --> {b: 4, c: 5, ref: 5}
            mapEjemplo.delete(newObj) // --> {b: 4, c: 5}

        */

    

    /*Pilas y Colas
    
        class Stack {
            constructor(in_items){
                this.items = in_items || [];
            }
            lenght(){
                return this.items.length;
            }
            stack(el){
                // Añade un elemento a items
                this.items.push(el);
            }
            unstack() {
                // Devuelve y elimina el ultimo elemento o undefined
                return this.legth() > 0 ? this.items.pop() : undefined;
                // Podemos utilizar push(numero a añadir) para colocarlo el ultimo de la cola
            }
        }

        class Queue {
            constructor(in_items){
                this.items = in_items || [];
            }
            legth(){
                return this.items.length;
            }
            enqueue(el){
                // Añade un elemento a items
                this.items.push(el);
            }
            dequeue(){
                // Devuelve y elimina el primer elemento o undefined
                return this.legth() > 0 ? this.items.shift() : undefined;
                // Podemos utilizar unshift(numero a añadir) para colocarlo el primero de la cola 
            }

        }

    */

    /*Listas enlazadas

        class ListNode {
            constructor(data){
                this.data = data;
                this.nextId = null;
            }
        }

        class LinkedList {
            constructor(head = null) {
                this.head = head;
            }
            getLast(){
                let lastNode = this.head;
                if(lastNode){
                    while(lastNode.next){
                        lastNode = lasNode.next
                    }
                }
                return lastNode
            }
            size(){
                let count = 0;
                let node = this.head;
                while(node){
                    count++;
                    node = node.next
                }
                return count;
            }
        }

        let node1 = new ListNode(2);
        let node2 = new ListNode(5);
        node1.next = node2
        let list = new LinkedList(node1);
    
    */

/*Promesas y Asincronía*/

    /*Estados
        -Pending (Pendiente)
        -Fulfilled (Cumplida) --> then()
        -Rejected (Rechazada) --> catch()

        /*Ejemplos
        
            function compruebaNombre(Nombre){
                return new Promise(function(resolve, reject){
                    if (name === "Carlos"){
                        resolve("¡Bien! Te llamas Carlos");
                    } else {
                        reject("Un momento ¡Tu no eres Carlos!)
                    }
                });
            }

            compruebaNombre("Carlos")
                .then(response => console.log(response))
                .catch(error => console.log(error))

            //Esto imprime "¡Bien! Te llamas Carlos" por consola
        */

        //- Se pueden encadenar Promesas con dos then()
        //- Se puede poner finally() para ver el final idependientemente del Estados



    /*Funciones de ayuda
    
        Promise.all(iterable) --> Recibe un iterable de promesas, y cuando todas se resuevan nos devolvera
        una promesa con la resolución de todas las promesas en array.

        Promise.race(iterable) --> Recibe un iterable de promesas, y nos devuelve una promesa que tiene como
        valor el resultado de la primera promesa.
    */

/*Programación Funcional*/

    /*Funciones Puras
    
        x --> Función 1 
        y --> Función 1
        Funció 1 --> Función 2

        - Se Pueden eliminar sin problema del programa ya que no afecta al resto del codigo

        /*Ejemplos
        
            const dobleNumero = (x) => {
                return x * 2;
            }

            const mitadNumero = (x) => {
                return x / 2;
            }

            dobleNumero(mitadNumero(4));
            mitadNumero(dobleNumero(4)); 
            // Ambas devuelven 4

            ********************************

            const dobleNumero = (x) => {
                return x * 2;
            }

            const cuadradoNumero = (x) => {
                return Math.pow(x, 2);
            }

            dobleNumero(cuadradoNumero(4));
            cuadradoNumero(dobleNumero(4));

            // El primero devuelve 64 
            // El segundo devuelve 32
        */


    /*Función Idempotente

        - El resultado de llamarla varias veces es el mismo que si la llamases una vez.

        /*Ejemplos

            //Pura idempotente
            const hacerPar = (x) => {
                if (x % 2 !== 0){
                    return x + 1;
                } else {
                    return x;
                }
            }

            // hacerPar(5) = 6
            // hacerPar(hacerPar(5)) = 6

            ********************************

            //Pura no idempotente
            const doble = (x) => {
                return x * 2;
            }

            // doble(5) = 10
            // doble (doble(5)) = 20

            ********************************

            //No pura idempotente
            const objeto = { a: 5}
            const hacerPar = () => {
                const { a } = objeto;
                if (a % 2 !==0 ){
                    objeto.a = a + 1;
                }
            }

            // hacerPar() --> objeto.a = 6
            // hacerPar(hacerPar()) --> objeto.a = 6
        */


/*Funciones de Primera clase, orden Superior y Closures*/

    /*Funciones de Primera clase

        - Son de primera clase porque se pueden tratar como variables

        // Ejemplo 1
        const doble = function(x){
            return x * 2;
        }

        //Se ejecuta la función asociada a la variable
        doble(22) // --> 44

        //Ejemplo 2        
        const aplicarFuncion(func, x){
            return func(x)
        }

        aplicarFuncion(doble, 5) // --> 10

        //Ejemplo 3
        const crearFuncion = function(x){
            return () => { return x * 2}
        }

        const retorno = creaFuncion(4)
        retorno() // --> 8

        crea Function(4)() // -->8

    */

    /*Closures
    
        const sinclosure = () => {
            let counter = 0
            return ++counter
        }

        console.log(sinclosure()) // --> 1
        console.log(sinclosure()) // --> 1
        console.log(sinclosure()) // --> 1

        ****************************************************************

        const conclosure = () => {
            let counter = 0
            return () => ++counter
        }

        const incrementar = conclosure()

        console.log(incrementar()) // --> 1
        console.log(incrementar()) // --> 2
        console.log(incrementar()) // --> 3

        - Nos permite tener un scope privado que solo puede ver la función, es una propiedad privada.

        const closure = () => {
            let nombre = "No hay nombre";
            return{
                setNombre: (valor) => {nombre = valor},
                getNombre: () => nombre
            }
        }

        const persona = closure()
        console.log(persona.nombre) // --> undefined
        console.log(persona.getNombre()) // --> No hay nombre
        console.log(persona.setNombre("prueba"))
        console.log(persona.nombre) // --> undefined
        console.log(persona.getNombre()) // --> prueba

    */

    /*Funciones de Orden superior

        - Se utilizan para funciones que ejecutan tareas similares
        - Unen funciones y operan con ellas

        const imprimeholaenbucle = (n) => {
            for (let i = 0; i < n; i++) {
                console.log("hola");
            }
        }

        const imprimeadiosenbucle = (n) => {
            for (let i = 0; i < n; i++){
                console.log("adios");
            }
        }

        // Para hacer una función de orden superior con las dos anteriores sería :

        const imprimehola = () => {
            console.log("hola");
        }

        const hazenbucle = (n, accion) => {
            for (let i = 0; i < n; i++){
                accion();
            }
        }

        hazenbucle(10, imprimehola) // --> Imprime 10 veces hola

        /*Ejemplo
        
            const mayorQue = (n) => {
                return (m) => m > n;
            }

            const mayorQue10 = mayorQue(10);
            const mayorQue15 = mayorQue(15);

            const agregaContador = (func) => {
                let counter = 0;
                return (...arguments) => {
                    counter++
                    console.log(`ejecutado ${counter} vez`);
                    return func(...arguments)
                }
            }

            const sumaContada = agregaContador((x+y) => x + y);
            const restaContada = agregaContador((x-y) => x - y))

            sumaContada(1,2) // --> Ejecutado 1º vez -> 3
            sumaContada(4,5) // --> Ejecutado 2º vez -> 9
            restaContada(20,10) // --> Ejecutado 1º vez -> 10
        */

/*Metodología Funcional*/

    //- No utilizar bucles, sino llamar a las funciones creadas
    //. Se conseja utilizar constantes
    //- .fill(), .pop() o .push(), desaconsejados, ya que sirven para modificar la variable
    //- .pop() --> Elimina el ultimo elemento del array
    //- .fill() --> Sustituye los elementos. Ejemplo: .fill(0,2,4), cambia el array sustituyendo desde la 
    //posición 2 hasta la 4, los valores por 0.
    //- .push() -->  Añade un elemento al array

    /*Programación no Funcional
    
        let miObj = 3;
        miObj = { a:10 * miObj}
        miObj = { b:20}

        // miObj --> {a: 30, b:20}
    */

     /*Programación Funcional
    
        function calcularObj(init){
            return {a: 10 * init, b: 20}
        };

        const miObj = calcularObj(3) // miObj --> {a: 30, b:20}
    */

    /*Hacer copia de Array sin referencia
    
        let variable1 = [20,30,50]
        let variable2 = Array.from(variable1);
        variable2.pop()
        //variable 1 --> [20,30,50]
        //variable 2 --> [20,30] 

        // o también se puede hacer así con el ... que sirve para todo es como un copy y paste

        let variable1 = [20,30,50]
        let variable2 = [...variable1];
        variable2.pop()
        //variable 1 --> [20,30,50]
        //variable 2 --> [20,30] 
    */

    /*Currificación
    
        //Sin currificar

        function esDivisible(num, test) {
            return (test) => {
                return test % num === 0;
            }
        }

        //Currificada

        function esDivisible(num){
            return (test) => {
                return test % num === 0;
            }
        }

        const esDivisible3 = esDivisible(3);
        esDivisible3(9) // true
        esDivisible3(10) // false

    */

/*Programación Orientada a Objetos (POO)*/

    /*POO

        - Se tiene que crear y después llamar, si no no funcionan, es decir las funciones si se pueden
        llamar y después crearlas y los POO no.
    
        class vehiculo{
            constructor(propulsion) {
                this.propulsion = propulsion;
                this.encendido = false;
                this.velocidad = 0;
                this.fuel = 0;
            }

            arrancar(){
                if (this.fuel > 0){
                    this.encendido = true;
                }
            }

            respostar(){
                this.fuel = 100;
            }
        }

        // Lo mismo pero mejor, utilizando Closures

        const Vehiculo = function (propulsion){
            this.propulsion = propulsion;
            this.encendido = false;
            this.velocidad = 0;
            this.fuel = 0;
        }

        // Prototypes, funciones aplicadas a otras funciones

        Vehiculo.prototype.arrancar = function() {
            if (this.fuel > 0){
                this.encendido = true;
            }
        }

        Vahiculo.prototype.respostar = function() {
            this.fuel = 100;
        }
    
    */

/*Modulos*/

    //- Reunen un conjunto de funciones o clases con un espacio de nombres propio

    /*Ejemplos
    
        function miModulo() {
            this.hola = function(){
                return "hola";
            }
            
            this.adios = function() {
                return "adios";
            }        
        }

        module.exports = miModulo;

        var miModulo = require("miModulo");

        var instancia = new miModulo();
        instancia.hola(); // --> hola
        instancia.adios(); // --> adios
    */

    /*Libreria de Funciones
    
        var prom = 0.5;

        function sumaPromediada(a, b) {
            return (a + b) * prom;
        }

        function restaPromediada(a, b) {
            resturn (a - b) * prom;
        }

        //......//

        sumaPromedida(5,20); // --> 12.5
        prom = 1;
        sumaPromedida(5,20); // --> 25


        /*Acercamiento modular
        
            const miModulo = function(){
                var prom = 0.5;
                return {
                    sumaPromedida: function(a, b) {
                        return (a + b) * prom;
                    },
                    restaPromediada: function(a, b){
                        return (a - b) * prom;
                    }
                }
            }

            const {sumaPromediada, restaPromediada} = miModulo();

            sumaPromedida(5,20); // --> 12.5
            prom = 1; // --> Lanzaría un error
            sumaPromedida(5,20); // --> 12.5 
        */
    

    /*Modulos ES6
    
        //miModulo.mjs

        const prom = 0.5;

        function sumaPromedida(a, b){
            return (a + b) * prom;
        }

        function restaPromedida(a, b){
            return (a - b) * prom;
        }

        export{
            sumaPromediada,
            restaPromediada
        }

        //main.js

        import{
            sumaPromediada,
            restaPromediada
        } from "./modules/miModulo.mjs"

        sumaPromediada(10,10); // --> 10
        restaPromediada(20,10); // --> 5


        /*Para aplicarlo en HTML

        <script type="module" src="./modules/miModulo.mjs"></scritpt>

        <script type="module">
            // codigo JS.......
        </script>

        */

        /*Exportaciones por defecto

        export default sumaPromediada(a,b){
            //
        }

        import sumaPromediada from "./modules/modules.mjs";
        
        */
    








