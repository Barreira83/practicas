'use strict'

// #Ejercicio 1
// Crea el código para que cuando se cargue la página, el navegador pregunte al usuario su nombre por medio de un prompt y muestre un mensaje e de bienvenida en un alert tanto si el usuario ingresó un nombre como si le dió a cancelar.

const nombre = window.prompt("¿Cual es tu nombre?");
window.alert(`Bienvenid@ ${nombre}!!!!`);

//Resolucion coding Rooms------------------------------------
// // Solicitamos el nombre del usuario usando un prompt
// const nombreUsuario = window.prompt("Por favor, ingresa tu nombre:");

// // Verificamos si el usuario ingresó un nombre (no canceló ni dejó en blanco)
// if (nombreUsuario !== null && nombreUsuario.trim() !== "") {
//   // Mostramos un mensaje de bienvenida en un alert
//   window.alert("¡Bienvenid@, " + nombreUsuario + "!");
// } else {
//   // Mostramos un mensaje indicando que no se ingresó un nombre
//   window.alert("No ingresaste un nombre, pero igualmente eres bienvenid@.");
// }
