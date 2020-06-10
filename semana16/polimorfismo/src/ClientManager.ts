import { Client } from "./Client";

export class ClientManager {
  private clients: Client[] = [];


  public registerClient(client: Client): void{
      this.clients.push(client)
  }

  public getClientsQuantity(): number {
    return this.clients.length;
  }
}
