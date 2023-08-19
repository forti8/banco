// fazendo import da classe Banco em basic.js
const Banco = require("./basic.js")

// fazendo import da classe Compra em compra.js
const Compra = require("./compra.js");

// fazendo import da classe Previdencia em previdencia
const Previdencia = require("./previdencia.js");

// cria um objeto usando a classe previdencia
const previdencia = new Previdencia();

// cria um objeto usando a classe compra;
const compra = new Compra();

// cria um objeto usando a classe banco
const banco = new Banco();

const fs = require('fs');

// Caminho para o arquivo JSON
const caminhoArquivo = './lists/prev.json';

// Lê o conteúdo do arquivo JSON
fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    // Transforma o conteúdo do arquivo em um objeto JSON
    const jsonObject = JSON.parse(data);

previdencia.prevd=jsonObject       
    // Agora você pode usar o objeto jsonObject
  } catch (parseError) {
    console.error('Erro ao analisar o JSON:', parseError);
  }
});

// string basica de caracteres para criar um chave
const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#/+-'

const idsReg = [];

// função para criar uma chave baseado em uma string
function k(c, l) {
let key = "";
for (let i = 0; i < l; i++) {
        const ri = Math.floor(Math.random() * c.length);
      key += c.charAt(ri);
};

return key
};

// como criar uma conta usando array
// os valores sendo idade
const contas = {
        1: ["Miguel",15],
        2: ["Rafael",34],
        3: ["Aline",30],
        4: ["Mariane",16],
        5: ["Jenifer",28]
}

// como criar transferencias usando array
// "remetente": ["destinatario", "valor sem aspas"]
const transfAgendadas = {
"Miguel": ["Rafael",259],
"Aline": ["Mariane",537],
"Rafael": ["Jenifer",24],
"Mariane": ["Aline",282.82],

};

// passando uma lista de compras a serem feitas
const comprasAg = {
"Miguel":168,
"Aline":262.3,
"Rafael":363.20,
"Mariane":26.73,
"Jenifer":373.3
}

// Novo objeto para mapear nomes para IDs
const nomeParaId = {};

// Criar uma nova conta e adicionar automaticamente o ID nas transferências agendadas
for (const c in contas) {
  const kg = k(char, 40);
  idsReg[kg] = { nome: contas[c][0], idade: contas[c][1] };
const num = c;
  nomeParaId[contas[c][0]] = [kg,num];

  // Mapear o nome para o ID
  banco.criarConta(kg, contas[c][0], contas[c][1]);
  banco.adicionarSaldo(kg, c, 2000);
}

// Atualizar as transferências agendadas com os IDs correspondentes
for (const r in transfAgendadas) {
  const remetenteId = nomeParaId[r][0];
  if (remetenteId) {
    const destinatario = transfAgendadas[r][0];
    const valor = transfAgendadas[r][1];
const destinatarioId = nomeParaId[destinatario][0];
    if (destinatarioId) {
      transfAgendadas[r] = [destinatarioId, valor];
    }
  }
}

// serve para transferir o saldo 
for(const t in transfAgendadas) {
banco.transferirSaldo(nomeParaId[t][0],transfAgendadas[t][0],transfAgendadas[t][1])
}     



// não é possivel adicionar apenas uma nova conta
// na verdade possivel é mas por conta da eficiencia precisei deixar mais dificil, para permitir um melhor uso

// imprimindo no console todas as contas registradas e saldo total
console.log("saldo total:", banco.saldoT())

// registrando users 
compra.registrarUsuarios(banco.contas)
previdencia.registrarUsuarios(banco.contas, 10)

// criar uma nova lista de compras
for (const ca in comprasAg) {
var k = compra.criarNovaChave()
compra.criarNovaCompra(k, nomeParaId[ca][0], ca, comprasAg[ca])
banco.removerSaldo(nomeParaId[ca][0],ca,comprasAg[ca])
}

console.log();
console.log(previdencia.users);


/* 
   
   Criado Por Miguel P. Granville

   Eu Miguel Granville disponibilizo este código para estudos developer to developer, autorizo com apenas este comentario de menção, Obrigado!

https://github/forti8
*/
