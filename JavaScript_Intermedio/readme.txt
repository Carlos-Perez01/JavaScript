DOM 

Document Object Model

* Nodos
* Selectores
* Window
* Document

Eventos
*******

Eventos del teclado:
    - keyDown: Tecla hundida
    - keyUp: Al dejar de presionar una tecla
    -keyPress: Tecla hundida y sólo números y caracteres.
Eventos del ratón:
    - onclick: Click sobre un elemento
    - onmousedown: Se pulsa un botón del ratón sobre un elemento
    - onmouseenter: El puntero de ratón entra en el área de un elemento
    - onmousemove: El puntero del ratón se está moviendo sobre el área de un elemento
Eventos del navegador:
    -DOMContentLoaded: La página se ha cargado
Eventos Propios:
    - Podemos crear todo tipo de eventos para lo que queramos


Expresiones Regulares
*********************

Se utilizan para buscar, leer y reemplazar informació de cadena de texto.

Estructura: /expresión-regular/[parámetros]

Ejemplo: /(aaa)/gi (Coincidencia: caaandy, cAAAndy, cAaAndy)

Metodos utilizados:
 - search
 - exec
 - test
 - match

Reglas:
    - "." --> Se interpreta como caracteres
    - "\" --> Se utiliza para que el siguiente carácter de la expresión adquiera un significado ó 
    deje de tenerlo.
    - "[]" --> Se utiliza para crear grupo de caracteres, rangos..
    - "|" --> Se utiliza para indicar varias opciones
    - "$" --> Representa el final de un string. Ejemplo: .$ busca donde temina en pundo una oración,parrafo o texto

Caracteres especiales:
    - \t: Representa un tabulador.
    - \r: Representa el "retorno de carro".
    - \n: Representa el salto de linea
    - \d: Representa un dígito del 0 al 9
    - \w: Representa cualquier carácter alfanumérico
    - \s: Representa un espacio en blanco

