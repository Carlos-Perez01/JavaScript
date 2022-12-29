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