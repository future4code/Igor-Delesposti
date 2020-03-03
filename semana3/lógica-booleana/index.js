const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
// false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
// false

console.log("e. ", typeof resultado)
// boolean



let array
    console.log('I. ', array)
    // undefined
    
    array = null
    console.log('II. ', array)
    // null
    
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    // 11
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    // 3 e 4
    
    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    // 19 e 9
    
    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    // 3

    
    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)
    
    // 1

    
    //A. Array são maneiras de se guardar e acessar mais de uma informação ao mesmo tempo.
    // Se declara como let array = [1, 2, 3]

    //B. array[0]

    //C. array.length

    //D. undefined - null - 11 - 3 e 4 - 19 e 9 - 3 - 1


    //--------------------------Exercícios de escrita de código--------------------------

    //1. A)
    FAHRENHEIT => KELVIN 
const kelvin = (77 - 32)*5/9 + 273.15
console.log("K ", kelvin)  //Resultado: 298.15K

// B)
    CELSIUS => FAHRENHEIT
const fahrenheit = (80)*9/5 + 32
console.log("F ", fahrenheit)   //Resultado: 176F 

// C) 
const fahrenheit1 = (30*1.8)+32
const kelvin2 = 30+273.15
console.log("FAHRENHEIT: " + fahrenheit1 + " KELVIN: " + kelvin2) //Resultado: FAHRENHEIT: 86 KELVIN: 303.15

// D)
const temperatura = Number (prompt("Insira o valor de temperatura em Celsius que deseja converter:"))
const fahrenheit11 = (temperatura * 1.8)+32
const kelvin22 = temperatura+273.15
console.log("FAHRENHEIT: " + fahrenheit11 + " KELVIN: " + kelvin22)

//2


const musica = String (prompt("Qual estilo de música você mais gosta?"))
console.log("Resposta:" + musica)

const nomeDaMae = String (prompt("Qual o nome da sua mãe?"))
const nomeDoPai = String (prompt("E qual o nome do seu pai?"))
console.log("Resposta: " + nomeDaMae + " e " + nomeDoPai)

const corFavorita = String (prompt("Qual a sua cor favorita?"))
console.log("Resposta: " + corFavorita)

const idade = Number (prompt("Qual sua idade?"))
console.log("Resposta: " + idade + " anos.")

const altura = Number (prompt("Qual sua altura?"))
console.log("Resposta: " + altura + "m.")

//3 A)

const consumoQuiloWatts = Number (prompt("Quantidade de quilowatts hora consumida:"))
const calculo = consumoQuiloWatts * 0.05
console.log("Valor a ser pago R$: " + calculo) // Resposta 14

//B)

const preco = 0.05
let consumoQuiloWatts = 280

let subTotal = consumoQuiloWatts * preco
let desconto = subTotal * 0.15
let total = subTotal - desconto

console.log("Valor a ser pago já com desconto de 15% foi R$: " + total) // Resposta 11.9








    