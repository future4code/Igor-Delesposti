import axios from 'axios';


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//A. É uma função nomeada.

//B. 
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

const main = async () => {
    try {
        await createNews(
            "Pokemon",
            "Eu sou o charizard.",
            15496529045651
        );
        console.log("Notícia criada com sucesso")
    }catch(error) {
        console.log("Alguma coisa deu errado", error)
    }
};

main();