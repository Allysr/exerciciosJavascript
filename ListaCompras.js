alert('Lista de compras')
let continuar = prompt('Você deseja inserir algum item na lista? 1- Sim  2-Não')
while (continuar == 1) {
  let comida = prompt('Digite a comida que você deseja?')
  let categoria = prompt('Inserir em qual categoria: 1- Frutas 2- Congelados 3- Doces')
  
  if (categoria == 1) {
    var frutas = []
    frutas.push(comida) 
  }
  else if (categoria == 2) {
    var congelados = []
    congelados.push(comida)
  }
  else {
    var doces = []
    doces.push(comida)
  }
   continuar = prompt('Você deseja inserir algum item na lista? 1- Sim  2-Não')
}

console.log(frutas)
console.log(congelados)
console.log(doces))

