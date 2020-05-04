import { anoBissexto } from "./ex1";

test("Checar se o ano é bissexto", () =>{
  //Preparação
  const anoTeste = 2004
 
  //Execução
  const resultado = anoBissexto(anoTeste)

  //Validação
  expect(resultado).toBe(true);
})

 
