import {v4 as uuidv4} from 'uuid'

//                      Action Generators ----- COMPANY
export const addCompany = ({
    companyName='',
    boardMembers=[],
    generalDirector='',
    deputyDirectorGeneral_1='',
    deputyDirectorGeneral_2='',
    deputyDirectorGeneral_3='',
    deputyDirectorGeneral_4='',
    foundedOn=946720800000, // 01 01 2000 12=00=00=00 local time tr
    sectors=[],
    completedProjects=[],
    onGoingProjects=[],
    numberOfEmployees=1,
    language="English",
    workOnWeekEnd_Active=false,
    workOnWeekEnd_Passive=false,
    workShiftStartsAt_Hour_Weekdays=9,
    workShiftStartsAt_Min_Weekdays=0,
    workShiftEndsAt_Hour_Weekdays=18,
    workShiftEndsAt_Min_Weekdays=0,
    workShiftStartsAt_Hour_Weekdends=9,
    workShiftStartsAt_Min_Weekdends=0,
    workShiftEndsAt_Hour_Weekdends=14,
    workShiftEndsAt_Min_Weekdends=0,
}={}) => ({
    type:'ADD_COMPANY',
    company:{
        companyId:uuidv4(),
        companyName,
        boardMembers,
        generalDirector,
        deputyDirectorGeneral_1,
        deputyDirectorGeneral_2,
        deputyDirectorGeneral_3,
        deputyDirectorGeneral_4,
        foundedOn, // 01 01 2000 12=00=00=00 local time tr
        sectors,
        completedProjects,
        onGoingProjects,
        numberOfEmployees,
        language,
        workOnWeekEnd_Active,
        workOnWeekEnd_Passive,
        workShiftStartsAt_Hour_Weekdays,
        workShiftStartsAt_Min_Weekdays,
        workShiftEndsAt_Hour_Weekdays,
        workShiftEndsAt_Min_Weekdays,
        workShiftStartsAt_Hour_Weekdends,
        workShiftStartsAt_Min_Weekdends,
        workShiftEndsAt_Hour_Weekdends,
        workShiftEndsAt_Min_Weekdends,
    }
})


export const removeCompany = ({id}={}) => ({
    type:'REMOVE_COMPANY',
    id
})


export const editCompany = (id,updates) => ({
    type:'EDIT_COMPANY',
    id,
    updates

})