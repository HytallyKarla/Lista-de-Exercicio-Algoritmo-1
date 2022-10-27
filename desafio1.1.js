/*1. Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e
profissão, a partir disso você deve exibir um texto com todas essas informações pra
ele
Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg profissão: Programador
altura: 1.83(Aqui precisamos coletar o número quebrado, não vale usar tipo
caractere para altura hein)
Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de
altura e pesa 74kg.*/

/*2. Utilizando o algoritmo anterior verifique se o usuário é maior ou menor de idade, se
ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for
menos exiba “Sem gelada para você”*/


var nome = prompt("insira seu nome")
var idade = prompt("Insira sua idade")
var peso = prompt("Insira seu peso")
var altura = prompt("Insira sua altura")
var profissão = prompt("Insira sua profissão")


console.log("Olá", nome, " você tem ", idade, " anos, é ", profissão, ", tem ", altura, " de altura e pesa ", peso, "kg")

//2
if(idade >= 18){
console.log ("Está liberado tomar uma gelada")
}else {
    console.log("Não pode beber ainda")
}