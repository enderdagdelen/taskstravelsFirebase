import {v4 as uuidv4} from 'uuid'
import database from '../firebase/firebase'

//                      Action Generators ----- COMPANY
export const addCompany = (company) => ({
    type:'ADD_COMPANY',
    company
})


//first adds data to firebase then if it succeds adds data to redux.
// Only Admin can add new company
export const initiateAddCompany = (companyInfo = {}) => {
    return (dispatch)=>{
        const {
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
        } = companyInfo

        const company = {
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
        workShiftEndsAt_Min_Weekdends}

        database.ref('companies').push(company).then((ref)=>{
            dispatch(addCompany({id:ref.key,...company}))
        })
    }
}


//FETCH Companies From Firebase 
export const  fetchCompany = (companies) => ({
    type:'FETCH_COMPANIES',
    companies
})


export const initiateFetchCompanies = () => {
    return (dispatch) => {
        return database.ref('companies').once('value')
        .then((snapshot)=>{
            let fetchedCompanies = [];
            snapshot.forEach((snapshotChild)=>{
                fetchedCompanies.push({
                    id:snapshotChild.id,
                    ...snapshotChild.val()
                })
            })

            dispatch(fetchCompany(fetchedCompanies))
        }).catch(()=>{

        })
    }
}


//______________________________________________REMOVE FROM REDUX
export const removeCompany = ({id}={}) => ({
    type:'REMOVE_COMPANY',
    id
})

//  Only Admin Can Remove The Company From The Company List From Firebase Console


//______________________________________________Edit Company in Redux


export const editCompany = (id,updates) => ({
    type:'EDIT_COMPANY',
    id,
    updates

})

//______________________________________________Edit Company in Firebase
// Only Admin, HR Manager Can Edit The Company




