// Extras:
// Para fazer uma versão mais robusta vocês poderiam usar as seguintes lógicas
//
// let fraseSemTraco = frase.replace(/-/g, " ")
// let fraseSemAcentos = fraseSemTraco.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
// let fraseSemEspacos = fraseSemAcentos.replace(/ /g, "");
//
// Para "limpar" a frase
// Também poderíamos usar o método .toLowerCase() para checar mesmo com letras
// maiúsculas e minúsculas.

export function checaPalindromo(frase) {
    // Uma forma simples de inverter uma string é transformá-la em um array
    // e usar o método reverse()
  
    // Supondo que a frase seja "darvas"
    let letrasSeparadas = frase.split(""); // ['d','a','r','v','a','s']
    let letrasInvertidas = letrasSeparadas.reverse(); // ['s','a','v','r','a','d']
    let fraseInvertida = letrasInvertidas.join(""); // 'savrad'
  
    if (fraseInvertida === frase) {
      return true;
    }
  
    return false;
  }