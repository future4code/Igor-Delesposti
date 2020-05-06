import { setAllPosts, setPostDetails, getPostId } from "./posts";


describe("Post Actions", () => {
    test("Pega os posts atualizados da api", ()=>{
        // Preparação
        const mockPost = "Oi eu sou um post";
        // Execução
        const action = setAllPosts(mockPost);
        // Verificação
        expect(action.type).toBe("SET_ALL_POSTS");
        expect(action.payload.post).toBe(mockPost);
    })
    test("Pega os comentarios do post", ()=>{
        // Preparação
        const mockComentarios = "Oi, eu sou um comentario"
        // Execução
        const action = setPostDetails(mockComentarios);
        // Verificação
        expect(action.type).toBe("SET_POST_DETAILS");
        expect(action.payload.comments).toBe(mockComentarios);
    })
    test("Pega o ID do post", ()=>{
        // Preparação
        const mockId = 42

        // Execução
        const action = getPostId(mockId)

        //Verificação
        expect(action.type).toBe("GET_POST_ID");
        expect(action.payload.id).toBe(mockId)
    })

})

