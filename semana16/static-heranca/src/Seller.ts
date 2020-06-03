//8. A) Tive que passar todos parametros que são utilizados nos constructor Pai.
//B) Consegui imprimir todos os métodos publicos menos o password pois ele é private.

import { Employee } from "./Employee";

export class Seller extends Employee {}

const testSeller: Seller = new Seller(
  "111",
  "seller1@gmail.com",
  "Kiko",
  "987654",
  "01/01/2000",
  1000
);

console.log("Id: ", testSeller.getId());
console.log("Email: ", testSeller.getEmail());
console.log("Nome: ", testSeller.getName());
console.log("Data de admissão: ", testSeller.getAdmissionDate());
console.log("Salário base: ", testSeller.getBaseSalary());
console.log("Cálculo total de salário (Salário+Benefícios): ", testSeller.calculateTotalSalary());