'use strict'
//Ejercicio 18
const estudiante={
    nombre:"Marta",
    apellido:"Silva",
    edad: 22,
    carrera:"Ingienería en Computacion",
    promedio:9.1,
    presentacion: function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}`);
    }
};
estudiante.presentacion();

//Ejercicio 19
for (props in estudiante){
    console.log(`La ${props} tiene el valor ${estudiante.props}`);
}

//Ejercicio 20 
    //mellor asignar a unha variable e logo que inpirma undefined
    //console.log(estudiante.direccion?.calle);
const calle = estudiante.direccion?.codigo;
console.log(calle);

//Ejercicio 21

const estudianteCopia = {...estudiante};
estudianteCopia.nombre ="Pepe";
console.log(estudiante.nombre + " es diferente de "+ estudianteCopia.nombre);

//Ejercicio 22

const{nombre, apellido, carrera}= estudiante;
console.log(`El nombre es ${nombre}, El apellido es ${apellido}, la carrera es ${carrera}`);