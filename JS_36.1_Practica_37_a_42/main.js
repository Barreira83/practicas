'use district'
// Ejercicio 37

// Utiliza setTimeout para mostrar en consola un mensaje "¡Hola, Mundo!" después de 3 segundos.

setTimeout(() => {
    console.log("Hola, mundo");
  }, 5500);

  //-----------------------------------------------------------
function hola() {
    console.log("Hola, caracola");    
}
setTimeout(hola, 5000);


// Ejercicio 38

// Crea una función que reciba un número entero y muestre en consola todos los números desde ese número hasta 0, utilizando setInterval para decrementar el número cada segundo.


function countdown(numero) {
  console.log(numero);
  const intervalId = setInterval(() => {
    numero--;
    if (numero >= 0) {
      console.log(numero);
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown(10); // Ejemplo con el número 10



// Ejercicio 39

// Crear una función que acepte un número como argumento y retorne una promesa. Esta promesa deberá resolverse si el número es par y rechazarse si es impar. Después, invoca la función y muestra el resultado en la consola.
function comprobarParImpar(num) {
  return new Promise( (resolver , rechazar) => {

    if (num % 2 ===0) {
      resolver(`El numero ${num} es Par`);
    }else{
      rechazar(`El numero ${num} es Impar`);
    }
  }
  )
}

// Invocamos la función y mostramos el resultado en la consola:
comprobarParImpar(4)
  .then(resultado => {    console.log(resultado);  })
  .catch(error => {    console.log(error);  });

comprobarParImpar(5)
  .then(resultado => {    console.log(resultado);  })
  .catch(error => {    console.log(error);  });


//   Ejercicio 40

// Crea una función que realice una petición HTTP a la API de "Rick and Morty" con fetch y muestre en la consola la información obtenida del personaje con id 3, utilizando el método then(). A continuación se muestra la dirección que devuelve un JSON con la información del personaje:



fetch ("https://rickandmortyapi.com/api/character/3")
  .then ((respuesta) => respuesta.json()) //convierte la respuesta en un objeto
  .then((datos) => {console.log(datos);})
  .catch((error) => {console.error("Error", error);});

//   'use strict';

// function getCharacterData(id) {
//   const url = `https://rickandmortyapi.com/api/character/${id}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((character) => {
//       console.log('Información del personaje:', character);
//     })
//     .catch((error) => {
//       console.error('Error:', error.message);
//     });
// }

// // Llama a la función con el ID del personaje que deseas consultar
// getCharacterData(3);

// /* Reemplaza el 3 en getCharacterData(3) con el ID del personaje que deseas obtener de la API de "Rick and Morty". */


// Ejercicio 41

// Reescribe el código JavaScript del ejercicio anterior utilizando la sintaxis Async/Await, no olvides utilizar un bloque de try/catch para manejar los errores adecuadamente.



async function getCharacterData(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const respuesta = await fetch(url);
    const personaje = await respuesta.json();
    console.log('Información del personaje:', personaje);
  } catch {
    console.error('Error:', error.message);
  }
}

// Llama a la función con el ID del personaje que deseas consultar
getCharacterData(2);


// Ejercicio 42

// Crea un módulo para gestionar tareas:

