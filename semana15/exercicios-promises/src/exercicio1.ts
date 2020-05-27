import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
// Letra A: Utilizaremos o GET subscriber/all
// Letra B:  Promise<any[]>
// Letra C:

type Subscriber = {
    id: string,
    name: string,
    email: string,
};

async function getAllSubscribers(): Promise<Subscriber[]>{
    const allSubscribersResult = await axios.get(`${baseUrl}/subscribers/all`);

    return allSubscribersResult.data.map((response:any)=>{
        console.log(response)
        return{
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}

getAllSubscribers();




