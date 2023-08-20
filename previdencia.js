class Previdencia {
  constructor() {

    this.users = [];
    this.prevd = [];
    this.juros = 10;
  }

  comprarPrev(id, nomePrevidencia) {
  const userVer = this.users.find(user => user.id === id);
  const prevdV = this.prevd.find(previdencia => previdencia[nomePrevidencia]);
  
  if (userVer && prevdV) {
    const previdenciaInfo = prevdV[nomePrevidencia];
    const novaPrevidencia = {
      nome: previdenciaInfo.nome,
      valor: previdenciaInfo.valor
    };
    
    userVer.previdencias = userVer.previdencias || [];
    userVer.previdencias.push(novaPrevidencia);
  }
}

adicionarPrevList(p) {
this.prevd.push(p)
}

  registrarUsuarios(users) {
    for (const obj of users) {
      if (obj.nome) {
        this.users.push(obj);
      }
    }
  }
}

module.exports = Previdencia;
