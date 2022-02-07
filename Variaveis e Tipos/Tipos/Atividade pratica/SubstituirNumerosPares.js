function subtituiPares(array){
    if(!array) return -1;
    if(!array.length) return -1;
    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!");
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0!`);
            array[i] = 0;
        }
    }

    return array;
}

let array = [1,3,4,7,10,13,23,45,54,80,]

console.log(subtituiPares(array));
console.log(subtituiPares(undefined));

//Substituir numeros impares

function subtituiImpares(array){
    if(!array) return -1;
    if(!array.length) return -1;
    for (let i = 0; i < array.length; i++){
        if(array[i] === 1){
            console.log("Você já é 1!!");
        } else if (array[i] % 2 != 0){
            console.log(`Substituindo ${array[i]} por 1!`);
            array[i] = 1;
        }
    }

    return array;
}

let arrays = [1,3,4,7,10,13,23,45,54,80,]

console.log(subtituiImpares(arrays));
console.log(subtituiImpares(undefined));