class Banco {
constructor () {
this.contas=[];
this.investimentos=[]
}

criarConta(key, nome, idade) {
    
    const keyCheck = this.contas.find(c => c.key === key);
    if (!keyCheck) {

            let user = {id: key, nome, idade, saldo: 0}
this.contas.push(user)
        
    } else {
      return this.criarNovaChave();
    }
        
}


adicionarSaldo(id, nome, valor) {
const conta = this.contas.find(c => c.id == id);
if(conta) {
conta.saldo+=valor;

}};

removerSaldo(id, nome,valor) {
const conta = this.contas.find(c => c.id == id)
if(conta) {
conta.saldo-=valor;

}};

transferirSaldo(envia, recebe, valor) { 
const verUmId = this.contas.find(c => c.id === envia); const verDoisId = this.contas.find(c => c.id === recebe); 
if (verUmId && verDoisId) { 
        if (verUmId.saldo >= valor) { 
                verUmId.saldo -= valor;
                verDoisId.saldo += valor;

        } else { 
console.log(`Transação de ${envia} para ${recebe} rejeitada: saldo insuficiente.`); 
        } } else { 
console.log(`Transação de ${envia} para ${recebe} rejeitada: contas inválidas.`); 
} }

saldoT() {
        let saldoTotal = 0; 
 for (const conta of this.contas) {
                saldoTotal += conta.saldo;
        } 
return saldoTotal; 
}

}

module.exports=Banco;
