import * as fs from "fs";

const fileName: string = process.argv[2];
const taskText: string = process.argv[3];
    try{
        fs.appendFileSync(fileName, `\n${taskText}`);
        console.log("Tarefa adicionada com sucesso!")
    }catch(error){
        console.error(error);
    }
    
