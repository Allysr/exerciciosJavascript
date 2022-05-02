// Dado o algoritmo do exercício 7, reescreva-o de forma que ele possa imprimir
// os 10 próximos elementos da sequência Fibonacci,
// mas A PARTIR DE QUALQUER número.

var numberUm = 1;
var numberDois = 1;
var numero = prompt("Insira um numero:");
var cont = 1;
while (cont <= 10) {
  let soma = numberUm + numberDois;
  numberUm = numberDois;
  numberDois = soma;
  if (soma > numero) {
    console.log(soma);
    cont++;
  }
}
