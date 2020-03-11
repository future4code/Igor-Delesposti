function publicar(){
    const titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")
    const autor = document.getElementById("autor")
    const areaposts = document.getElementById("posts")

    const objetoPost = new postBlog (titulo.value, conteudo.value, autor.value)

    areaposts.innerHTML += "<div>" + objetoPost.titulo + "</div>"
    areaposts.innerHTML += "<div>" + objetoPost.conteudo + "</div>"
    areaposts.innerHTML += "<div>" + objetoPost.autor + "</div>"
}



class postBlog{
    constructor (a,b,c){
        this.titulo = a
        this.conteudo = b
        this.autor = c
    }

}

