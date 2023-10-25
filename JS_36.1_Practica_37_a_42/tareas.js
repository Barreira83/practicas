'use strict';

// Inicializamos una variable "tareas" que es un array vacío
let tareas = [];

// Función para agregar una tarea
function agregarTarea(tarea) {
  // Creamos un objeto con 2 propiedades: id y task
  // El "id" es el tamaño actual de la lista "tareas" más uno
  const objTarea = {
    id: tareas.length + 1,
    task: tarea,
  };

  // Añadimos el objeto "objTarea" a la lista "tareas"
  tareas.push(objTarea);
}

// Definimos una función "eliminarTarea" que toma un parámetro "idTarea"
function eliminarTarea(idTarea) {
  // Buscamos el índice de la tarea con el "id" dado en la lista "tareas"
  const index = tareas.findIndex((tarea) => tarea.id === idTarea);
  // Si el índice es mayor que -1 (es decir, la tarea existe), la eliminamos de la lista "tareas"
  if (index > -1) {
    tareas.splice(index, 1);
  }
}

// Definimos la función "listarTareas"
function listarTareas() {
  console.log('Tareas:');
  // Recorremos la lista "tareas" y mostramos en la consola cada tarea con su "id" y su "task"
  tareas.forEach((tarea) => {
    console.log(`${tarea.id}. ${tarea.task}`);
  });
}

// Exportamos las funciones para que puedan ser usadas en otros módulos
export { agregarTarea, eliminarTarea, listarTareas };