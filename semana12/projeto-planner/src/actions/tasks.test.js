import { setAllTasks, getTasks, createTask } from "./tasks"
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
    test("Deve retornar uma lista de tarefas da API", async () => {
        //Mock do axios
        const mockTask = [{ text: "eu sou uma tarefa", day: "Segunda" }]
        axios.get = jest.fn(async () => ({
            data: mockTask
        }))

        //Mock do dispatch
        const dispatch = jest.fn();

        // Executa a ação assíncrona
        await getTasks()(dispatch);

        // Verificar se o dispatch foi chamado com a ação correta
        
        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_ALL_TASKS",
            payload: { task: mockTask }
        })
    })
    test("Deve criar uma tarefa", async () => {
        //Mock do axios
        const body = {
            text: "Tarefa criada",
            day: "Segunda"
        }

        axios.post = jest.fn();
        //Mock do dispatch
        const dispatch = jest.fn()
        window.alert = jest.fn()

        //Executa a ação assíncrona
        await createTask(body)(dispatch);

        // Verificar se o dispatch foi chamado com a ação correta
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(
            'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-igor',
            body
        )
        expect(alert).toHaveBeenCalledTimes(1)
    })
})
