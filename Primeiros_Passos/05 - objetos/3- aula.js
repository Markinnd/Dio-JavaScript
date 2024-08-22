// acessando dinamicamente:

const pessoa = {
    nome: `Marcus Dornelas`,
    idade: 38,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

console.log(pessoa['nome']);