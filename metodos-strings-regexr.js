//https://regexr.com

let text = "she went to the open door and stood in it and looked out among the tomato vines and 'jimpson' weeds that constituted the garden. No Tom. So she lifted up her voice at an angle calculated for distance and shouted:"

console.log(text.match(/she/g)); //encuentra cuantas veces esta contenida una palabra
console.log(text.includes("constituted")); //si el texto incluye la palabra
console.log(text.startsWith("she")); //si empieza con una palabra bool
console.log(text.endsWith(":")); //si termina con una palabra bool


