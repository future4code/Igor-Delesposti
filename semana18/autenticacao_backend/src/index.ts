import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { v4 } from "uuid";
import { UserDatabase } from "./data/UserDataBase";
import { GeneratorId } from "./services/GeneratorId";
import { Authenticator } from "./services/Authenticator";


dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



// const id = v4();

// console.log("id: ", id);

// const testNewUser = new UserDatabase();
// testNewUser.createUser(
//   "1",
//   "chaves@gmail.com",
//   "123456"
// );

// console.log(testNewUser, "usuário criado com sucesso");

const testEmail = new UserDatabase();
testEmail.getUserByEmail("chaves@gmail.com");



app.post("/signup", async (req: Request, res: Response)=>{
  try{
    if (!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Email inválido");
    }

    if(!req.body.password || req.body.password.length < 6 ){
      throw new Error("Digite no mínimo 6 caracteres")
    }
    const userData = {
      email: req.body.email,
      password: req.body.password
    };

    const idGenerator = new GeneratorId;
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(
      id,
      userData.email,
      userData.password
    )
    
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id
    })
    res.status(200).send({
      token,
    });

  }catch(error){
    res.status(400).send({
      message: error.message
    })
  }
})

app.post("/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    // if (user.password !== userData.password) {
    //   throw new Error("Invalid password");
    // }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

  app.get("/user/profile", async (req: Request, res: Response)=>{
    try {
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);

      const userDb = new UserDatabase();
      const user = await userDb.getUserById(authenticationData.id);

      res.status(200).send({
        id: user.id,
        email: user.email,
        message: "Ok"
      })
    }catch(error){
      res.status(400).send({
        message: error.message
      })
    }
  })