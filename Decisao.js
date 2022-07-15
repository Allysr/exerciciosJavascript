let resposta = prompt("Para onde você quer seguir? 1- Front-end 2- Back-end")

if(resposta == 1) {
    let framework = prompt("1- React 2- Vue")
}
else if(resposta == 2) {
    let framework = prompt("1- C# 2- Java")
}
else {
    console.log("Ops, escolha um número válido.")
}

let especializar = prompt("Para onde você quer seguir? 1- Seguir se especializando na área escolhida. 2- Seguir se desenvolvendo para se tornar Fullstack.")

if(especializar == 1) {
    console.log('Boa sorte em seu trajeto!')
}
else if(especializar == 2) {
    console.log('Há muito o que aprender!')
}
else {
    console.log("Ops, escolha um número válido.")
}

let tecnologia = prompt("Quais tecnologias você quer aprender?")
let aprender = "";
while(tecnologia != aprender){
    let tecnologia = prompt("Quais tecnologias você quer aprender?")

}
