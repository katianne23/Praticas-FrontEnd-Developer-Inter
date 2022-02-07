function filtraPares(array){
    return array.filter(callback);
}

function filtraImpar(array){
    return array.filter(callbackImpar);
}

function callback(item){
    return item % 2 === 0;
}

function callbackImpar(item){
    return item % 2 !== 0;
}

const arrayNum = [2,3,7,8,10,15, 4];

console.log(filtraPares(arrayNum));
console.log(filtraImpar(arrayNum));