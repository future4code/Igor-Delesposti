import { Client } from "./Client";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager";

//1.
//A) Consegui imprimir todas propriedades pois todas são públicas.
// const testClient: Client = {
//   name: "Goli",
//   registrationNumber: 1,
//   consumedEnergy: 100,

//   calculateBill: () => {
//     return 2;
//   },
// };

// console.log("Cliente: ", testClient.name);
// console.log("Número de registro: ", testClient.registrationNumber);
// console.log("Consumo de energia: ", testClient.consumedEnergy, "kWh");
// console.log(testClient.calculateBill());

//2.
// A) Cannot create an instance of an abstract class.
// B) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância nela mesmo.

// 3.
// const testResidence: Residence = new Residence(
//     4,
//     "1246629"
// )

// console.log(testResidence.getCep())
// console.log(testResidence.getResidentsQuantity())

//4.
// const testResidentialClient: ResidentialClient = new ResidentialClient(
//     "Chaves",
//     258915,
//     90,
//     "123.456.789-10",
//     4,
//     "235456-79",
// )

// console.log("Cliente: ", testResidentialClient.name);
// console.log("Número de registro: ", testResidentialClient.registrationNumber);
// console.log("Consumo de energia: ", testResidentialClient.consumedEnergy, "kWh");
// console.log("Quantidade de pessoas em casa: ", testResidentialClient.residentsQuantity);
// console.log("Cep: ", testResidentialClient.cep)
// console.log("Valor da conta: R$", testResidentialClient.calculateBill())

//5.
// const testCommercialClient: CommercialClient = new CommercialClient(
// "Lava-Carros do Chaves",
// 258959,
// 150,
// "225.456.195/0001-52",
// 3,
// "231456-79",
// )

// console.log("Cliente: ", testCommercialClient.name);
// console.log("Número de registro: ", testCommercialClient.registrationNumber);
// console.log("Consumo de energia: ", testCommercialClient.consumedEnergy, "kWh");
// console.log("Quantidade de andares no local: ", testCommercialClient.floorQuantity);
// console.log("Cep: ", testCommercialClient.cep);
// console.log("Valor da conta: R$", testCommercialClient.calculateBill())

//6.
// const testIndustrialClient: IndustrialClient = new IndustrialClient(
// "Industria do Chaves",
// 258955919,
// 480,
// "225.456.195/0001-52",
// 20,
// "231456-79",
// )

// console.log("Cliente: ", testIndustrialClient.name);
// console.log("Número de registro: ", testIndustrialClient.registrationNumber);
// console.log("Consumo de energia: ", testIndustrialClient.consumedEnergy, "kWh");
// console.log("Quantidade de máquinas no local: ", testIndustrialClient.machinesQuantity);
// console.log("Cep: ", testIndustrialClient.cep);
// console.log("Valor da conta: R$", testIndustrialClient.calculateBill())

//8.

const testClientManager: ClientManager = new ClientManager();

const newResidentialClient: ResidentialClient = new ResidentialClient(
  "Chaves",
  258915,
  90,
  "123.456.789-10",
  4,
  "235456-79"
);

const newCommercialClient: CommercialClient = new CommercialClient(
  "Lava-Carros do Chaves",
  258959,
  150,
  "225.456.195/0001-52",
  3,
  "231456-79"
);

const newIndustrialClient: IndustrialClient = new IndustrialClient(
  "Industria do Chaves",
  258955919,
  480,
  "225.456.195/0001-52",
  20,
  "231456-79"
);

testClientManager.registerClient(newResidentialClient);
testClientManager.registerClient(newCommercialClient);
testClientManager.registerClient(newIndustrialClient);

console.log(testClientManager.getClientsQuantity());
