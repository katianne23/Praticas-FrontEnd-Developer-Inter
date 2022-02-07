//O que são vertores ou arrays

//Como declarar um array
let array = ['string', 1, true];
console.log(array);

//pode guarda varios tipos de dados
let arrays = ['string', 1, true, ['array1'],['array2'] ['array3'],['array4']];
console.log(arrays);

//acessar array
console.log(arrays[0]);

//for each intera um array
array.forEach(function(item, index){console.log()})

//push add item no final do array
array.push('novo item');
console.log(array)

//pop remove item no final do array
array.pop();
console.log(array)

// shift remove item no inicio do array
array.shift();
console.log(array)

//unshift add item no inicio do array
array.unshift('Adiciona um novo item no inicio');
console.log(array)

//indexOf retorna o indice de um array
console.log(array.indexOf(true));

//splice remove ou substitui um item pelo indice
array.splice(0 ,3);
console.log(array)

//slice retorna uma parte de um array existente
let novoArray = array.slice(0,3);
console.log(novoArray);

//objetos
let object = { String:'String', number: 1, boolean: true, array:["array"], objectInterno: {objectInterno: 'objetoInterno'}};
console.log(object);

//destruturação do objeto
var string = object.String;
console.log(string);

var arrayInterno =object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);