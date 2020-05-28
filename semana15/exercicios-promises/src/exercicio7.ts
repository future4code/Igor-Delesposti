import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const createSubscriber = async (name: string, email: string) => {
  await axios.put(`${baseUrl}/subscribers`, {
    name,
    email,
  });
};

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date,
  });
}

type Subscriber = {
  id: string;
  name: string;
  email: string;
};

const getAllSubscribers = async (): Promise<Subscriber[]> => {
  const allSubscribersResult = await axios.get(`${baseUrl}/subscribers/all`);
  return allSubscribersResult.data.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
    };
  });
};

const main = async () => {
  try {
    await createSubscriber(
        "Chaves", 
        "Chaves@gmail.com"
        );
    console.log("Usuário criado com sucesso.");

    await createNews(
        "Disco-voador na vila", 
        "Já chegou o disco voador!", 
        18092019
        );
    console.log("Noticia criada com sucesso.");

    const subscribers = await getAllSubscribers();
    const arrayNotification: Promise<any>[] = [];

    for (const subscriber of subscribers) {
      arrayNotification.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: subscriber.id,
          message: "Corra! Um disco-voador! xD",
        })
      );
      console.log("Notificação enviada com sucesso.");
    }
    await Promise.all(arrayNotification);

  } catch (error) {
    console.log("Ocorreu um erro na sua solicitação", error);
  }
};

main();
