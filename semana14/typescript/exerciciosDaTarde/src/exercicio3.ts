type post = { 
    author: string, 
    text: string
}

const posts: post[] = [
    {
        author: "Ronaldinho Gaucho",
        text: "me tira daqui (1)", 
    },
    {
        author: "Chaves",
        text: "era melhor ter ido ver o filme do pelé (2)", 
    },
    {
        author: "Chaves",
        text: "cade minha bola quadrada (3)", 
    },
    {
        author: "Chiquinha",
        text: "conta tudo pra sua mãe (4)", 
    },
    {
        author: "Chiquinha",
        text: "papaaaaaai (5)", 
    }
] 

const author: string = "Chiquinha"

console.log(showAllPosts(posts, author))

function showAllPosts(posts: post[], author: string): post[]{
    return posts.filter(post => {
        return post.author == author
    })
} 