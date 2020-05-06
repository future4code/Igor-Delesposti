import { removeItensDuplicados } from "./ex4";

describe("Remove itens duplicados", () => {
  it("Testando array com números duplicados no meio", () => {
    // Preparação
    const valoresParaTeste = [1, 2, 3, 2, 4];

    // Execução
    const resultado = removeItensDuplicados(valoresParaTeste);

    // Verificação
    expect(resultado).toEqual([1, 2, 3, 4]);
  });

  it("Testando array com números duplicados nas pontas", () => {
    // Preparação
    const valoresParaTeste = [0, 2, 3, 2, 1, 0];

    // Execução
    const resultado = removeItensDuplicados(valoresParaTeste);

    // Verificação
    expect(resultado).toEqual([0, 2, 3, 1]);
  });

  it("Testando array sem números duplicados", () => {
    // Preparação
    const valoresParaTeste = [1, 2, 3, 4, 5, 6, 7, 9, 0];

    // Execução
    const resultado = removeItensDuplicados(valoresParaTeste);

    // Verificação
    expect(resultado).toEqual(valoresParaTeste);
  });
});

