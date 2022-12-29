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
    