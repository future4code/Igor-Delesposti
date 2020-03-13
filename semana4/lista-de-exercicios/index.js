//------Exercício de interpretação de código------
//Exercício 1. É uma função de conversão do Dólar em Real. O usuário alimenta a variável cotacao e a função retorna
//esse valor em Reais através de valorEmDolar * cotacao. A variável meuDinheiro armazena esse resultado e imprime no console
//o resultado da conversão.

//Exercício 2. A função investeDinheiro recebe os parâmetros(tipoDeInvestimento e valor).
//A variável vazia valorAposInvestimento vai ser alimentada com o output da função.
//Depois ocorre a verificação com o switch/case, em que se o primeiro parâmetro da função
//for um dos "case", ele alimenta a variável valorAposInvestimento com o segundo parâmetro da função e realiza multiplicação, de acordo com o case selecionado.
// As variáveis novoMontante e segundoMontante são apenas para exemplo da invocação da função alimentando o case "Ações" e valor 150.
//No final o código imprime no console o valor das variáveis novoMontante e segundoMontante que foram invocadas com os parâmetros necessários.

//Exercício 3. É um array que verifica no loop for usando a condição que se o número for dívido por 2 e obtiver o resto 0 ele é par,
// e os que não forem pares serão ímpares, imprimindo no console um array com os números contidos no array original que são pares ou ímpares.



//Exercicio 4. É um array que está sendo impresso no console o menor número inteiro dentro do array original e o maior número inteiro
// utilizando o loop for of com as condições if.

//-----------Exercícios de Lógica de Programação-----------
//1.

// const novoArray = [1, 2, 3, 4, 5, 6, 7,]

// let array = [];

// for(let i = 0; i < novoArray; i++){
//     array = i;
// }

// console.log(novoArray);


// const meuArray = ["Volkswagen", "Volvo", "Ford", "Fiat"];
// let i = 0;
// let texto = "";
// while (meuArray[i]){
//     texto += meuArray[i] + ", ";
//     i++;
// }

// console.log(texto);

// const numerosDoArray = [35, 54, 60, 44, 51, 100, 115];
// const array1 = [];
// const array2 = [];

// for(let numero of numerosDoArray){
//     if(numero % 2 === 0){
//         array1.push(numero);
//     }else {
//         array2.push(numero);
//     }
// }
// console.log("Os números pares são: ", array1);
// console.log("Os números ímpares são: ", array2);

//2.a) FALSE
//b) FALSE
//c) TRUE
//d) TRUE
//e) TRUE

//3. 
//Ele não funciona pois foi colocado uma condição de (i <= quantidadeDeNumerosPares) sem alterar o valor de i, isso causa um
// loop infinito. Dentro do while era necessário adicionar e incrementar utilizando o i++ para se evitar o loop infinito.
// Segundo a condição deve ser apenas menor (<)  pois já está começando do número zero que é par.
// function numerosPares(numero){
//     const quantidadeDeNumerosPares = numero
//     let i = 0
    
//     while(i < quantidadeDeNumerosPares){
//         console.log( i * 2 )
//         i++  
//     }
// }
// console.log(numerosPares(5))

//4.

// function validarLadosTriangulo(a, b, c){
//     if (a === b && b === c){
//         console.log("Triângulo Equilátero");
    
//     }else if ( a !== b && b !== c && c !== a){
//         console.log("Triângulo Escaleno!");
//     }else{
//         console.log("Triângulo Isósceles");
//     }
// }

// validarLadosTriangulo(4, 4, 4);

// 5.
// function programa (num1, num2){
//     if(num1 > num2){
//         console.log("O número 1: ", num1,  " é maior que o número 2: ", num2);
//     }else{
//         console.log("O número 2: ", num2, " é maior que o número 1: ", num1);
//     }
    
//     if(num1 % num2 === 0){
//         console.log("O ", num1, "é divisível por ", num2);
//     }else{
//         console.log("O ", num1, "NÃO é divisível por ", num2);
//     }
    
//     if(num1 > num2){
//         console.log("A diferença entre eles é: ", num1 - num2);
//     }else{
//         console.log("A diferença entre eles é: ", num2 - num1);
//     }
// }   


// programa(15,30)

//----------------Exercícios de Funções---------------
//1.
// let meuArrayNumeros = [50, 30, 70, 80, 40, 90, 100];
//     let segundoMaiorNumero = 0;
//     let segundoMenorNumero = 0;

// meuArrayNumeros.sort(function(a,b){
//         return a - b
//     })
    
// segundoMenorNumero = meuArrayNumeros[(meuArrayNumeros.length -2 )];
// console.log(segundoMenorNumero);

// segundoMaiorNumero = meuArrayNumeros[1]
// console.log(segundoMaiorNumero);

//2. 
// let soma = function(){
//     alert("Hello Future4");
// }

// soma();


//----------------Exercícios de Objetos------------

//1.Um objeto é como se fosse um filme(usando uma analogia). O objeto FILME tem as propriedades ANO/DIRETOR/AUTOR, 
//uma de suas utilidades é quando queremos utilizar as mesmas propriedades e alterar os valores. 
// Podemos alimentar um array com as propriedades e depois filtrar os diferentes tipos de valores.

//2.
// function criaRetangulo(lado1, lado2){
//     let meuObjeto = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: (2 * (lado1 + lado2)),
//         area: (lado1 * lado2)
//     }
    
//     return meuObjeto
// }

// console.log(criaRetangulo(5, 6));


//3.
// let filmeFavorito = {
//     titulo: "O Senhor dos Anéis: As Duas Torres",
//     ano: 2002,
//     diretor: "Peter Jackson",
//     ator: ["Elijah Wood", "Orlando Bloom"],
//     atriz: ["Liv Tyler", "Miranda Otto"],
//     elenco: ["Viggo Mortensen", "Liv Tyler", "Miranda Otto", "Brad Dourif", "Cate Blanchett", "Andy Serkis"],

// }

// console.log("Venha assistir ao filme ", filmeFavorito.titulo, " de ", filmeFavorito.ano, " dirigido por ",
//  filmeFavorito.diretor, " e estrelado por ", filmeFavorito.ator[0], " ,", filmeFavorito.atriz[0], " e ", 
//  filmeFavorito.ator[1], filmeFavorito.elenco); 

