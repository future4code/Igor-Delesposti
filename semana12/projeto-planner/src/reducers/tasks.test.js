import { setAllTasks } from '../actions/tasks'
import tasks from './tasks'



describe("Teste do reducer de tarefas", () =>{
    test("Teste do set_all_tasks", ()=>{
        //Preparação
        const mockState = {
            tasks: []
        }

        const mockTasks = [{
            text: "Oi eu sou uma tarefa",
            day: "Segunda"
        }]

        const mockAction = setAllTasks(mockTasks)
        
        //Execução
        const newState = tasks(mockState, mockAction)
        
        //Verificação
        expect(newState.tasks).toHaveLength(1);
        expect(newState.tasks[0].text).toBe(mockTasks[0].text)
        expect(newState.tasks[0].day).toBe(mockTasks[0].day)
    })
    test("Action type inválido", ()=>{
        //Preparação
        const mockState = [{
            text: "Oi eu sou uma tarefa",
            day: "Segunda"
        }]

        const mockInvalidAction = {
            type: "IS_A_INVALID_ACTION_TYPE"
        }
        //Execução

        const newState = tasks(mockState, mockInvalidAction)

        //Verificação

        expect(newState).toEqual(mockState)
    })
})