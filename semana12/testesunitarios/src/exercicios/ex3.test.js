import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("O número sorteado deve estar entre n1 e n2", () => {
    // Preparação
    const n1 = 1;
    const n2 = 100;

    // Execução
    const resultado = sorteiaNumero(n1, n2);

    // Verificação
    expect(resultado).toBeGreaterThanOrEqual(n1);
    expect(resultado).toBeLessThanOrEqual(n2);
  });
});

