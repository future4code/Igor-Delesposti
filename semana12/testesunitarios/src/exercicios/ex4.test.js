import { removeItensDuplicados } from "./ex4";
test ("Remova números duplicados", () => {
  const arrayDeTeste = [1, 2, 3, 2, 4, 3];

  console.log(removeItensDuplicados(arrayDeTeste));
  
})

test("Remover strings duplicados", () => {
  const arrayDeString = ["Oie", "Tudo bem?", "Oie" ]

  console.log(removeItensDuplicados(arrayDeString))
})

