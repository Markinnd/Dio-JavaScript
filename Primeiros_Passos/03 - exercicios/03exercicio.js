/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    const desconto = 0.1; // 10%
    const precoFinal = precoEtiqueta - (precoEtiqueta*desconto);
    console.log(`O preço final da compra é R$ ${precoFinal.toFixed(2)}`);
} else if(formaDePagamento === 2){
    const desconto = 0.15; // 15%
    const precoFinal = precoEtiqueta - (precoEtiqueta*desconto);
    console.log(`O preço final da compra é R$ ${precoFinal.toFixed(2)}`);
} else if(formaDePagamento === 3){
    const precoFinal = precoEtiqueta;
    console.log(`O preço final da compra é R$ ${precoFinal.toFixed(2)}`);
}  else {
    const juros = 0.1; // 10%
    const precoFinal = precoEtiqueta + (precoEtiqueta * juros);
    console.log(`O preço final da compra é R$ ${precoFinal.toFixed(2)}`);
}