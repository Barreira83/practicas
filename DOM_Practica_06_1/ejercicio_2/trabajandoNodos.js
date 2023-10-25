'use strict'

// #Ejercicio 2
// Copia el código HTML que se encuentra un poco más abajo en el archivo index.html dentro de la carpeta correspondiente al ejercicio 2 de DOM. Luego, crea un archivo JavaScript llamado trabajandoNodos.js e implementa el código necesario para completar las siguientes tareas:



// Selecciona el elemento con el ID title y cambia su color de fuente a 'purple' utilizando la propiedad style.

const titulo = document.getElementById('title');
titulo.style.color="purple";

// 2. Selecciona todos los elementos con la clase important y cambia su color de fondo a 'yellow' utilizando la propiedad style.

 const claseImportante = document.getElementsByClassName("important");

for (let item of claseImportante){
    item.style.backgroundColor= "yellow";
};




// 3. Selecciona todos los elementos li y añade la clase list-item a cada uno de ellos.

const elementosLi = document.querySelectorAll("li");

for(let item of elementosLi){
    item.classList.add("list-item");
}

// 4. Selecciona el primer elemento p y cambia su contenido de texto a 'Este es un nuevo párrafo'.
const primerParrafo = document.querySelector('p');
primerParrafo.textContent= 'Este es un nuevo párrafo';


// 5. Selecciona el elemento con ID title y cambia el color de fondo del elemento a 'lightgray' utilizando la propiedad style.
const tituloFondoLightgray = document.getElementById('title');
tituloFondoLightgray.style.backgroundColor= 'lightgray';


// 6. Añade la clase active al primer elemento li.
const primerLi = document.querySelector('li');
primerLi.classList.add('active');

// 7. Crea un nuevo elemento button con el texto 'Enviar' y añádelo al final del elemento body.
const body = document.querySelector('body');
const boton = document.createElement("button");
 boton.innerText= "Enviar";

 body.appendChild(boton);




//Resolucion coding rooms---------------------------------------
// 'use strict';

// // Tarea 1
// document.getElementById('title').style.color = 'purple';

// // Tarea 2
// const importantElements = document.querySelectorAll('.important');
// importantElements.forEach(
//   (element) => (element.style.backgroundColor = 'yellow')
// );

// // Tarea 3
// const listItems = document.querySelectorAll('li');
// listItems.forEach((item) => item.classList.add('list-item'));

// // Tarea 4
// const firstP = document.querySelector('p');
// firstP.textContent = 'Este es un nuevo párrafo';

// // Tarea 5
// const titulo = document.getElementById('title');
// titulo.style.backgroundColor = 'lightgray';

// // Tarea 6
// const firstLi = document.querySelector('li');
// firstLi.classList.add('active');

// // Tarea 7
// const button = document.createElement('button');
// button.textContent = 'Enviar';
// document.body.appendChild(button);
