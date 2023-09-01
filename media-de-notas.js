let nota1 = 1;
let nota2 = 2;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Em recuperação');
} else if (media > 7) {
    console.log('Aprovado');
}