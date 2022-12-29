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