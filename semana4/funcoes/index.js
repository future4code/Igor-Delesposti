// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// let resultado = minhaFuncao(8)
// console.log(resultado)

//---Exercícios de interpretação de código---
//1.a) 0
//b) (6) [0, 1, 0, 1, 2, 3]
//c) (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

//2.a) 0, 2, undefined
//b) Funcionaria pois estamos chamando o índice do array através da função

// let arrayDeNomes = [5, 10, 15, 20, 25];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, 5));
// console.log(funcao(arrayDeNomes, 10));
// console.log(funcao(arrayDeNomes, 30));

//3)A função incrementa um array a partir da soma e multiplicação da variável resultado.
// function somaMultiplicaIndice(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

// let resultado = somaMultiplicaIndice([5, 4])
// console.log(resultado)

//4)a.

// let anosHumanos = (idade) => {

//     let idadeDoCachorro = idade * 7;
//     return idadeDoCachorro
// }

// console.log(anosHumanos(4))

//b. 
// function parametros (nome, idade, endereco, estudante){
    
//     if(estudante === true){
//        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante")

//     }else {
//        return console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco +" e não sou estudante.")
//     }

   
// }


// parametros("Igor", 29, "Rio de Janeiro", false)

//5)

// let seculo = (ano) => {
//     if(ano >= 1001 && ano <= 1100){
//       return "O " + ano + " pertence ao século XI";
//   }else if(ano >= 1101 && ano <= 1200){
//       return "O " + ano + " pertence ao século XII";
//   }else if(ano >= 1201 && ano <= 1300){
//       return "O " + ano + " pertence ao século XIII";
//   }else if(ano >= 1301 && ano <= 1400){
//       return "O " + ano + " pertence ao século XIV";
//   }else if(ano >= 1401 && ano <= 1500){
//       return "O " + ano + " pertence ao século XV";
//   }else if(ano >= 1501 && ano <= 1600){
//       return "O " + ano + " pertence ao século XVI";
//   }else if(ano >= 1601 && ano <= 1700){
//       return "O " + ano + " pertence ao século XVII";
//   }else if(ano >= 1701 && ano <= 1800){
//       return "O " + ano + " pertence ao século XVIII";
//   }else if(ano >= 1801 && ano <= 1900){
//       return "O " + ano + " pertence ao século XIX";
//   }else if(ano >= 1901 && ano <= 2000){
//       return "O " + ano + " pertence ao século XX";
//   }else if(ano >= 2001 && ano <= 2020){
//       return "O " + ano + " pertence ao século XXI";
//   }else{
//       return "Ano fora do intervalo entre 1000dc e 2020dc.";
//   }
//   }
  
//   console.log(seculo(1800));

//6
//a
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
const tamanhoArray = (array) => {
    return array.length
}
console.log(tamanhoArray(array))

//b
const booleano = (numero) =>{
    if(numero % 2 === 0){
        return  true
    }else{
        return  false
    }
}

console.log(booleano(55))

//c
const quantidadePar = (array) => {
    let arrayPar = 0
    for(let elemento of array){
        if(elemento % 2 === 0){
            arrayPar++
        }
    }
    return arrayPar
}
console.log(quantidadePar(array))

//d
const quantidadePar1 = (array) => {
    let arrayPar = 0
    for(let elemento of array){
        if(booleano(elemento) === true){
            arrayPar++
        }
        
    }
    return arrayPar
}
console.log(quantidadePar1(array))










