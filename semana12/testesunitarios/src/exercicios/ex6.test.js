import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Todas as palavras com letra maíscula", () => {
  it("Testando 'capitalização'", () => {
    // Preparação
    const frase = "Oi! Sou uma string bem legal para testes!";
    const fraseEsperada = "Oi! Sou Uma String Bem Legal Para Testes!";

    // Execução
    const resultado = primeirasLetrasParaMaiusculas(frase);

    // Verificação
    expect(resultado).toBe(fraseEsperada);
  });
});
