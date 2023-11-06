// Crea un oggetto chiamato 'studente'. Dovrebbe avere proprietà per 'nome' e 'età'. Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età dello studente e un metodo per incrementare l'età.

let studente = {
    nome: 'Gianny',
    eta: 65,
    nomeEdEta: function (){
        console.log(`Nome: ${this.nome}, età: ${this.eta} `);
    },
    invecchia: function (years){
        this.eta += years;
    }
}

studente.nomeEdEta();
studente.invecchia(5);
console.log(studente.eta);