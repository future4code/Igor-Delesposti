export {}
const operacao: string = process.argv[2];
const num1: number = Number(process.argv[3]);
const num2: number = Number(process.argv[4]);

switch(operacao){
  case "soma":
    console.log("Resultado:", num1 + num2)
    break;
  
  case "subtracao":
    console.log("Resultado:", num1 - num2);
    break;
  
  case "multiplicacao":
    console.log("Resultado:", num1 * num2);
    break; 
  case "divisao":
    console.log("Resultado:", num1 / num2);
    break;  
  
  }

