
const precoGasolina = 5.50;
const precoEtanol = 4.50;
const kmPorLitros = 10;
let distanciaEmKm = 100;
const litrosConsumidos = (distanciaEmKm/kmPorLitros);

const tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Gasolina') {
    const valorGasto =  litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
