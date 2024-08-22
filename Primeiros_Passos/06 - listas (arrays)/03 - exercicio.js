/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ['Fiorella','Erina', 'Vinicius', 'Vanessa'];

let vIniciais = []; //cria um array para armazenar os nomes que iniciam com a letra V.

for (i=0; i < nomes.length ; i++){  
    if(nomes[i].charAt(0).toLowerCase() == 'v'){  
        vIniciais.push(nomes[i]);  //adiciona o nome na posição do array vInciais[]
    }                                  
}                              
console.log('Nomes que começam com a letra V:');
console.log(vIniciais);  //imprime todos os nomes que começam com a letra V