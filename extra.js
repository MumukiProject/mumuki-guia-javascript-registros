/*<hidden-for-student@*/
// Ver https://github.com/MumukiProject/mumuki-apendice-imperativa-javascript/blob/master/biblioteca.js

// =============
// Lección 1 y 2
// =============
/*@hidden-for-student>*/

function longitud(unString) /*<elipsis-for-student@*/ {
  return unString.length;
} /*@elipsis-for-student>*/
// Retorna cuan largo es un string
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4

//==============================================================

function convertirEnMayuscula(unString) /*<elipsis-for-student@*/ {
  return unString.toUpperCase()
} /*@elipsis-for-student>*/
// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  ム convertirEnMayuscula("hola")
//  "HOLA"

//==============================================================

function comienzaCon(unString, otroString) /*<elipsis-for-student@*/ {
  return unString.startsWith(otroString);
} /*@elipsis-for-student>*/
// Retorna un booleano que nos dice si unString empieza con otroString
//
// Por ejemplo:
//
//  ム comienzaCon("hola todo el mundo", "hola todo")
//  true

//==============================================================

/*<hidden-for-student@*/
// ==============
// Lección 3 y 4
// ==============
/*@hidden-for-student>*/

/*<hidden-for-student@*/
var fakeConsole;

function setUpFakeConsole() {
  fakeConsole = {
    lines: [],
    log: function(line) {
      this.lines.push(line + "\n");
      console.log(line);
    },
    toString: function() {
      return String.prototype.concat.apply([], this.lines);
    }
  };
}

function setUpRealConsole() {
  fakeConsole = console;
}

setUpFakeConsole();
/*@hidden-for-student>*/

function imprimir(unString) /*<elipsis-for-student@*/ {
  fakeConsole.log(unString)
} /*@elipsis-for-student>*/
// Imprime por pantalla unString
//
// Por ejemplo:
//
//  ム imprimir("¡estoy imprimiendo!")
//  ¡estoy imprimiendo!

//==============================================================

function tirarDado() /*<elipsis-for-student@*/ {
  return Math.floor(Math.random() * 6) + 1
} /*@elipsis-for-student>*/
// Retorna un número al azar entre 1 y 6
//
// Por ejemplo:
//
//  ム tirarDado()
//  5
//  ム tirarDado()
//  1
//  ム tirarDado()
//  2

//==============================================================


/*<hidden-for-student@*/
// =========
// Lección 5
// =========
/*@hidden-for-student>*/

function listasIguales(unArray, otroArray) /*<elipsis-for-student@*/ {
    if (unArray.length != otroArray.length)
        return false;
    for (var i = 0; i < unArray.length; i++) {
        if (unArray[i] instanceof Array && otroArray[i] instanceof Array) {
            if (!arraysIguales(unArray[i], otroArray[i]))
              return false;
        }
        else if (unArray[i] != otroArray[i])
          return false;
    }
    return true;
} /*@elipsis-for-student>*/
// Retorna un booleano que nos dice si dos listas son iguales
//
// Por ejemplo:
//
//  ム listasIguales([1, 2, 3], [1, 2, 3])
//  true
//  ム listasIguales([1, 2, 3], [4, 5, 3])
//  false

//==============================================================

function longitud(unStringOLista) /*<elipsis-for-student@*/ {
  return unStringOLista.length;
} /*@elipsis-for-student>*/
// Retorna el largo de un string o una lista
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4
//  ム longitud([5, 6, 3])
//  3

//==============================================================

function agregar(unaLista, unElemento) /*<elipsis-for-student@*/ {
  return unaLista.push(unElemento);
} /*@elipsis-for-student>*/
// Inserta unElemento al final de unaLista.
// Este es un procedimiento que no retorna nada pero modifica a unaLista:
//
//  ム let cancionesFavoritas = ["La colina de la vida", "Zamba por vos"]
//  ム agregar(cancionesFavoritas, "Seminare")
//  ム cancionesFavoritas
//  ["La colina de la vida", "Zamba por vos", "Seminare"]

//==============================================================

function remover(unaLista) /*<elipsis-for-student@*/ {
  return unaLista.pop();
} /*@elipsis-for-student>*/
// Quita el último elemento de unaLista y lo retorna.
//
//  ム let listaDeCompras = ["leche", "pan", "arroz", "aceite", "yerba"]
//  ム remover(listaDeCompras)
//  "yerba"
//  ム listaDeCompras
//  ["leche", "pan", "arroz", "aceite"]

//==============================================================

function posicion(unaLista, unElemento) /*<elipsis-for-student@*/ {
  return unaLista.indexOf(unElemento);
} /*@elipsis-for-student>*/
// Retorna la posición se encuentra un elemento.
// Si el elemento no está en la lista, retorna -1
//
//  ム let premios = ["dani", "agus", "juli", "fran"]
//  ム posicion(premios, "dani")
//  0
//  ム posicion(premios, "juli")
//  2
//  ム posicion(premios, "feli")
//  -1
