let lista = [1,4,6,2,3,7,10,12,800];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2);
}

for(let valor of lista){
    console.log(valor);
}

lista.forEach(valor => {
    console.log(valor);
});

let persona = {
    nombre: "Angela",
    apellido: "Felix",
    edad: 23,
    isDeveloper: true
};

for( let propiedad in persona){
    console.log(persona[propiedad])
}