
import React from 'react';
import ReactDOM from 'react-dom';

//react-redux
import {Provider} from 'react-redux'

//router
import AppRouter, {history} from './routers/appRouter';

// Redux Store
import configureStore from './store/configureStore'
const store = configureStore()


//Redux Action Generators
import {initiateFetchTask} from './actions/task.js'
import {initiateFetchTravel} from './actions/travel.js'
import { signin, signout } from './actions/firebaseAuth';

// Redux visible tasks and travels
import getVisibleTasks from './selectors/taskSelector'
import getVisibleTravels from './selectors/travelSelector'


//css-scss-normalize
import 'normalize.css/normalize.css'; 
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';

//firebase
import {firebase} from './firebase/firebase';





const state = store.getState()


const visibleTasks = getVisibleTasks(state.tasks,state.taskFilters)
const visibleTravels = getVisibleTravels(state.travels, state.travelFilters)


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(<p>Loading...</p> , document.getElementById('app'));



// for not re-loading the app
let hasRendered = false
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered = true
    }

}


firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        store.dispatch(signin(user.uid))
        store.dispatch(initiateFetchTask()).then(()=>{

            store.dispatch(initiateFetchTravel()).then(()=>{
                renderApp()
            })
        })

    }else{
        store.dispatch(signout())

        renderApp()
        console.log("logout");
        history.push('/')

    }
})