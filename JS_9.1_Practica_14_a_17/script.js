'use strict'
function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
    return nombre;
};

saludar ("Manolo");

saludar("David");

//Ejercicio 15

const suma = function (a,b){
    return a+ b;
}
console.log(suma (5,7));

//Ejercicio 16

const promedio = (numero1, numero2) => {return (numero1+numero2)/2}

console.log(promedio(2,3));

//Ejercicio 17
const mostrarNumerosPares= function(limit){
    let i=2;
    while(i<=limit){
        if(i%2 ==0){
            console.log(i);
        }
        i++;
    }
    return
    }

    mostrarNumerosPares(10);