export function sorteiaNumero(min, max) {
    
        min = Math.ceil(min);
        max = Math.floor(max);
        const resultado = Math.floor(Math.random() * (max - min)) + min;
        console.log(resultado)
      
}
