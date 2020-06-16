import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { Request, Response } from "express";
import moment from "moment";

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

  app.post("/user", async (req: Request, res: Response) =>{
    try{
      await createUser(req.body.name, req.body.nickname, req.body.email);
      res.status(200).send({
        message: "Usuário criado com sucesso"
      })
    }catch(error){
      res.status(440).send({
        message: error.message
      })
    }
  })

  app.get("/user/:id", async (req: Request, res: Response) => {
    try{

      const id = req.params.id;
      const user = await getUserById(id);   

      if (user === undefined ) {
        res.status(400).send({
          message: "usuário não existe"
        })
      }else {
        res.status(200).send(user)
      }     
      
      
    } catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
  });

    app.get("/task/:id", async (req: Request, res: Response)=>{
      try {
        const id = req.params.id;
        const task = await getTaskById(id);
        
        if (task === undefined){
          res.status(400).send({
            message: "Task não existe"
          })
        }else {
          
          res.status(200).send(task)
        }
      }catch (error) {
        res.status(400).send({
          message: error.message
        })
      }
    })

    app.put("/task", async (req: Request, res: Response)=>{
      try{
        
        const title = req.body.title
        const description = req.body.description
        const limitDate:string =  moment(req.body.limitDate,"DD/MM/YYYY").format("YYYY/MM/DD").toString()
        const creatorUserId = req.body.creatorUserId

        if(!title || !description || !limitDate || !creatorUserId){
          res.status(400).send({
            message: "Preencha todos os campos da tarefa"
          })
        }else {
          await createTask(title, description, limitDate, creatorUserId)
          res.status(200).send({
            message: "Tarefa criada com sucesso"
          })
        }
      }catch(error) {
        res.status(400).send({
          message: error.message
        })
      }
    })  

    app.put("/user/edit", async (req: Request, res: Response)=>{
      try{
        const name = req.body.name
        const nickname = req.body.nickname
        const id = req.body.id

        if (!name || !nickname || !id){
          res.status(400).send({
            message: "Preencha todos os campos"
          })
        } else {
          await updateUserById(name, nickname, id)
          res.status(200).send({
            message: "Usuário editado com sucesso"
          })
        }
        
      }catch(error){
        res.status(400).send({
          message: error.message
        })
      }   
    });


  const createUser = async (
    name:string, nickname:string, email:string
    ):Promise<void> =>{
      try {
        const id = Date.now()
        const result = await connection.raw(`
        INSERT INTO TodoList_Users (name, nickname, email, id) 
        VALUES (
        '${name}',
        '${nickname}',
        '${email}',
        '${id}'
        )
        `);
        console.log(result, "Usuário criado!")

      } catch(error) {
        console.error(error.message);
      }
    }

    
    // createUser("seumadruga", "seumadruga_45", "seumadruga@gmail.com");
    const createTask = async (
         title:string, description:string, limitDate:string, creatorUserId:string
      ): Promise<void> =>{
        try {
          const id = Date.now();
          const result = await connection.raw(`
            INSERT INTO TodoList_Tasks (id, title, description, limitDate, creatorUserId)
            VALUES(
              '${id}',
              '${title}',
              '${description}',
              '${limitDate}',
              '${creatorUserId}'
            )
          `);
          console.log(result);

        }catch(error) {
          console.error(error.message)
        }
      }

      // createTask("Estudar Backend", "Focar no estudo do MySql", "2020/06/13", "1")



    const getUserById = async (id:string): Promise<void> =>{
      const result = await connection.raw(`
        SELECT * FROM TodoList_Users WHERE id = '${id}'
      `)
      
      return (result[0][0])
    }

    // getUserById("1591974652006");

    const getTaskById = async (id:string): Promise<void> =>{
      const result = await connection.raw(`
        SELECT * FROM TodoList_Tasks WHERE id = '${id}'
      `)
      console.log(result)
      return (result[0][0])
    }

    // getTaskById("1591993471491")

    const updateUserById = async (
      name:string, nickname:string, id:string
      ): Promise<void> =>{
        try{
          const result = await connection.raw(`
            UPDATE TodoList_Users
            SET name = '${name}', nickname = '${nickname}'
            WHERE id = '${id}'
          `)
          console.log("Funcionou!", result)
          return (result[0][0]);

        }catch (error) {
          console.error(error.message);
        }
      };

      // updateUserById("Chaves", "chavinho", "1");

    