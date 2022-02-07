const A = {
    value: 4,
}

const B = {
    value: 5,
}

const C = {
    value: 12,
}

function mapComThis(array, thisArg){
    return array.map(function(item){
       return item * this.value;
    }, thisArg);
}


const num = [1,2,3,4,5,6,7];
console.log('this-> A', mapComThis(num, A));

console.log('this-> B', mapComThis(num, B));

console.log('this-> c', mapComThis(num, C));