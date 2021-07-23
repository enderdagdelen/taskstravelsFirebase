import { v4 as uuidv4} from 'uuid';
import database from '../firebase/firebase'

const addTask = (task) => ({
    type:'ADD_TASK',
    task
})


export const initiateAddTask = (taskData) => {
    return (dispatch)=>{
        const {
            name='',
            project='',
            taskLocation='',
            withWhomToMeet='',
            date='',
            timeOfLeave='',
            timeOfReturn='',
            taskDuration=0,
            meansOfTransport='',
            advance=0,
            notes=''} = taskData

            const task = {name,project,taskLocation,withWhomToMeet,date,timeOfLeave,timeOfReturn,taskDuration, meansOfTransport, advance, notes}
    
            database.ref('tasks').push(task)
            .then((ref)=>{
                dispatch(addTask({
                    id:ref.key,
                    ...task
                }))
            }).catch((err)=>{console.log("Could not transfer task to database. Error:",err );})
    }

}


export const editTask = (id,updates) => ({
    type:'EDIT_TASK',
    id,
    updates
})

export const removeTask = (id) => ({
    type:'REMOVE_TASK',
    id
})