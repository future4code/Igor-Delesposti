import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      public floorQuantity: number,
      public cep: string
    ) {
      super(floorQuantity, cep);
    }
    public getCnpj(): string {
      return this.cnpj;
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
  }