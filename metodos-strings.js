//Metodos utilizados con cadenas de caracteres

let str = "Este es un String";
console.log(str.slice(5,10)); //desde donde y hasta donde
console.log(str.substring(5,10)); //desde donde y hasta donde
console.log(str.substr(5,10)); //desde donde y la longitud

//reemplazar parte del contenido de una cadena solo la primera instancia

let cadena = "Hello my names is Ang";
console.log(cadena);
console.log(cadena.replace('Ang', 'Angie'));

//al utilizar la expresión regular /g (global) reemplaza todas las instancias

let text = "she went to the open door and stood in it and looked out among the tomato vines and 'jimpson' weeds that constituted the garden. No Tom. So she lifted up her voice at an angle calculated for distance and shouted:"

console.log(text.replace(/she/g, 'he'));