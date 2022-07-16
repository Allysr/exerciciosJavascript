var numero = Math.floor(Math.random()* (10-1+1)+1)
var tentativas = 1

while (tentativas <= 3){
     escolha = Number(prompt('Digite um número:'))
     if (escolha == numero){
        alert("Parabens voce acertou!")
        break;
     }
     tentativas++
}
