'use strict'
// Ejercicio 4

// Dado el siguiente código HTML para un formulario, crea un archivo JavaScript llamado formdata.js que cree un objeto FormData con los datos del formulario y luego muestra los pares clave/valor en la consola.

// const boton = document.querySelector('button');

// function registrar(e) {
//     e.preventDefault();
    
//     let nombre= document.getElementById('name').value;
//     let email= document.getElementById('email').value;
//     let terminos= document.querySelector('input[name=terms]:checked').value;
    
//     console.log(nombre);
//     console.log(email);
//     console.log(terminos);         

//     document.forms[0].reset();
// }
// boton.addEventListener('click', registrar );


//Guardar los datos en un constructor escuchando al submit del formulario


let miFormConstructor= document.getElementById("miFormulario");

miFormConstructor.addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = new FormData(miFormConstructor);

    let nombre = formData.get('name');
    let email = formData.get('email');
    let terminos= document.querySelector('input[name="terms"]:checked').value;
    
    console.log(nombre);
    console.log(email);
    console.log(terminos);

    for(let item of formData){
        console.log(item);
    }

    miFormConstructor.reset(); 
});

//Resolucion coding rooms

// 'use strict';

// const form = document.getElementById('miFormulario');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);

//   for (const [key, value] of formData.entries()) {
//     console.log(`${key}: ${value}`);
//   }
// });