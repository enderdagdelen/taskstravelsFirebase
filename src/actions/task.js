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


export const initiateEditTask = (id,updates) => {

    return (dispatch) => {
        database.ref(`tasks/${id}`).update(updates)
        .then(()=>{
            dispatch(editTask(id,updates))
        })
        .catch((err)=>{console.log("error",err);})
    }
}






// Remove from redux and firebase
export const removeTask = (id) => ({
    type:'REMOVE_TASK',
    id
})

export const initiateRemoveTask = (id) => {
    return (dispatch)=>{
        database.ref(`tasks/${id}`).remove()
        .then(()=>{
            dispatch(removeTask(id))
        })
        .catch((err)=>{console.log("error",err); })
    }
}



//FETCH DATA FROM FIREBASE 

export const fetchTask = (tasks) => ({
    type:'FETCH_TASK',
    tasks
})

export const initiateFetchTask = () => {
    return (dispatch) => {
        
        return database.ref('tasks').once('value')
        .then((snapshot) => {
            
            const fetchedTasksArray = []

            snapshot.forEach((snapshotChild) => {
                fetchedTasksArray.push({
                    id:snapshotChild.key,
                    ...snapshotChild.val()
                })
            })

            dispatch(fetchTask(fetchedTasksArray))
        })
        .catch((err)=>{"error",err})

    }
}