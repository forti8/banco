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

// lista de previdencias disponiveis
    const p = {
      a: {
        nome: "Renda Fixa Banco Granville",
        valor: 500,
        moeda: "R$",
        comp: {
          acoes: [],
          Fii: [],
          rf: [
            "Cdb Banco Granville - 100% cdi",
            "Cri Banco Granville - 95% cdi - 5 anos",
            "Cra Banco Granville - 95% cdi - 5 anos",
            "Debenturê Banco granville"
          ]
        }
      },
      b: {
        nome: "Multimercado Banco Granville",
        valor: 1500,
        moeda: "R$",
        comp: {
          acoes: [
            "BBAS3",
            "KLBN11",
            "SUZN11",
            "CPLE11",
            "TAEE11",
            "SANB11"
          ],
          Fii: [
            "MXRF11",
            "XPML11",
            "ALZR11"
          ],
          rf: [
            "Cdb Banco Granville - 100% cdi",
            "Cri Banco Granville - 95% cdi - 5 anos",
            "Debenturê Banco do Brasil",
            "Debenturê Banco granville"
          ]
        }
      }
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
"Mariane": ["Aline",282],

};

// passando uma lista de compras a serem feitas
const comprasAg = {
"Miguel":168,
"Aline":263,
"Rafael":320,
"Mariane":23,
"Jenifer":373
}

const prevdAg = {
"Miguel":"a",
"Aline":"a",
"Rafael":"b",
"Mariane":"b",
"Jenifer":"a"
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

console.log(previdencia.users);
console.log(previdencia.prevd)

previdencia.adicionarPrevList(p)

// lista de compras de previdências
for (const nome in prevdAg) {
  const chavePrevidencia = prevdAg[nome];

  if (p[chavePrevidencia]) {
    const valorPrevidencia = p[chavePrevidencia].valor;
    const idUsuario = nomeParaId[nome][0];
    
    if (idUsuario !== undefined) {
      const user = banco.contas.find(conta => conta.id === idUsuario);
      
      if (user && user.saldo >= valorPrevidencia) {
        // Remover o valor da previdência do saldo do usuário
        banco.removerSaldo(idUsuario, nome, valorPrevidencia);
        
        // Comprar a previdência para o usuário
        previdencia.comprarPrev(idUsuario, chavePrevidencia);
        
        console.log(`${nome} - Previdência "${chavePrevidencia}" comprada.`);
      } else {
        console.log(`Compra de previdência "${chavePrevidencia}" para "${nome}" rejeitada: saldo insuficiente.`);
      }
    } else {
      console.log(`Compra de previdência "${chavePrevidencia}" rejeitada: usuário inválido.`);
    }
  } else {
    console.log(`Previdência "${chavePrevidencia}" não encontrada.`);
  }
}

console.log(banco.contas)

        
/* 
Criado Por Miguel P. Granville

   Eu Miguel Granville disponibilizo este código para estudos developer to developer, autorizo, com apenas este comentario de menção, Obrigado!

https://github/forti8
*/
