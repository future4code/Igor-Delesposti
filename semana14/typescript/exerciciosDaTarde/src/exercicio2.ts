const arr: number[] = [15, 45, -15, 20, 35, 151, 948];

console.log(arrayDeDados (arr))

type novosDados = {
    quantidade: number,
    impares: number,
    soma: number,
}

function arrayDeDados (arr: number[]): novosDados{
    let soma: number = 0;
    let impares: number = 0;
    for(const indexDoArray of arr){
        soma = soma + indexDoArray;
        (indexDoArray % 2) !== 0? impares ++ : false;
    }    
    return {
        quantidade: arr.length,
        impares: impares,
        soma: soma
    }
}

