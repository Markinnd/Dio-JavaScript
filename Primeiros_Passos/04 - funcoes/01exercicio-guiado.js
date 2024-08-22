
function escrevaMeuNome(nome){
    return `Meu nome é ${nome}`;
}

escrevaMeuNome('Marcus');

function verificarMaioridade(idade){
    if(idade >= 18) {
        console.log(escrevaMeuNome('Marcus')+ 'e sou Maior');
        } else{
        console.log(escrevaMeuNome('Marcus')+'e sou Menor');
        }
}

verificarMaioridade(15);


