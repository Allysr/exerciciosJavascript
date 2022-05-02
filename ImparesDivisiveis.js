// Elabore um algoritmo que gera e escreve os números ímpares
// dos números lidos entre 100 e 200

for (let impar = 100; impar <= 200; impar++) {
  if (impar % 2 == 1) {
    console.log(impar);
  }
}


// Elabore um algoritmo que mostre todos os números entre 100 a 500
// que sejam divisíveis por 3 e 5.

for (let divisiveis = 100; divisiveis <= 500; divisiveis++) {
  if (divisiveis % 3 == 0 && divisiveis % 5 == 0) {
    console.log(divisiveis);
  }
}
