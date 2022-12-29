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
    