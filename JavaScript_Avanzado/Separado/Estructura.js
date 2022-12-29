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
                // Devuelve el ultimo elemento o undefined
                return this.legth() > 0 ? this.items.pop() : undefined;
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
                // Devuelve el primer elemento o undefined
                return this.legth() > 0 ? this.items.shift() : undefined;
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