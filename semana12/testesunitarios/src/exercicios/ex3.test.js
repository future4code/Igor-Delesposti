import { sorteiaNumero } from "./ex3";

  test("Primeiro teste", () => {
    //Preparação
    const resultado = sorteiaNumero(2, 10);

    //Execução
    console.log = jest.fn()
    console.log(resultado)

    //Verificação
    expect(console.log).toHaveBeenCalledWith(resultado) 
  });

