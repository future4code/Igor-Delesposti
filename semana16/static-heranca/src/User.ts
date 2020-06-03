// 1.A) Não seria possível.
//B) Uma vez.

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public introduceYourself(): string {
      return `Olá, eu sou ${this.name}. Bom dia!`
  }
}

const testUser: User = new User(
  "123",
  "vendedor1@gmail.com",
  "Cleosvaldo",
  "010203"
);
console.log("Id: ", testUser.getId());
console.log("Email: ", testUser.getEmail());
console.log("Nome: ", testUser.getName());
