import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";


dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) | 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const app = express();


app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/actor", async (req: Request, res: Response)=>{
      try{
        const count = await getActorsCount(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });
      }catch(error){
        res.status(400).send({
            message: error.message,
        })
      }
  })

  app.post("/actor", async (req: Request, res: Response)=>{
      try {
          await updateSalaryById(req.body.id, req.body.salary);
          res.status(200).send({
              message: "Salário atualizado"
          })
      } catch (error){
          res.status(400).send({
              message: error.message
          })
      }
  })

  



const getActorById = async (id:string): Promise<void> =>{
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)
    console.log(result);
    return (result[0][0]);
}
    // getActorById("001")


const getActorByName = async (name: string): Promise<void> => {
  try {
    const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
    `);
    return console.log(result[0][0]);
  } catch (error) {
    console.error(error.message);
  }
};
// getActorByName("Débora Seco");

const getActorsCount = async (gender: string): Promise<void> => {
  try {
    const result = await connection.raw(`
            SELECT COUNT(*) as Quantidade FROM Actor WHERE gender = "${gender}"
        `);
        console.log(result)    
    return (result[0][0]);
    
  } catch (error) {
    console.error(error.message);
  }
};
// getActorsCount("Male");

const updateSalaryById = async (id: string, salary: number): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
    return console.log("Funcionou!");
  } catch (error) {
    console.error(error.message);
  }
};

// updateSalaryById("001", 1000000);

const deleteActorById = async (id: string): Promise<void> => {
  try {
    await connection("Actor")
    .delete()
    .where("id", id);
    return console.log("Ator deletado");
  } catch (error) {
    console.error(error.message);
  }
};

// deleteActorById("004")

const avgSalary = async(gender: string): Promise<any> => {
    try{
        const result = await connection("Actor")
        .avg("salary as média_salarial")
        .where({gender: gender});
        
        return console.log(result)
    }catch (error){
        console.error(error.message)
    }
}
// avgSalary("female");


