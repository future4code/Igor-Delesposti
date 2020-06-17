import { FileManager } from "./FileManager";
import { Teacher } from "./Teacher";


export class Teachers extends FileManager {

  public filePath: string = "./teachers.json";
  public arrayTeachers: Teacher[] = [];

  public addTeacher(newTeacher: Teacher): void {
    this.arrayTeachers.push(newTeacher);
  }
}