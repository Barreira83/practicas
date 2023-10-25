'use strict'
// Ejercicio 5

// Crea un archivo JavaScript llamado localStorage.js que interactúe con el siguiente código HTML para lograr las siguientes acciones:

// Al hacer clic en el botón "Guardar en localStorage", los datos del formulario (nombre y apellido) deben almacenarse en el localStorage.

// 2. Cuando se cargue la página y también al enviar el formulario, verifica si los datos nombre y apellido están almacenados en el localStorage. Si existen, muestra en el elemento con ID "mensaje" el mensaje de bienvenida: "Bienvenid@, [nombre] [apellido]". Si los datos no están en el localStorage, muestra el mensaje "Bienvenid@, desconocid@".

// 3. Al hacer clic en el botón "Borrar localStorage", crea un evento que elimine los datos almacenados en el localStorage (nombre y apellido).

let miFormulario= document.getElementById("userForm");
miFormulario.addEventListener('submit', guardarUsuario);

function guardarUsuario(e) {
    e.preventDefault();

    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;

    localStorage.setItem("nombre", JSON.stringify(nombre));
    localStorage.setItem("apellido", JSON.stringify(apellido));

    let tituloPersonal = document.getElementById('mensaje');
    if(localStorage){
        tituloPersonal.textContent=`Bienvenid@, ${nombre} ${apellido}`;
    }else{
        tituloPersonal.textContent="Bienvenid@, desconocid@";
    }

    document.forms[0].reset();
}

let btnReset= document.getElementById("borrarDatos");
btnReset.addEventListener('click', borrar);
function borrar(e) {
    e.preventDefault();
    localStorage.clear()

}
//Resolucion ejercicio------------------------------------------------
// 'use strict';

// // Al cargar la página seleccionamos los nodos con los que vamos a trabajar
// document.addEventListener('DOMContentLoaded', () => {
//   const userForm = document.getElementById('userForm');
//   const borrarDatos = document.getElementById('borrarDatos');
//   const mensaje = document.getElementById('mensaje');

//   // Mensaje de bienvenida basado en si los datos del usuario están en localStorage o no
//   const nombre = localStorage.getItem('nombre');
//   const apellido = localStorage.getItem('apellido');
//   if (nombre || apellido) {
//     mensaje.textContent = `¡Bienvenid@,${nombre ? ' ' + nombre : ''}${apellido ? ' ' + apellido : ''}!`;
//   } else {
//     mensaje.textContent = `¡Bienvenid@, desconocid@!`;
//   }

//   // Guardamos los datos del formulario en localStorage al enviar el formulario
//   userForm.addEventListener('submit', (event) => {
//     // Desactivamos el comportamiento por defecto del submit
//     event.preventDefault();

//     const nombre = document.getElementById('nombre').value;
//     const apellido = document.getElementById('apellido').value;

//     localStorage.setItem('nombre', nombre);
//     localStorage.setItem('apellido', apellido);

//     // Recargamos la página para activar el evento de cargar la página ('DOMContentLoaded')
//     location.reload();
//   });

//   // Borramos los datos del usuario en localStorage al hacer clic en "Borrar localStorage"
//   borrarDatos.addEventListener('click', () => {
//     localStorage.removeItem('nombre');
//     localStorage.removeItem('apellido');
//     // Reseteamos los campos del formulario para que no quede información
//     userForm.reset();
//   });
// });