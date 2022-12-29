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