// Crie um Switch onde trata uma variável que terá a string de qual
//  é o dia da semana (domingo, segunda, etc).
// retorne uma mensagem diferente de sua escolha para cada dia.

const dia = "Terça";
switch (dia) {
  case "Domingo":
    console.log("Amanhã é segunda.");
    break;
  case "Segunda":
    console.log("A semana começou.");
    break;
  case "Terça":
    console.log("Um da depois do começo da semana.");
    break;
  case "Quarta":
    console.log("Já estamos no meio da semana!");
    break;
  case "Quinta":
    console.log("Quase no fim.");
    break;
  case "Sexta":
    console.log("Amanhã é sábado.");
    break;
  case "Sabado":
    console.log("Dia de descanso.");
    break;
  default:
    console.log(`O dia ${dia}, não existe :( .`);
}
