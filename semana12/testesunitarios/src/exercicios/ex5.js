export function ordenarArrayEmOrdemCrescente(array) {
    // Esse é um tipo de ordenação chamado de bubble sort.
    // Representação visual: https://visualgo.net/en/sorting
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const posicaoAtual = array[i];
        const proximaPosicao = array[j];
  
        if (posicaoAtual > proximaPosicao) {
          array[i] = array[j];
          array[j] = posicaoAtual;
        }
      }
    }
    return array;
  }
  