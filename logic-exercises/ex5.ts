// Escreva uma função que receba um horário expressado em segundos e transforme-o para o formato: `{hora}h {minuto}m {segundo}s`. Exemplos:

// **Entrada**           **Saída**

// 30                     `"30s"`

// 350                   `"5m 50s"`

// 3725                 `"1h 02m 05s"`

function seconsToHourString(input: number): string {
  const seconds = input % 60;
  const minutes = parseInt((input / 60).toString()) % 60;
  const hours = parseInt((input / 3600).toString());
  return `${hours}h ${minutes}m ${seconds}s`;
}
console.log(seconsToHourString(3725));
