'use strict';

// Importamos las funciones del módulo 'tareas.js'

//import { agregarTarea, eliminarTarea, listarTareas } from './tareas.js';
import { agregarTarea, eliminarTarea, listarTareas } from './tareasConMap.js';

// Utilizamos la función agregarTarea para agregar varias tareas
agregarTarea('Hacer la compra');
agregarTarea('Estudiar JavaScript');
agregarTarea('Hacer ejercicio');


// Utilizamos listarTareas para mostrar las tareas que se han agregado
listarTareas();

// Mostramos en consola un mensaje para indicar que se ha eliminado una tarea con id 3
eliminarTarea(3);

// Utilizamos la función listarTareas para mostrar las tareas que quedan después de eliminar la tarea con id 3
console.log("\nDespués de eliminar la tarea: 'Hacer ejercicio'\n");
listarTareas();