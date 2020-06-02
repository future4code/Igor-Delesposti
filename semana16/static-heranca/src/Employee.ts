//6. A) Duas vezes.
//   B) Pode ser impresso todos os dados do constructor User e Employee. 

import { User } from "./User";

export class Employee extends User {
  protected admissionDate: number | string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: number | string,
    baseSalary: number
  ) {
    console.log("Chamando o construtor da classe Employee");
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): number | string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
      return this.baseSalary + 400
  }
}

const testEmployee: Employee = new Employee(
  "251",
  "employee1@gmail.com",
  "Chaves",
  "158495",
  "25/04/2019",
  800
);
console.log("Id: ", testEmployee.getId());
console.log("Email: ", testEmployee.getEmail());
console.log("Nome: ", testEmployee.getName());
console.log("Data de admissão: ", testEmployee.getAdmissionDate());
console.log("Salário base: ", testEmployee.getBaseSalary());
console.log("Cálculo total de salário (Salário+Benefícios): ", testEmployee.calculateTotalSalary());
