

// objeto é como uma coleção dinamica de chave e valor.
const marcus = {
    nome: `Marcus Dornelas`,
    idade: 38
};

//acessando os dados do objeto:
console.log(marcus.nome);
console.log(marcus.idade);
console.log(marcus);

//adicionar um novo atributo no objeto:
marcus.altura = 1.78;

console.log(marcus);

//removendo o atributo altura do objeto.
delete  marcus.altura; //removendo o atributo altura do objeto.

console.log(marcus);

