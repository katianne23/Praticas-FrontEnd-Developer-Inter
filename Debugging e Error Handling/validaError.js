function ValidaArray ( array, num){
    try{

        if(!array && !num) throw new ReferenceError("Envie os Parêmetros");

    if(typeof array !== 'object') throw new TypeError("O Array dever ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("O Array dever ser do tipo number");

    if( array.length !== num) throw new RangeError("Tamanho Inválido");

       return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof RangeError){
            onsole.log("Este erro é um RangerError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else {
            console.log("Erro não experado:"+ e);
        }

    }

    


}
console.log(ValidaArray());
console.log(ValidaArray(5, 5));
console.log(ValidaArray([], 'a'));
console.log(ValidaArray([], 5));
console.log(ValidaArray([1 , 4 ,5 ,6 ,7], 5));