// -------------------- Exercícios de interpretação de código -------------------

//1. Enquanto o valor de i < 15 é somado e atribuído na variável sum.
// E o resultado no console impresso é 105.

//2. a. .push adiciona um novo elemento ao array.
//b. Array(4) [10, 15, 25, 30]
//c. const numero = 3  Array(6) [12, 15, 18, 21, 27, 30]
// const numero = 4 Array(1) [12]


//Desafio interpretação de código

// 0
// 00
// 000
// 0000

//-------------------Exercícios de escrita de código-----------------

//a.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maior = arrayOriginal [0]
// let menor = arrayOriginal [0]

// for(let num of arrayOriginal){
//     if(num > maior) {
//         maior = num
//     }else if(num < menor){
//         menor = num
//     }
// }

// console.log("O maior número é",maior,"o menor número é", menor)

//b.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayDividido = []


// for(let i = 0; i < arrayOriginal.length; i++){
//     arrayDividido.push(arrayOriginal[i]/10)
// }
    
// console.log(arrayDividido)

//c.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayDividido = []


// for(let i = 0; i < arrayOriginal.length; i++){
//     if( i % 2 === 0){
//         arrayDividido.push(arrayOriginal[i])
//     }
// }
    
// console.log(arrayDividido, "é par")

//d.

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let index = 0
const frases = []
for(let i = 0; i < arrayOriginal.length; i++){
    index = arrayOriginal[i]
    frases.push("O elemento do índex "+ i+ "é "+ index)
    
}
console.log(frases) 