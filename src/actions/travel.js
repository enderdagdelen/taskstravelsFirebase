import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase';


export const addTravel = (travel) => ({
    type:'ADD_TRAVEL',
    travel
})


export const initiateAddTravel = (travelData = {}) => {

    return (dispatch) => {

        const {name,project,travelDestination,dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,lengthOfStay,accomodationFee,meansOfTransport,advance,notes} = travelData

        const travel = {name,project,travelDestination,dateOfDeparture,departureTime,dateOfReturn,timeOfReturn,travelDuration,accompaniedBy,withWhomToMeet,accomodationAddress,lengthOfStay,accomodationFee,meansOfTransport,advance,notes}
        
        database.ref('travels').push(travel)
        .then((ref)=>{
            dispatch(addTravel({
                id:ref.key,
                ...travel
            }))
        })
        .catch((err)=>{"error",err})
    
    }

}


//REMOVE BOTH FROM FIREBASE AND REDUXSTORE

export const removeTravel = (id) => ({
    type:'REMOVE_TRAVEL',
    id
})

export const initiateRemoveTravel = (id) => {
    return (dispatch) => {

        database.ref(`travels/${id}`).remove()
        .then(()=>{
            dispatch(removeTravel(id))
        })
        .catch((err)=>{ console.log(err);})

    }
}




// EDIT BOTH FIREBASE RECORD AND REDUX STORE
export const editTravel = (id,updates) => ({
    type:'EDIT_TRAVEL',
    id,
    updates
})

export const initiateEditTravel = (id, updates) => {
    return (dispatch)=>{
        database.ref(`travels/${id}`).update(updates)
        .then(()=>{
            dispatch(editTravel(id, updates))
        })
        .catch((err)=>{ console.log(err);})
    }
}




//FETCH DATA FROM FIREBASE and Send to redux store

export const fetchTavel = (travels) => ({
    type:'FETCH_TRAVEL',
    travels
})

export const initiateFetchTravel = () => {
    return (dispatch) => {
        const fetchedTravels = []
        return database.ref('travels').once('value')
        .then((snapshot)=>{
            snapshot.forEach((snapshotChild)=>{
                fetchedTravels.push({
                    id:snapshotChild.key,
                    ...snapshotChild.val()
                })
            })

            dispatch(fetchTavel(fetchedTravels))
        })
        .catch((err)=>{ console.log(err);})


    }
}