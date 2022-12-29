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
    