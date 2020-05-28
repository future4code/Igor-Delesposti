import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//A. Os métodos de array forEach, find, reducer não foram feitos para utilizar em função async.

//B. 
type Subscriber = {
    id: string;
    name: string;
    email: string;
};

const getAllSubscribers = async (): Promise<Subscriber[]> => {
    const allSubscribersResult = await axios.get(`${baseUrl}/subscribers/all`);
    return allSubscribersResult.data.map((response: any)=>{
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}

const main = async () => {
    try{
        const subscribers = await getAllSubscribers()

        for(const subscriber of  subscribers) {
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Veja a notificação do pokemon",
            })
            
            console.log("Notificação enviada")
        }
        
    }catch(error){
        console.log("Alguma coisa aconteceu de errado ", error)
    }
}

main();
