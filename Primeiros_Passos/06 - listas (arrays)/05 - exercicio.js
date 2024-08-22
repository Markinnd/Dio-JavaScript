/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

let medias = [2, 7, 3, 8, 10, 4];
let mediasEmRecuperacao = [];
let mediasAprovadas = [];

for (let i = 0; i < medias.length; i++) {
    let elementoAtual = medias[i]; // pega o valor do elemento atual da iteração
    
    if(elementoAtual <5) { 
        mediasEmRecuperacao.push(medias[i]); // adiciona a média em recuperação na lista
    } else{
         mediasAprovadas.push(medias[i]) ;//adiciona a média aprovada na lista
    }
};

console.log(mediasEmRecuperacao); 



