
const valorProduto = 100;
let aPagar;
const tipoDePagamento = '3x';

if (tipoDePagamento === 'pix' || tipoDePagamento === 'dinheiro') {
    aPagar = valorProduto - (valorProduto * 0, 15);
    console.log('Total a pagar ' + aPagar);
} else if (tipoDePagamento === 'debito') {
    aPagar = valorProduto - (valorProduto * 0, 10);
    console.log('Total a pagar ' + aPagar);
} else if (tipoDePagamento === '1x' || tipoDePagamento === '2x') {
    aPagar = valorProduto;
    console.log('Total a pagar ' + aPagar);
} else {
    aPagar = valorProduto + (valorProduto * 0,10);
    console.log('Total a pagar '+aPagar);
}