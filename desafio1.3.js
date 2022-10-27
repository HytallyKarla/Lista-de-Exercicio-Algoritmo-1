//Faça um algoritmo que utilize a idade informada pelo usuário, e nos mostre sua
//idade em meses, semanas e dias. Considerar ano com 365 dias, mês com 30 dias e
//semana com 7 dias.


var idade = parseInt(prompt("Insira sua idade"))
var dias = idade * 365
var semanas = parseInt(dias / 7)
var meses = idade * 12 

console.log("Você tem", meses, "meses. ", semanas, " semanas. ", dias, "dias de vida.")