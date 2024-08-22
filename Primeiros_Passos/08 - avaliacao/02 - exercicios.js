/*
2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/

const { gets, print } = require('./funcoes_auxiliares-ex2');

const n = gets();
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n; i++) {
    const valor = gets();

    if (valor % 2 === 0) {
        if (maiorPar === 0 || valor > maiorPar) {
            maiorPar = valor;
        }
    } else {
        if (menorImpar === 0 || valor < menorImpar) {
            menorImpar = valor;
        }
    }
}

print('Maior número par: ' + maiorPar);
print('Menor número impar: ' + menorImpar);