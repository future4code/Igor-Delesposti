import { Student } from "./Student";
import { FileManager } from "./FileManager";
import * as fs from "fs";

export class Students extends FileManager {

  public filePath: string = "./students.json";
  
  public arrayStudents: Student[] = [];

  public addStudent(newStudent: Student): void {
    this.arrayStudents.push(newStudent);

  }
  public getFromFile():Object {
    return JSON.parse(fs.readFileSync(this.filePath).toString())
  }
}
