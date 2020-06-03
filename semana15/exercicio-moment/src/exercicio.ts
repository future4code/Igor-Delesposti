import * as moment from "moment";
import * as fs from "fs";

moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
};

const arrayEvents: event[] = require("../events.json");

const option: string = process.argv[2];
const name: string = process.argv[3];
const description: string = process.argv[4];
const startDate: any = moment(process.argv[5], "DD/MM/YYYY, HH:mm");
const endDate: any = moment(process.argv[6], "DD/MM/YYYY, HH:mm");

const newEvent: event = {
  name: name,
  description: description,
  startDate: startDate,
  endDate: endDate,
};

function createEvent(element: event): void {
  if (
    element.name &&
    element.description &&
    element.startDate &&
    element.endDate
  ) {
    if (
      newEvent.startDate.toString() !== "Invalid date" &&
      newEvent.endDate.toString() !== "Invalid date"
    ) {
      const today: moment.Moment = moment();
      const diffDate = element.startDate.diff(today);
      if (diffDate >= 0) {
        try {
          const aux: any =  {
            name: element.name,
            description: element.description,
            startDate: element.startDate.format("DD/MM/YYYY, HH:mm"),
            endDate: element.endDate.format("DD/MM/YYYY, HH:mm"),
          };
          const newEventsArray = arrayEvents;
          newEventsArray.push(aux);
          fs.writeFileSync("events.json", JSON.stringify(newEventsArray));
          console.log("Evento criado com sucesso!");
        } catch (error) {
          console.log("Alguma coisa deu errado", error);
        }
      } else {
        return console.log(
          "Não é possível criar com data anterior a data de hoje."
        );
      }
    } else {
      return console.log("Insira uma data valida");
    }
  } else {
    return console.log("Favor preencher todos os requisitos");
  }
}

function getAllEvents(): void {
  const allEvents = arrayEvents;
  console.log(allEvents);
}

switch (option) {
  case "create": {
    createEvent(newEvent);
    break;
  }
  case "events": {
    getAllEvents();
    break;
  }
  default:
    break;
}
