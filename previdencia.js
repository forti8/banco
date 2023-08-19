
class Previdencia {
constructor () {
this.users=[];
this.prevd=[];
this.juros;
};

/*
esta função esta atualmente em desinvolvimento
logo sera compilada uma nova versão
*/
  
comprarPrev(user, num) {
const userVer = this.users.find(c => c.id === user);
const prevVer = this.prevd[`${num}`]
if (userVer && prevVer) {
     console.log("test") 
var l = {prevVer}
        this.users[user].push(l)
}
}
registrarUsuarios(user, j, p) {
        this.prevd.push(p);
    for (const obj of user) {
      if (obj.nome) {
        this.users.push(obj);
      }
    }
}
}

module.exports=Previdencia;
