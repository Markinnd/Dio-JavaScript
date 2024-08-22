
const { gets , print } = require('./funcoes-auxiliares.js');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(`O maior número sorteado é ${maiorValorEncontrado}`);