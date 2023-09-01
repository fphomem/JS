
let valorEtanol = 3.99;
let valorGasolina = 5.79;
let tipoCombustivel = 'Gasolina';
let distancia = 150;
let consumoKmPorLitro = 10;

let mediaGeral = (distancia / consumoKmPorLitro);

if (tipoCombustivel == 'etanol') {
    let gastoGeral = mediaGeral * valorEtanol;
    console.log('Gasto total com Etanol ' + gastoGeral);
} else if (tipoCombustivel == 'gasolina') {
    let gastoGeral = mediaGeral * valorGasolina;
    console.log('Gasto total com Gasolina ' + gastoGeral);
} else {
    console.log('Combustivel invalido');
}





