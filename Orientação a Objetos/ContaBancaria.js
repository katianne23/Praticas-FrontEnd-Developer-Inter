class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if( valor > this._saldo){
            return "Operação Negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
   
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;

    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return "Operação invalida";
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const MinhaConta = new ContaCorrente(1, 22, "corrente");
    console.log(MinhaConta._saldo);
    console.log(MinhaConta.depositar(2000));
    console.log(MinhaConta.sacar(200));
 

const ContaPou = new ContaPoupanca (1, 22);
console.log(ContaPou._saldo);
console.log(ContaPou.depositar(1500));
console.log(ContaPou.sacar(2000));

const ContaUnver = new ContaUniversitaria (1, 22);
console.log(ContaUnver._saldo);
console.log(ContaUnver.depositar(500));
console.log(ContaUnver.sacar(200));

