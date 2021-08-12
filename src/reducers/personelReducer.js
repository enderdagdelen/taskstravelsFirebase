

const personelReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_PERSONEL':
            return[
                ...state,
                action.personel
            ]
        
        case 'EDIT_PERSONEL':
            return state.map((person)=>{
                if(person.personelId === action.id){
                    return{
                        ...person,
                        ...action.updates
                    }
                }else{
                    return person
                }
            })

        case 'REMOVE_PERSONEL':
            return state.filter(({personelId})=>{
                return personelId !== action.id
            })

        default:
            return state;
    }
}

export default personelReducer