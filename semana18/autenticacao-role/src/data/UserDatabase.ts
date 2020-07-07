import knex from "knex";
import { BaseDataBase } from "./BaseDataBase";

export class UserDatabase extends BaseDataBase {
  // private connection = knex({
  //   client: "mysql",
  //   connection: {
  //     host: process.env.DB_HOST,
  //     port: 3306,
  //     user: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_DATABASE_NAME,
  //   },
  // });

  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id: string): Promise<any>{
    await this.getConnection()
    .delete()
    .from(UserDatabase.TABLE_NAME)
    .where({ id: id});
  }
}
