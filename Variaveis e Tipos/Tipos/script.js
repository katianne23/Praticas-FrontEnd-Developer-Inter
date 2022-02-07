//Estrutura de dados
let um = "Um";

console.log(um);

//String
let nome = "Katianne"

let sobrenome = "Santos"
nome.concat(sobrenome)

let concatenado = nome.concat(sobrenome);
console.log(concatenado);

concatenadoSeparado = nome + " " + sobrenome;
console.log(concatenadoSeparado);

//concatenado quebra de linha
concatenadoQL = nome + " \n" + sobrenome;
console.log(concatenadoQL);

//Concatenado quebra de duas linhas
concatenadoQDL = nome + " \n\n" +sobrenome;
console.log(concatenadoQDL); 

//concatenado escrevendo direto
concatenadoED = `${nome} ${sobrenome}`
console.log(concatenadoED);

//imprimir aspas
concatenadoAspas = "\"";
console.log(concatenadoAspas);

let frase = "Olá, tudo bem?"

//Pegar palavras de uma frase
frase.split(" ");
console.log(frase);

//Saber se a frase tem determinada palavra
console.log(frase.includes("tudo"));

//Saber se começa com determinada letra
console.log(frase.startsWith("o"));

//Saber se termina com determinda letra
console.log(frase.endsWith("?"));

//Mudar letras ou pontos
console.log(frase.replace(",", "!"));

let stringModificada = frase.replace(",", "!");
console.log(stringModificada);



//Numbers
let num = 124;

soma = 124 + 3;
console.log(soma);

subtracao = num - 1;
console.log(subtracao);

multipicacao = num * num;
console.log(multipicacao);

divisao = num / 2;
console.log(divisao);

restoDivisao = num % 2;
console.log(restoDivisao);

//Biblioteca Math

Math.PI;

let fiveByThree = 5/3;
console.log(fiveByThree);

//Arredonda valores para baixo
console.log(Math.floor(fiveByThree));


//Arredonda valores pra cima
console.log(Math.ceil(fiveByThree));




//Booleans
let validation = 3 === 0;
console.log(validation);

validation = 3 === 3;
console.log(validation);

validation = 3 > 4;
console.log(validation);

validation = 3 > 2;
console.log(validation);

validation = 3 >= 2;
console.log(validation);

//transforma o valor em String
console.log(validation.toString);




//Arrays
let array = []; 

//add item no array
array.push(3);
array.push(2)
console.log(array);

//tira ultimo item array
array.pop();
console.log(array);

array.push(2);
array.push(5);

//Remove primeiro elemento
array.shift( );
console.log(array);

//Adiciona item no começo
array.unshift(1);
console.log(array);

//Interapilidade em array
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Ver se existe um elemento
array.includes(3);
console.log(array);

//ver se todas os elementos são iguais
array.every(item => item === 5);
console.log(array);

//ver se determinado elemento é igual
array.some(item => item ===5);
console.log(array);

//Reverte array
array.reverse();
console.log(array);




//Objetos

let obj = {};

//Preencher objeto
console.log(obj.name='Katianne');
console.log(obj.age = 22);

//Ver os valores do objetos
console.log(Object.values(obj));

//ver as chaves
console.log(Object.keys(obj));

//declara chaves e valores
let person ={
    name: "Katianne",
    age: 22,
    adress: "Ceará",

}
console.log(person);

//Acessar determinado objeto
console.log(person.name); // ou person["name"]




//Empty, undefined e null

let fruta = " "

//Saber valor de variaveis nulo
console.log(fruta);

fruta === true;
console.log(fruta);
