import React from 'react';
import {Router, Route, Link, NavLink, Switch} from 'react-router-dom'

import TasksTravels from '../components/TasksTravels'
import AddTask from '../components/AddTasks'
import AddBusinessTravel from '../components/AddBusinessTravel'
import EditTask from '../components/EditTasks'
import EditTravel from '../components/EditTravel.js'
import PageNotFound from '../components/PageNotFound'
import Help from '../components/Help'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TasksPage from '../components/TasksPage'
import TravelsPage from '../components/TravelsPage'
import LoginPAge from '../components/LogIn'
import SignUpPage from '../components/SignUpPage'
import SignInPage from '../components/SignInPage'
import AddCompany from '../components/AddCompany'

//---- forredirecting
import createHistory from 'history/createBrowserHistory';
export const history = createHistory()
//---
//--PrivateRoute
import PrivateRoute from './PrivateRoute';
const AppRouter = () => (
    <Router history={history}> 
    <div>
        <Header/>
        <Switch>
            <Route path="/signin" component={SignInPage} />
            <Route path="/login" component={LoginPAge} />
            <Route path='/signup' component={SignUpPage} />
            <Route path="/" component={TasksTravels} exact={true}/>
            <Route path="/taskspage" component={TasksPage} />
            <Route path='/travelspage' component={TravelsPage} />
            <Route path= '/addcompany' component = {AddCompany} />
            <PrivateRoute path="/addtask" component={AddTask} />
            <PrivateRoute path="/addbusinesstravel" component={AddBusinessTravel} />
            <PrivateRoute path="/edittask/:id" component={EditTask} />
            <PrivateRoute path ="/edittravel/:id" component={EditTravel} />
            <Route path="/contact" component={Contact} />
            <Route path="/help" component = {Help}/>
            <Route component={PageNotFound} />
        </Switch>
        <Footer/>
    </div>
    
</Router>
)


export default AppRouter;