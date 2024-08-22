/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

let notas = [2, 7, 3, 8, 9, 4];

for(i = 0; i < notas.length; i++){
    if (notas[i] > notas[0]){
        notas[0] = notas[i];
    }else if (notas[i] == notas[0] && notas[i] > notas[1]){
        notas[1] = notas[i];
    }
}

console.log("A maior nota foi: " + notas[0]);
