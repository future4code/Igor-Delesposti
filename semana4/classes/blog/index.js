function publicar(){
    const titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")
    const autor = document.getElementById("autor")
    const areaposts = document.getElementById("posts")

    areaposts.innerHTML += "<div>" + titulo.value + "</div>"
    areaposts.innerHTML += "<div>" + conteudo.value + "</div>"
    areaposts.innerHTML += "<div>" + autor.value + "</div>"
}