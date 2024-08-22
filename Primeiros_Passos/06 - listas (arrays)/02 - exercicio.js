/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];    

let pares = [];  //cria vetor para armazenar os valores pares

for(i=0; i < numeros.length ; i++){   //percorrendo a lista de numeros
    if (numeros[i] % 2 == 0){       //se o valor for divisivel por 2 é par
        console.log(`O ${numeros[i]} é Par`);      //imprime na tela o numero Par
        pares.push(numeros[i]);         //adiciona o Numero Par no Vetor "par"
    }
}
console.log("Os Números Pares são: ", pares);//Imprimindo todos os Numeros Pares</