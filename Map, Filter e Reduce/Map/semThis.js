function mapSemThis (array){
    return array.map(function(item){
        return item * 2;
    });

}

const num = [4,7,8,10,24];

console.log(num);
console.log(mapSemThis(num));
