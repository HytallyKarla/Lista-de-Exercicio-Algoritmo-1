//4. Utilizando os algoritmos já realizados como base, calcule o IMC do seu usuário e
//informe a faixa dele, segue detalhes do cálculo do IMC e suas faixas.
//- Magreza, quando o resultado é menor que 18,5 kg/m2;
//- Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//- Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//- Obesidade, quando o resultado é maior que 30 kg/m2.


var peso = 0.0
var altura = 0.0
var imc = 0.0
peso = prompt("Insira seu peso em kg")
altura = prompt("Insira sua altura em metros")
imc = peso / (altura * altura)

console.log("Seu imc é: ", imc)

if(imc < 18.5){
    console.log("Seu IMC indica: magreza")
}
if(imc >= 18.5 && imc < 24.9){
    console.log("Seu IMC indica: normal")
}
if(imc >= 24.9 && imc < 30){
    console.log("Seu IMC indica: sobrepeso")
}
if(imc >= 30){
    console.log("Seu IMC indica: obeso")
}