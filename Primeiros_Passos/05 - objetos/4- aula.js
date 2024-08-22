// classes e instâncias

class Pessoa { // classe sempre inicia letra maiuscula
   
    nome;
    idade;

    descrever(){ //para declarar método na sintaxe de classe, não precisa escrever 'function' 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// instanciando: criamos um novo objeto a partir da classe Pessoa

const marcus = new Pessoa();
marcus.nome = "Marcus";
marcus.idade = 38;

const marilia = new Pessoa();
marilia.nome = "Marília";
marilia.idade = 39;

console.log(marcus);
console.log(marilia);

marcus.descrever();
marilia.descrever();