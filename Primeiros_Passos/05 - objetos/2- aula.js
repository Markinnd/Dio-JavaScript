// usando funções dentro de objetos - MÉTODOS.
const pessoa = {
    nome: `Marcus Dornelas`,
    idade: 38,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

pessoa.descrever();//chamada da função descrever do objeto pessoa</

pessoa.nome = 'Marilia';
pessoa.idade = 39;

pessoa.descrever();

