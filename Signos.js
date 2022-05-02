var continuar = "true";
while (continuar == "true") {
  var dia = prompt("Digite o dia de seu nascimento: ");
  if (dia >= 31) {
    alert("Número maior que os dias do mês, coloque um número entre 1 e 31.");
    var dia = prompt("Digite o dia de seu nascimento: ");
  }
  var mes = prompt("Digite o mês do nascimento (em número):");
  if (mes >= 12) {
    alert("Número maior que os meses do ano, coloque um número entre 1 e 12.");
    var mes = prompt("Digite o mês do nascimento (em número):");
  }

  if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
    alert("Aquario");
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    alert("Peixes");
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    alert("Áries");
  } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    alert("Touro");
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    alert("Gemeos");
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    alert("Cancer");
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    alert("Leao");
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    alert("Virgem");
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    alert("Libra");
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    alert("Escorpião");
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    alert("Sagitário");
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    alert("Capricornio");
  } else {
    alert("Ops!");
  }

  continuar = prompt("Você deseja continuar? True or False");
  if (continuar == "t") {
    continuar = "true";
  } else if (continuar == "f") {
    continuar = "false";
  }
}
