import { setAllTasks, getTasks } from "./tasks"
import axios from "axios";

describe("Task Actions", () => {
    test("Trás as tarefas atualizadas da api", () => {
        //Preparação
        const mockTask = "Eu sou uma tarefa";
        //Execução
        const action = setAllTasks(mockTask);
        //Verificação
        expect(action.type).toBe("SET_ALL_TASKS");
        expect(action.payload.task).toBe(mockTask);
    })
    test("Deve retornar uma lista de tarefas", async () => {
        //Mock do axios
        axios.get = jest.fn(async () => ({
            data: {
                task: [{text: "eu sou uma tarefa", day:"Segunda"}]
            }
        }))

        //Mock do dispatch
        const dispatch = jest.fn();

        // Executa a ação assíncrona
        await getTasks()(dispatch);

        // Verificar se o dispatch foi chamado com a ação correta
        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_ALL_TASKS",
            payload: { task: [{text: "eu sou uma tarefa", day:"Segunda"}]}
        })
    })
})
