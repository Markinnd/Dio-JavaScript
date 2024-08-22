/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDeViagem(distanciaEmKM, precoCombustivel){
        return (distanciaEmKM * this.gastoMedio) * precoCombustivel;
    }
}

const uno = new Carro('Fiat Uno', 'Prata', 1/12);

console.log(uno);

console.log(uno.calcularGastoDeViagem(70, 5));

const hrv = new Carro('Honda', 'Branco', 1/10);

console.log(hrv);
console.log(hrv.calcularGastoDeViagem(100, 6));




