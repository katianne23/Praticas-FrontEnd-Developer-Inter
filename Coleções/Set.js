const array  = [10, 10, 20, 7, 100, 2000, 456, 7];

function valorUnico(arrays){
    const mySet = new Set(arrays);

    return [...mySet];
}

console.log(valorUnico(array));