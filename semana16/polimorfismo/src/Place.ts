//2) A) Cannot create an instance of an abstract class.
//B) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância nela mesmo.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }