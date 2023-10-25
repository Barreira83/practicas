'use strict'
const arrayTareas= new Map;
let idTarea=0;


function agregarTarea(task) {
    idTarea++;
    arrayTareas.set(idTarea, task);
}

function eliminarTarea(id) {
    arrayTareas.delete(id);
    idTarea--;

}

function listarTareas() {
    for(let item of arrayTareas){

        console.log(`Identificador: ${item[0]}\n
        Tarea: ${item[1]}`);
    }
}
export { agregarTarea, eliminarTarea, listarTareas }