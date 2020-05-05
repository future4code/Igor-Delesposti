export function primeirasLetrasParaMaiusculas(frase) {
    let palavras = frase.split(" ");
  
    // É um array que vai conter as palavras da frase capitalizadas, ao final precisamos
    // juntar as palavras novamente em uma frase
    const palavrasCapitalizadas = palavras.map(palavra => {
      // Supondo que nossa palavra seja "soter"
      const primeiraLetraCapitalizada = palavra.charAt(0).toUpperCase(); // "S"
      const palavraSemAPrimeiraLetra = palavra.slice(1); // "oter"
  
      return primeiraLetraCapitalizada + palavraSemAPrimeiraLetra; // "Soter"
    });
  
    // Aqui no join é o momento que transformamos ["Oi", "Soter", "Tudo", "Bom"]
    // em "Oi Soter Tudo Bom", adicionando um espaço entre os itens do array.
    const fraseFinal = palavrasCapitalizadas.join(" ");
  
    return fraseFinal;
  }
  
