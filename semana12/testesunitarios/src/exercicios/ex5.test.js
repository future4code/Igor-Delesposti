import { ordenarArrayEmOrdemCrescente } from "./ex5";

describe("Ordena array em ordem crescente", () => {
  it("Testando um array desordenado", () => {
    // Preparação
    const valoresParaTeste = [4, 2, 3, 2, 1, -30];

    // Execução
    const resultado = ordenarArrayEmOrdemCrescente(valoresParaTeste);

    // Verificação
    expect(resultado).toEqual([-30, 1, 2, 2, 3, 4]);
  });

  it("Testando um array já ordenado", () => {
    // Preparação
    const valoresParaTeste = [1, 2, 3, 4, 5];

    // Execução
    const resultado = ordenarArrayEmOrdemCrescente(valoresParaTeste);

    // Verificação
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });
});