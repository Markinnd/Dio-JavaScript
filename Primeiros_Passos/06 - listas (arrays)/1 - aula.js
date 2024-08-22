/* Listas _ ARRAYS _  VETORES
//Lista: é uma sequência de dados, onde os elementos são armazenados em ordem.
*/
//Primeira Parte:

const alunos = ['João', 'Vitor', 'Marina'];

//chamando toda a lista:
console.log(alunos);

//chamando uma posição especifica da lista:
console.log(alunos[0]);

//adicionar elementos à lista:

alunos.push('Renan');

//adicionar elemento à lista em posição específica:
//essa forma também substitui o elelemento originalmente na lista
alunos[4] = 'Vinícius';

console.log(alunos);

//tirar um elemento da lista:
console.log(alunos.pop()); //remove o ultimo elemento e o imprime

console.log(alunos.shift()); // remove o primeiro elemento e o imprime

console.log(alunos);


//Segunda Parte:


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas);

notas.length; //retorna quantos elementos tem na lista

console.log(notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma/notas.length) //para calcular a média, precisamos dividir a soma das notas pela quantidade de notas que


//Terceira parte:
//usando estruturas de repetição:
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for em uma string

const nome = 'Marcus Antonio Dornelas Anderle';

for (i = 0;  i <= nome.length; i++) {
    console.log(nome[i]);
}

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
    
}
*/


