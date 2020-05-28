import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//A. Muda na sintaxe o local que utiliza o async

//B.
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