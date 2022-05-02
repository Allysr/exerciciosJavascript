// João Papo-de-Pescador, homem de bem, comprou um microcomputador
// para controlar o rendimento diário de seu trabalho. Toda vez
// que ele traz um peso de peixes maior que o estabelecido pelo
// regulamento de pesca do estado de São Paulo (50 quilos) deve
// pagar uma multa de R$ 4,00 por quilo excedente. João precisa
// que você faça um algoritmo que leia a variável P (peso de peixes)
// e verifique se há excesso. Se houver, gravar na variável E (Excesso)
// e na variável M o valor da multa que João deverá pagar.
// Caso contrário deve mostrar tais variáveis com o conteúdo ZERO.

var p = prompt ('Insira o tamanho do peixe(Somente números):')
if (p > 50) {
  const MULTA = (p - 50) * 4;
  var e = "excesso";
  var m = MULTA;
  console.log ('O valor inserido foi: ' + p )
  console.log ( e )
  console.log ( m )
}
else {
  e = 0;
  m = 0;
  console.log ('O valor inserido foi: ' + p )
  console.log ( e )
  console.log ( m )
}
