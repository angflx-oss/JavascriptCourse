
let factorial = 1;
let aux = 10;

while(true){

    factorial *= aux;
    aux--;
    
    if(aux === 1){
        break;
    }  
}
console.log(factorial);
