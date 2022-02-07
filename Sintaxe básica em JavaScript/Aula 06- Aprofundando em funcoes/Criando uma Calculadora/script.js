function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicacao(*) \n 4-Divisao real(/)\n 5-Divisao inteira(%)\n 6-Potenciacao(**)\n'));

    if (!operacao || operacao > 7) {
        alert('Erro - Operação Inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parêmetros inválidos');
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} =${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} =${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} =${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} =${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(` O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}º e igual a =${resultado}`);
                novaOperacao();
            }
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1-Sim \n 2-não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção valida!');
                    novaOperacao();
                }
            }
        }


        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }


}
calculadora();