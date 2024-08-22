/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

class Numero{
    num;

    constructor(num){
        this.num = num;
    }

    fazerTabuada(){
        for (let i=0;i<=10;i++){
            console.log(`${this.num} x ${i} = ${this.num*i}`);
        }
    }
}

let cinco = new  Numero(5);
cinco.fazerTabuada();

let nove = new Numero(9);
nove.fazerTabuada();