import knex from "knex";

export class UserDatabase {
    private connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
      },
    });

    private static TABLE_NAME = "User";
    
    public async createUser(
      id: string,
      email: string,
      password: string
    ): Promise<void>{
    try{ 
      const result = await this.connection.raw(`
        INSERT INTO User (id, email, password)
        VALUES(
          '${id}',
          '${email}',
          '${password}'
        )
      `);
        // console.log(result, "Usuário criado!")

    }catch(error) {
      console.error(error.message);
    }     
        
    }
    
    public async getUserByEmail(email: string): Promise<any>{
      const result = await this.connection.raw(`
        SELECT *
        FROM User
        WHERE email = '${email}'
      `)
      // console.log(result, "ESTOU AQUI")
      return result[0]
    }

    public async getUserById(id: string): Promise<any> {
      const result = await this.connection.raw(`
        SELECT * 
        FROM User
        WHERE id = '${id}'
      `)

      return result[0]
    }
}    



