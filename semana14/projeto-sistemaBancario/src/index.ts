import * as fs from "fs";
export {};

type user = {
  name: string;
  cpf: number | string;
  dateOfBirth: number | string;
  balance: number;
};

const arrayAccounts: user[] = require("../accounts.json");
const moment = require('moment');

const option: string = process.argv[2];
const name: string = process.argv[3];
const cpf: string = process.argv[4];
const dateOfBirth: string = process.argv[5];

const formatedBirth = moment(dateOfBirth, "DD/MM/YYYY")
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), "years")


const newUser: user = {
  name: name,
  cpf: cpf,
  dateOfBirth: dateOfBirth,
  balance: 0,
};

// console.log(arrayAccounts)

function createNewAccount() {
  const resultOfFind = arrayAccounts.find((element) => {
    return element.cpf === cpf;
  });
  

  if (resultOfFind === undefined) {
    if (age >= 18) {
      arrayAccounts.push(newUser);
      fs.writeFileSync("accounts.json", JSON.stringify(arrayAccounts));
      console.log("Usuário criado com sucesso!");
    }else {
        console.log("Você não tem 18 anos.")
    }
  } else {
    console.log("Usuário já cadastrado");
  }
  //   console.log(resultOfFind)
}
function getAllAccounts() {
  const allAccounts = arrayAccounts;
  console.log(allAccounts);
}

switch (option) {
  case "create": {
    createNewAccount();
    break;
  }
  case "accounts": {
    getAllAccounts();
    break;
  }
  default:
    break;
}
