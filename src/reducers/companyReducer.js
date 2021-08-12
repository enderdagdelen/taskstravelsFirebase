

const companyReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return[
                ...state,
                action.company
            ]

        case 'REMOVE_COMPANY':
            return state.filter(({companyId})=>(companyId !== action.id))
/*
            return state.filter((company)=>{
                return company.companyId !== action.id
            })
*/
        case 'EDIT_COMPANY':
            return state.map((company)=>{
                if(company.companyId === action.id){
                    return{
                        ...company,
                        ...action.updates
                    }
                }else{
                    return company
                }
            })

        default:
            return state;
    }
}

export default companyReducer