'use strict'
// Ejercicio 28

// Utiliza el método find() para buscar el primer elemento del siguiente array que tenga una longitud mayor a 5 caracteres e imprímelo en la consola:

const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];

let mayor5 = animales.find(element => element.length >5);
console.log(mayor5);

// Ejercicio 29

// Utiliza el método map() para crear un nuevo array que contenga la longitud de cada elemento del siguiente array y muestra el nuevo array en la consola:

const animales = ['gato', 'elefante', 'perro', 'jirafa', 'tigre'];

let copia = animales.map(element => element.length);

console.log(copia);

// Ejercicio 30

// Usa el método filter() para crear un nuevo array que contenga solo los números mayores a 10 del siguiente array e imprímelo en consola:

const numeros = [5, 12, 8, 16, 7, 11];
let mayor10 = numeros.filter(element => element >10);
console.log(mayor10);

// Ejercicio 31

//Utiliza el método reduce() para calcular el producto de todos los elementos del siguiente array:

const numeros = [1, 2, 3, 4, 5];

let producto = numeros.reduce( (x,y) => x*y);
console.log(producto);

// Ejercicio 32

// Usa el método sort() para ordenar el siguiente array de números en orden ascendente:
const numeros = [18, 5, 32, 7, 15];

let ordenascendente = numeros.sort((a,b) => a - b);
console.log(ordenascendente);

/* Explicacion de como ordena el metodo sort()
function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

*/ */