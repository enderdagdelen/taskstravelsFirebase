import {v4 as uuidv4} from 'uuid'

export const addPersonel = ({
    name='',
    surname='',
    companyName='',
    companyID='',
    accessLevel='',
    email='',
    mobileNumber='',
    profession='',
    department='',
    assignment='',
    position='',
    superior='',
    superintendent='',
    onLeave=false,
    unpaidLeave=false,
    onBussinessTask=false,
    medicalLeave='',
    onBussinessTravel=false,
    suspension=false
}={}) => ({
    type:'ADD_PERSONEL',
    personel:{
        personelId:uuidv4(),
        name,
        surname,
        companyName,
        companyID,
        accessLevel,
        email,
        mobileNumber,
        profession,
        department,
        assignment,
        position,
        superior,
        superintendent,
        onLeave,
        unpaidLeave,
        onBussinessTask,
        medicalLeave,
        onBussinessTravel,
        suspension
    }
})


export const editPersonel = (id,updates) => ({
    type:'EDIT_PERSONEL',
    id,
    updates
})


export const removePersonel = ({id}={}) => ({
    type:'REMOVE_PERSONEL',
    id
})
