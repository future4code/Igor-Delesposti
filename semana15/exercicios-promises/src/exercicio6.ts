import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//A. Recebe um array de promises e depois de esperar o seu retorno,
//teremos um array com cada uma das respostas dessa promise.

//B. Ele dispara todas notificações independente de ter dado a resposta positiva ou não de cada usuário.

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
    const subscribers = await getAllSubscribers();
    const arrayNotification: Promise<any>[] = [];

    for (const subscriber of subscribers) {
      arrayNotification.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: subscriber.id,
          message: "Java <3",
        })
      );
      console.log("Notificação enviada");
    }
    await Promise.all(arrayNotification)

  } catch (error) {
    console.log("Alguma coisa aconteceu de errado ", error);
  }
};

main();
