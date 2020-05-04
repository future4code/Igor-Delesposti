import { checaPalindromo } from "./ex2";

test("Checa se é palíndromo ou não", () => {
  // Preparação
  const fraseInput = 'reviver'

  // Execução
  const resultado = checaPalindromo(fraseInput)

  // Validação
  expect(resultado).toBe(true);
})

