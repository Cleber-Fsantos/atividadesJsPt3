// 9. Faça um programa que receba um número do usuário e mostre
//    no console a contagem regressiva até 0.

let prompt  = require('prompt-sync')();
let NumeroUser = parseInt(prompt('Digite um Número e veja a contagem regressiva até 0: '));

while (NumeroUser >= 0){
    console.log(`${NumeroUser}`)
    NumeroUser--
}


