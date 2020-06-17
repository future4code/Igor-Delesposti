import { User } from "./user";
import * as moment from "moment";

moment.locale("pt-br");

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: moment.Moment,
    public hobbies: string[]
  ) {
    (this.id = id),
      (this.name = name),
      (this.email = email),
      (this.birthDate = birthDate),
      (this.hobbies = hobbies);
  }

  public getAge(): number {
    
    return moment().diff(this.birthDate, "years");
    
  }

  public getStudentId(): string {
    return this.id;
  }
}
