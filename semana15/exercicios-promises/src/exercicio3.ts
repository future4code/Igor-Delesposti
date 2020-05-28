import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//A. Não dará erro.

//B. Fazemos o map para garantir que devolveremos o que a função indica.

//C.
type Subscriber = {
    id: string,
    name: string,
    email: string,
};
const getAllSubscribers = async (): Promise<Subscriber[]> =>{
    const allSubscriberResult = await axios.get(`${baseUrl}/subscribers/all`);
    return allSubscriberResult.data.map((response: any) => {
        console.log(response)
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}

getAllSubscribers();