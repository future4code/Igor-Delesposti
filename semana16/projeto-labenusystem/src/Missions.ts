import { FileManager } from "./FileManager";
import { Mission } from "./Mission";



export class Missions extends FileManager {

  public filePath: string = "./missions.json";
  public arrayMissions: Mission[] = [];

  public addMission(newMission: Mission): void {
    this.arrayMissions.push(newMission);
  }
}