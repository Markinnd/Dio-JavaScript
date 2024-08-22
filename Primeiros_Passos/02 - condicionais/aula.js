
const numero = 0;
const eNumeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log(`O número ${numero} é iválido`);
} else if (eNumeroPar ) {
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é impar`);
}
