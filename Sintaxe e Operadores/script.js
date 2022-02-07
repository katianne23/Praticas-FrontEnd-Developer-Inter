function comparacao (n1 ,n2){
  const primeiraComparacao = primeiraComp(n1,n2);
 
  const segundaComparacao = segundaComp(n1, n2);

  return `${primeiraComparacao} ${segundaComparacao}`;
}

function primeiraComp(n1, n2){
    let iguais = '';

    if( n1 === n2){
        iguais = `Os numeros ${n1} e ${n2} ${iguais}  são iguais`;
    } else{

        iguais = `Os numeros ${n1} e ${n2} ${iguais} não são iguais`;
    }

    
};

function segundaComp(n1, n2){
    const soma = n1 + n2;
    let resulDez = 'maior';
    let resultVinte= 'menor'
   

    if ( soma > 10){
    
        alert(`Sua soma é ${soma}, que é ${resulDez} do que 10`);
        
    } else if (soma < 20){
       
        alert(`Sua soma é ${soma} que é ${resultVinte} do que 20.`);
    
    }

     
}

console.log(comparacao(2,20));


