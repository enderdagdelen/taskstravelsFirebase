//REDUX
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

//THUNK
import thunk from 'redux-thunk'


//REDUCERS
import taskReducer from '../reducers/taskReducer'
import travelReducer from '../reducers/travelReducer'
import taskFilterReducer from '../reducers/taskFilterReducer'
import travelFilterReducer from '../reducers/travelFilterReducer'
import taskRowReducer from '../reducers/taskRowReducer'
import travelRowReducer from '../reducers/travelRowReducer'
import companyReducer from '../reducers/companyReducer'
import personelReducer from '../reducers/personelReducer'
import authReducer from '../reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
const store = createStore(combineReducers(
    {
        tasks:taskReducer,
        travels:travelReducer,
        taskFilters:taskFilterReducer,
        travelFilters:travelFilterReducer,
        taskRows:taskRowReducer,
        travelRows:travelRowReducer,
        auth:authReducer,
        companies:companyReducer,
        personels:personelReducer
    }
), 
composeEnhancers(applyMiddleware(thunk))

);

    return store
}


// firebase e bağlanmadan önceki kod
/*

//REDUX
import {createStore, combineReducers} from 'redux'

//REDUCERS
import taskReducer from '../reducers/taskReducer'
import travelReducer from '../reducers/travelReducer'
import taskFilterReducer from '../reducers/taskFilterReducer'
import travelFilterReducer from '../reducers/travelFilterReducer'
import taskRowReducer from '../reducers/taskRowReducer'
import travelRowReducer from '../reducers/travelRowReducer'

export default () => {

    
const store = createStore(combineReducers(
    {
        tasks:taskReducer,
        travels:travelReducer,
        taskFilters:taskFilterReducer,
        travelFilters:travelFilterReducer,
        taskRows:taskRowReducer,
        travelRows:travelRowReducer
    },
),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    return store
}


*/

