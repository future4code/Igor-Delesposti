import { setAllPosts, setPostDetails } from "../actions/posts";
import posts from "./posts"



describe("Testes do reducers de post", () => {
    test("Teste dos set all posts", () => {
        // Preparação
        const mockState = {
            posts: []
        }
        const mockPosts = [{
            id: 42,
            text: "Oi eu sou um post."
        }]

        const mockAction = setAllPosts(mockPosts);

        // Execução
        const newState = posts(mockState, mockAction)

        // Verificação
        expect(newState.posts).toHaveLength(1);
        expect(newState.posts[0].id).toBe(mockPosts[0].id)
        expect(newState.posts[0].text).toBe(mockPosts[0].text)
    })
    test("Teste dos detalhes do post", () => {
        // Preparação
        const mockState = {
            postComment: []
        }
        const mockComments = [{
            id: 89,
            text: "Oi eu sou um comentário.",
            username: "igortext"
        }]

        const mockAction = setPostDetails(mockComments)

        // Execução
        const newState = posts(mockState, mockAction)
        // Verificação

        expect(newState.postComment).toHaveLength(1);
        expect(newState.postComment[0].id).toBe(mockComments[0].id)
        expect(newState.postComment[0].text).toBe(mockComments[0].text)
        expect(newState.postComment[0].username).toBe(mockComments[0].username)

    })

    test("Invalid Action Type", () => {
        // Preparação   
        const mockState = {
            posts: [{
                id: 56,
                text: "oi tudo bem"
            }]
        }

        const mockInvalidAction = {
            type: "IS_A_INVALID_ACTION_TYPE"
        }

        // Execução

        const newState = posts(mockState, mockInvalidAction)

        // Verificação

        expect(newState).toEqual(mockState)
    })
})