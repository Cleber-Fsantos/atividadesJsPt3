// 4. Faça um programa que imprima na tela a tabuada de um número
//    qualquer escolhido pelo usuário até o 10.

let prompt  = require('prompt-sync')();
let tabuadaX  = parseInt(prompt('Digite qual a tabuada você deseja visualizar (0-10): '));


for (let indice = 0; indice <= 10; indice++){
    console.log(`${tabuadaX} X ${indice} = ${indice * tabuadaX}`)
}


