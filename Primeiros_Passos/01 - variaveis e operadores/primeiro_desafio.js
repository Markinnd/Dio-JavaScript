

const precoCombustivel = 5.90;
const kmPorLitros = 12;
let distanciaEmKm = 2000;

const litrosConsumidos = (distanciaEmKm/kmPorLitros);

console.log(litrosConsumidos.toFixed(2));

const valorGasto =  litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
