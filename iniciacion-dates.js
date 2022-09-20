//List, array conjunto de variables en orden

const lista = [1,"hola", true];
const lista2 = new Array();
const lista3 = new Array(3);
const lista4 = [lista, lista2, lista3];

//Objects

const movil = {
    altura: 10,
    ancho:5,
    marca:"Xiaomi",
    isWorking: true,
    contacts:["Contacto1"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento:64
    },
    "Other-Example":4
}

movil.anio = 2019;

console.log(movil.anio);

//Dates Moment.js

const now = new Date();

const fecha_milis = new Date(10);

const fecha_cadena = new Date("march 25 2020");

const fecha_valores = new Date(2022,0,15);

const dia = now.getDate();
const month = now.getMonth() + 1;

