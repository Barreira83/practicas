'use strict'
//Ejercicio 23
//Crea un array con los números del 1 al 6 e imprime por consola el valor del quinto elemento.
const miArr = [1,2,3,4,5,6];
console.log(miArr[5]);

//Ejercicio 24
//Usa el bucle for/of para recorrer e imprimir en la consola los elementos del array 'colores', que incluye "rojo", "azul", "verde", "amarillo" y "naranja".
const colores = ["rojo", "azul", "verde", "amarillo", "naranja"];
for(verColores of colores){
    console.log(verColores);
}

//Ejercicio 25
// Dado el siguiente array de frutas, utiliza el método push() para agregar las frutas 'fresa' y 'mango' al final del array. Luego, imprime en la consola el array modificado y la nueva longitud del array.
const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];
frutas.push('fresa', 'mango');

for (const valor of frutas){
  console.log(valor);
}
console.log(frutas.length);

// Ejercicio 26
// En el siguiente array de frutas, utiliza el método splice() para eliminar las frutas en las posiciones 1 y 2 y agregar las frutas 'fresa' y 'mango' en su lugar. Luego, imprime en la consola el array modificado y el array de frutas eliminadas.
const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];

const nuevoFrutas= frutas.splice(1,2,'fresa', 'mango');

console.log(frutas);
console.log(nuevoFrutas);


// Ejercicio 27
// Dado el siguiente array de frutas, utiliza el método includes() para determinar si el array contiene las frutas 'uva' y 'cereza'. Luego, imprime en la consola los resultados.

const frutas = ['manzana', 'naranja', 'uva', 'plátano', 'kiwi'];

const uva = frutas.includes('uva');
const cereza = frutas.includes('cereza');


console.log(`El array contiene 'uva'? : ${uva}`); 

console.log(`El array contiene 'cereza'? : ${cereza}`); 
