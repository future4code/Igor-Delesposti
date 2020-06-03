import { Place } from "./Place";

export class Industry extends Place {
  constructor(protected machinesQuantity: number, public cep: string) {
    super(cep);
  }
  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

