// usando o constructor

class Pessoa { // classe sempre inicia letra maiuscula
   
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){  //construtor é uma função especial que é chamada automaticamente quando criamos um objeto da nossa class
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever(){ //para declarar método na sintaxe de classe, não precisa escrever 'function' 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const marcus = new Pessoa( "Marcus", 38);
const marilia = new  Pessoa("Marília", 39);

console.log(marcus);
marcus.descrever();

console.log(marilia);
marilia.descrever();