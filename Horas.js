// Elabore um algoritmo que leia as variáveis C e N,
// respectivamente código e número de horas trabalhadas
// de um operário, e calcule o salário sabendo-se que
// ele ganha R$ 10,00 por hora. Quando o número de
// horas exceder a 50 calcule o excesso de pagamento
// armazenando-o na variável E, caso contrário zerar tal
// variável. A hora excedente de trabalho vale R$ 20,00.
// No final do processamento imprimir o salário total e
// o salário excedente.

var c = prompt("Digite seu código: ");
var n = prompt("Número de horas trabalhadas: ");
const SALARIO = 10 * 1 * n;

if (n > 50) {
  var e = (n - 50) * 20;
  console.log("O salário é: " + SALARIO);
  console.log("O salário excedente é: " + e);
} else {
  e = 0;
  console.log("O salário é: " + SALARIO);
  console.log("O salário excedente é: " + e);
}
