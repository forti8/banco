class Compra {
  constructor() {
    this.compras = [];
    this.keys = [];
    this.users = [];
  }

  criarNovaChave() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#/+-';
    const keyLength = 100;
    let key = '';
    for (let i = 0; i < keyLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters.charAt(randomIndex);
    }

    const keyCheck = this.keys.find(c => c.key === key);
    if (!keyCheck) {
      const res = { key };
      this.keys.push(res);

      return key;
    } else {
      return this.criarNovaChave();
    }
  }

  criarNovaCompra(key, id, n, valor) {
    const compraVer = this.compras.find(c => c.key === key);
    const nomeVer = this.users.find(c => c.nome === n);
const idVer = this.users.find(c => c.id === id)
    if (!compraVer && nomeVer && idVer) {
      const res = { key, valor, n};
      this.compras.push(res);
    } else {
      console.log(`compra invalida`);
    }
  }

  registrarUsuarios(user) {
    for (const obj of user) {
      if (obj.nome) {
        this.users.push(obj);
      }
    }
  }
}

module.exports = Compra;
