const lista = [
{
    nome: 'Chocolate',
    preco: 3
},

{
    nome: 'Cheetos',
    preco: 5
},
{
    nome: 'cereal',
    preco: 10
},

{
    nome: 'coca-cola',
    preco: 7
},
];

const saldoDisponivel = 80;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));