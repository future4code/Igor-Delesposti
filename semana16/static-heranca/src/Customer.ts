//2.A) Uma vez.
//B) Duas vezes porque User está sendo importado para dentro da classe Filha Customer.


//3. A) Sim desde que façamos um método Public getPassword() e invocar a função logo após ter instanciado.
import { User } from "./User"

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getPurchaseTotal(): number {
      return this.purchaseTotal;
    }

    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const testCustomer: Customer = new Customer("321", "customer1@gmail.com", "Chiquinha", "112233", "Débito/Visa")
  console.log("Id: ", testCustomer.getId())
  console.log("Email: ", testCustomer.getEmail())
  console.log("Nome: ", testCustomer.getName())
  console.log("Cartão de crédito: ", testCustomer.getCreditCard())
  console.log("Valor Total da compra: ", testCustomer.getPurchaseTotal())
  console.log(testCustomer.introduceYourself())