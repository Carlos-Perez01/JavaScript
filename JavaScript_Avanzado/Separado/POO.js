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