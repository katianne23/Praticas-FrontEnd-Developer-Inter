//Estrutura de condição If,  else. esle if
var jogador1 = 1;
var jogador2 = 2;
var placar;

if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
} else if(jogador2 < 0) {
    console.log('Jogador2 marcou ponto');
} else {
    console.log('Ninguem marcou ponto');
}


//Ninho de ifs
if(jogador1 != -1){
if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
} else if(jogador2 < 0){
    console.log('Jogador2 marcou ponto');
} else {
    console.log('Ninguem marcou ponto');
}
}

//if internario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos'): console.log('jogadores invalidos');
if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
} else if (jogador2 < 0){
    console.log('Jogador2 marcou ponto');
} else {
    console.log('Ninguem marcou ponto');
}

//Adicionando valor no placar
//usando if
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador1 marcou ponto:');
    placar = jogador1 > jogador2;
}

//usando else if
else if (jogador2 > 0 && jogador1 == 0 ){
console.log('Jogador2 marcou ponto');
placar = jogador2 > jogador1;
}
//Usando else
else{
    console.log('Ninguem marcou ponto');
}

//Estrutura Codicional Switch

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador2 ganhou!');
        break;
        default:
        console.log('Ninguem ganhou');
}

//Laços de Repetição


let array =[ 'valor1', 'valor2' , 'valor3', 'valor4', 'valor5',];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

// for Executar uma instrução até que ela seja falsa
for(let indice =0; indice < array.length; indice++){
    console.log(indice);

}

//For/ in executar repetição a parti de um propriedade
for (let i in array){
    console.log(i);

}

//For/in com objeto
for(i in object){
    console.log(i);

}

// For/of Executar uma repetição a parti de um valor
//Com array
for(i of array){
    console.log(i);

}

//com object
for (i of object.propriedade1){
    console.log(i);
}


var a = 0;
//While Executar enquanto determinada condição

while ( a < 10){
    a++;
    console.log(a);
}

var b =0;

//Do/while exceuta ate que determinada condição seja falsa
do {
    b++
    console.log(b)
} while ( b < 10)



