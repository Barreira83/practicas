'use strict'
// Ejercicio 3

// Similar al ejercicio anterior, copia el código de index.html que se encuentra un poco más abajo de estas líneas y pégalo dentro de la carpeta correspondiente al ejercicio 3 de DOM. Luego, crea un archivo JavaScript llamado eventos.js realiza las siguientes tareas:

// Cancela el comportamiento por defecto del enlace (<a>) con ID noLink.

let enlace = document.getElementById("noLink");
enlace.addEventListener('click', (e)=>e.preventDefault());

// 2. Haz que cambie el color del enlace a rojo cuando se pasa el ratón sobre él y color verde cuando el ratón deje de estar sobre el enlace.

enlace.addEventListener('mouseover', function () {
    enlace.style.color="red";   
});

enlace.addEventListener('mouseout', function () {
    enlace.style.color="green";      
});


// 3. Crea una función que cuente los clics pulsados sobre el enlace y los muestre en el párrafo con ID totalClics
let contador =0;
const parrafoTotal= document.getElementById('totalClics');
enlace.addEventListener('click', function () {
    contador++;
    parrafoTotal.textContent= `Clics en el enlace: ${contador}`;    
});


//Resolucion coding rooms-------------------------------------
// 'use strict';

// // Tarea 1
// const noLink = document.querySelector('#noLink');

// noLink.addEventListener('click', function (e) {
//   e.preventDefault();
// });

// // Tarea 2
// noLink.addEventListener('mouseover', (e) => (e.target.style.color = 'red'));
// noLink.addEventListener('mouseout', (e) => (e.target.style.color = 'green'));

// // Tarea 3
// let contador = 0;

// function incrementarContador() {
//   contador++;
//   const totalClics = document.querySelector('#totalClics');
//   totalClics.textContent = `Clics en el enlace: ${contador}`;
// }

// noLink.addEventListener('click', incrementarContador);
