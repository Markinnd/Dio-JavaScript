/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura= altura;
    }

    calcularIMC(){
        return this.peso / (this.altura*this.altura);
    }

    classificarIMC (_calcularIMC) {
        if(this.calcularIMC() < 18.5){
            return 'Abaixo do peso';
        }else if(this.calcularIMC() >= 18.5 && this.calcularIMC() <= 25){
            return 'Peso Normal';
        }else if(this.calcularIMC() > 25 && this.calcularIMC() <= 30){
            return 'Acima do peso';
        }else if(this.calcularIMC() > 30 && this.calcularIMC() <= 40){
            return 'Obeso';
        }else{
            return 'Obesidade Grave';
        }
    }
    
    descrever(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Peso: ${this.peso}Kg`);
        console.log(`Altura: ${this.altura}m`);
        console.log(`Meu IMC: ${this.calcularIMC()} - ${this.classificarIMC(this.calcularIMC())}`)
    }

}

const jose =  new Pessoa('José',  70, 1.75);    
console.log(jose.descrever());    