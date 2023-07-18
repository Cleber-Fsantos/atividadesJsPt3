// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let prompt  = require('prompt-sync')();
let NumeroUser;

while (NumeroUser != 0){
     NumeroUser = parseInt(prompt('Digite um Número: '));
}

console.log(`Parabéns, Você saiu do LOOOP de 0!!!!`)

