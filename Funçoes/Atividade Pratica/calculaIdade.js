function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 ={
    nome: "Ana",
    idade: 10
};

const pessoa2 = {
    nome: "Katianne",
    idade: 22,
};

const animal = {
    nome: "Frajola",
    idade: 5,
    raca: 'Persa',
};

console.log(calcularIdade.call(pessoa1, 30));
console.log(calcularIdade.call(pessoa2, 50));
console.log(calcularIdade.call(animal, 20));

console.log(calcularIdade.apply(animal, [5]));
console.log(calcularIdade.apply(pessoa1, [30]));