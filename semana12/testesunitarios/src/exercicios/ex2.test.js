import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("palíndromo - mirim", () => {
    // Preparação
    const nome = "mirim";

    // Execução
    const resultado = checaPalindromo(nome);

    // Verificação
    expect(resultado).toBe(true);
  });

  it("palíndromo - arara", () => {
    // Preparação
    const nome = "arara";

    // Execução
    const resultado = checaPalindromo(nome);

    // Verificação
    expect(resultado).toBe(true);
  });

  it("palíndromo - sopapos", () => {
    // Preparação
    const nome = "sopapos";

    // Execução
    const resultado = checaPalindromo(nome);

    // Verificação
    expect(resultado).toBe(true);
  });

  it("palíndromo - radar", () => {
    // Preparação
    const nome = "radar";

    // Execução
    const resultado = checaPalindromo(nome);

    // Verificação
    expect(resultado).toBe(true);
  });

  it("Não é palíndromo", () => {
    // Preparação
    const frase = "nada";

    // Execução
    const resultado = checaPalindromo(frase);

    // Verificação
    expect(resultado).toBe(false);
  });
});


