import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TEACHER_SPECIALTY } from "./Teacher";
import { NightMission } from "./NightMission";
import { FullTimeMission } from "./FulltimeMission";
import * as moment from "moment";
import { Students } from "./Students";
import { Teachers } from "./Teachers";
import { Missions } from "./Missions";

const chaves = new Student(
  "321654",
  "Chaves",
  "chaves@gmail.com",
  moment("20/05/1990", "DD/MM/YYYY"),
  ["Seu Cãozinho Satanás", "Sanduiche de presunto"]
);

const kiko = new Student(
    "321653",
    "Kiko",
    "kiko@gmail.com",
    moment("20/05/1995", "DD/MM/YYYY"),
    ["Futebol com bola quadrada", "Carrinho de fricção"]
  );
  
// console.log(kiko.getAge())
// console.log(kiko.getAge());

const myStudents = new Students;

const studentsList = myStudents.getFromFile() as Student[];

studentsList.forEach((student:any)=>{
    
    if(student.id === process.argv[2]){
        const thisStudent = new Student(
            student.id,
            student.name,
            student.email,
            student.birthDate,
            student.hobbies
          );
          console.log(thisStudent.getAge())
    }
    
})

myStudents.addStudent(chaves);
myStudents.addStudent(kiko);
myStudents.writeFile(myStudents.arrayStudents);


const girafales = new Teacher(
  "123456",
  "Professor Girafales",
  "girafales_prof@gmail.com",
  [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.HTML]
);

console.log(girafales)

const madruguinha = new Teacher(
    "1234567",
    "Seu Madruga",
    "madruguinha@gmail.com",
    [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP, TEACHER_SPECIALTY.TESTES]
  );
  
  console.log(madruguinha)
  
const myTeachers = new Teachers;
myTeachers.addTeacher(girafales);
myTeachers.addTeacher(madruguinha);
myTeachers.writeFile(myTeachers.arrayTeachers);


const newNightMission = new NightMission(
    "14485",
    moment("10/02/2020", "DD/MM/YYYY"),
    moment("10/08/2020", "DD/MM/YYYY"),
    [],
    [],
    4
);


newNightMission.setName("Turma do Chaves-na-night");

console.log(newNightMission.getCurrentModule());

const newFullTimeMission = new FullTimeMission(
    "19845",
    moment("04/05/2020", "DD/MM/YYYY"),
    moment("10/11/2020", "DD/MM/YYYY"),
    [],
    [],
    1
)

newFullTimeMission.setName("Escolinha do Kiko")

const myMissions = new Missions;
myMissions.addMission(newFullTimeMission);
myMissions.addMission(newNightMission);

newNightMission.addStudent(kiko);
newFullTimeMission.addStudent(chaves);

newFullTimeMission.addTeacher(madruguinha);
newNightMission.addTeacher(girafales);

myMissions.writeFile(myMissions.arrayMissions);

console.log(newFullTimeMission);
console.log(newNightMission);




