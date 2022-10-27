/*. Utilizando os últimos exercícios como base agora você deve exibir todos os anos
que o usuário já viveu até o ano atual e informar qual a idade dele no determinado
ano.
ATENÇÃO: Aqui você deve utilizar uma estrutura de repetição(para)*/

var anoNas = parseInt(prompt("Insira seu ano de nascimento"))
var idade = 0

for (var contador = anoNas; contador <= 2022; contador++) {
   console.log(contador, "-", idade, " anos de idade")
   idade++
}