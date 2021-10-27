/*Trabalhando com TypeScript*/

console.log(10+10);

function somaValores(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else{
        console.log("Informe apenas valores numericos");
        return;
    }
   
}

console.log(somaValores(50,50));
console.log(somaValores(50,'b'));