/*1. Peça para seu cliente informar seu nome, idade e salário atual e exibe essas
informações em tela.*/
// atividade 1

var nome = prompt("Insira seu nome")
var idade = parseInt(prompt("Insira sua idade"))
var salario = parseInt(prompt ("Qual seu salário atual?"))

console.log("Seu nome é:", nome, "você tem: ", idade, "anos. E recebe ", salario, "por mês.")

/*2. Faça a previsão do salário dele para os próximos 10 anos considerando que:
O cliente recebe, anualmente, aumento salarial.
Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o
seu salário atual; A partir do segundo ano, os aumentos salariais sempre
corresponderam ao dobro do percentual do ano anterior. Apresente todos os
valores com o ano correspondente ex: 2023 - R$1500.*/
// atividade 2

var aumento = 0.015

salario = salario + (salario * aumento)
console.log("2022 - ", salario)

for (var contador = 2023; contador <= 2032; contador++) {
  aumento = aumento * 2 
  salario = salario + (salario * aumento)
    console.log (contador, " - ", salario)
}

// atividade 3 
/*3. Peça para que seu cliente confirme as informações, se ele informar que digitou
errado, peça para colocar TODAS as informações novamente, se o cliente errar 4
vezes o programa deve ser encerrado.*/

