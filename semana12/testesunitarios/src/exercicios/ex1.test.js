import { anoBissexto } from "./ex1";

// Describe é só uma forma de agrupar testes
describe("Ano bissexto", () => {
  test("Múltiplo de 400 ", () => {
    // Preparação
    const ano = 1600;

    // Execução
    const resultado = anoBissexto(ano);

    // Verificação
    expect(resultado).toBe(true);
  });

  test("Múltiplo de 4 ", () => {
    // Preparação
    const ano = 1996;

    // Execução
    const resultado = anoBissexto(ano);

    // Verificação
    expect(resultado).toBe(true);
  });

  test("Ano não bissexto", () => {
    // Preparação
    const ano = 1997;

    // Execução
    const resultado = anoBissexto(ano);

    // Verificação
    expect(resultado).toBe(false);
  });
});

 
