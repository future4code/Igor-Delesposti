export function checaPalindromo(frase) {
    let polindromo = 
    frase.split('').reverse().join('')

    if(frase === polindromo){
        return true
    }else {
        return false
    }
}
