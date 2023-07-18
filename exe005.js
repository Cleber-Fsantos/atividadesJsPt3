// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
let numero1  = 0
let numero2 = 1
let fibo;

for (let indice = 1; indice <= 10; indice++){
    console.log(`${numero1}`)
    fibo=numero1+numero2
    numero2 = numero1
    numero1 = fibo
}