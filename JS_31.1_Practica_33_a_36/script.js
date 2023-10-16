'use strict'
'use strict'
// Ejercicio 33

// Dada la siguiente cadena de texto JSON, imprime por consola los nombres de los empleados cuyo salario es mayor a 3000. Recuerda que para poder trabajar con los datos de la cadena de texto JSON debes convertirlos primero.

const jsonEmpleados = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';

const empleados= JSON.parse(jsonEmpleados);
console.log(empleados);
for (let i=0; i<empleados.length; i++){   
  
   if(empleados[i]["salario"] > 3000){
     console.log(empleados[i]["nombre"]);
   }
}

/* Solucion coding rooms

const empleados = JSON.parse(jsonEmpleados);

empleados.forEach(empleado => {   
  if (empleado.salario > 3000) {    
      console.log(empleado.nombre);
  } 
});            */

console.log("<--------------------------------------------->");
// Ejercicio 34

// Dada la siguiente cadena de texto formato JSON, conviértela en un objeto JS y muestra el resultado en consola:

const textoJson = '[{"nombre":"Ana","salario":3500},{"nombre":"Pedro","salario":2000},{"nombre":"Marta","salario":4000}]';

const texto= JSON.parse(textoJson);
console.log(texto);

console.log("<--------------------------------------------->");
// Ejercicio 35

// Utiliza una IIFE para generar un número aleatorio entre dos números dados como parámetros y muestra el resultado en consola.

(function (min, max) {
  let num = Math.floor(Math.random()* (max-min+1))+min;
  console.log(num);
})(1,6);

//Solucion codingRooms
// (function (min, max) {
//   const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(numeroRandom);
// })(5, 10);


console.log("<--------------------------------------------->");
// Ejercicio 36
// Crea una función que retorne un closure que actúe como contador de veces que se ha llamado. Cada vez que se llame al closure, debe mostrar en consola el número de veces que ha sido llamado hasta el momento.

function contador() {
  let numVeces=0;
  function contar() {
    numVeces++;
    console.log(`El closure se ha repetido ${numVeces} vaces`);
  }  
  return contar;
}
const miContador =contador();

miContador();
miContador();
miContador();
miContador();

//Solucion CodingRooms