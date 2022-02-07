const alunos = [
    {
    nome: 'Katianne',
    nota: 10,
    turma: '1A',
},
{
    nome: 'Frajola',
    nota: 8,
    turma: '1A',
},
{
    nome: 'João',
    nota: 5,
    turma: '1B',
},
];


function alunosAprovados(array, mediaFinal){
    let aprovados = [];
    for( let i = 0; i < array.lenght; i++){

        const {nota, nome} = array[i];

        if(nota >= mediaFinal){
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 8));