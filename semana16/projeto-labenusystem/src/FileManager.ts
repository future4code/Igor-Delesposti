import * as fs from "fs";

export  abstract class FileManager {

  public filePath:string;

  public writeFile(data:any): void {
    try {
      console.log(this.filePath);
      fs.writeFileSync(this.filePath, JSON.stringify(data));
    } catch {
      console.log("Erro ao criar o arquivo");
    }
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }
}
