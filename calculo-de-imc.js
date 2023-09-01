
let peso = 120;
let altura = 1.81;

let imc = peso / Math.pow(altura,2);

if(imc < 18.5){
    console.log(imc+' Abaixo do peso');
} else if(imc >= 18.5 && imc < 25){
    console.log(imc+' Peso normal');
} else if(imc >= 25 && imc < 30){
    console.log(imc+' Acima do peso');
} else if(imc >= 30 && imc < 40){
    console.log(imc+' Obeso');
} else{
    console.log(imc+' Obesidade grave');
}