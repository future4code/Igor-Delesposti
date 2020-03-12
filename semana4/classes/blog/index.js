function publicar(){
    const titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")
    const autor = document.getElementById("autor")
    const areaposts = document.getElementById("posts")

    const objetoPost = new postBlog (titulo.value, conteudo.value, autor.value)

    let meuArray = [objetoPost.titulo, objetoPost.conteudo, objetoPost.autor]


    areaposts.innerHTML += "<div>" + objetoPost.titulo + "</div>"
    areaposts.innerHTML += "<div>" + objetoPost.conteudo + "</div>"
    areaposts.innerHTML += "<div>" + objetoPost.autor + "</div>"

    console.log(meuArray[0])
    console.log(meuArray[1])
    console.log(meuArray[2])
    
    titulo.value = ""
    conteudo.value = ""
    autor.value = ""

    
}



class postBlog{
    constructor (titulo, conteudo, autor){
        this.titulo = titulo
        this.conteudo = conteudo
        this.autor = autor
    }

}



