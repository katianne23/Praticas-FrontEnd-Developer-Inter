//1 Solução 
function verificaPalíndromo(string){
    //Verifica se a string existe
    if(!string) 
    return "string inexistente";

    //Separa string, reverter string e junta novamente e verificar se é igual 
   return string.split("").reverse().join("") === string;

}

console.log(verificaPalíndromo("ama"));
console.log(verificaPalíndromo("casa"));

//2 solução

function verificaPalíndromo2(string){
    //Verifica se a string existe
    if(!string) 
    return "string inexistente";

    //Pecorre cada caractere e compara caractere são iguais
    for (let i = 0; i < string.length / 2 ; i++){
       if(string[i] !== string[string.length -1 - i]){
           return false;
       }
    }
    return true;
}

console.log(verificaPalíndromo2("abba"));
console.log(verificaPalíndromo2("azul"));