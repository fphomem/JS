let numero = 15;
let numeroDivisivelPor5 = (numero % 5) === 0
;

if(numero === 0){
    console.log('Numéro invalido');
}
else if(numeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Nao');
}