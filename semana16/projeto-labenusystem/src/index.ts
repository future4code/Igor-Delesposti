import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { TEACHER_SPECIALTY } from "./Teacher";
import { NightMission } from "./NightMission";
import { FullTimeMission } from "./FulltimeMission";
import * as moment from "moment";




// const newStudent = new Student(
//   "321654",
//   "Kiko",
//   "kiko@gmail.com",
//   moment("20/05/1995", "DD/MM/YYYY"),
//   ["Futebol com bola quadrada", "Carrinho de fricção"]
// );

// console.log(newStudent.getAge());

// const newTeacher = new Teacher(
//   "123456",
//   "Professor Girafales",
//   "girafales_prof@gmail.com",
//   [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.HTML]
// );

// console.log(newTeacher)

// const newNightMission = new NightMission(
//     "14485",
//     moment("10/02/2020", "DD/MM/YYYY"),
//     moment("10/08/2020", "DD/MM/YYYY"),
//     [],
//     [],
//     4
// )

// newNightMission.setName("Turma do Chaves-na-night");
// console.log(newNightMission)
// console.log(newNightMission.getCurrentModule())

const newFullTimeMission = new FullTimeMission(
    "19845",
    moment("04/05/2020", "DD/MM/YYYY"),
    moment("10/11/2020", "DD/MM/YYYY"),
    [],
    [],
    1
)

newFullTimeMission.setName("Escolinha do Kiko")
console.log(newFullTimeMission)