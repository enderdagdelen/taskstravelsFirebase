import React from 'react';
import {NavLink} from 'react-router-dom'
import {firebase} from '../firebase/firebase'

import {history} from '../routers/appRouter'

const Header = () => (
    <header>
        <h1>Tasks&BusinessTravels</h1>
        <div className="containerHeader">
        <ul className="navbarHeader">
            <li><button className="btn btn-light mt-3" onClick={()=>{
                firebase.auth().signOut()
                .then(()=>{console.log('Sign-Out Succesfull') })
                .catch((err)=>{console.log("err",err) })
                history.push('/')
                location.reload()
            }}>Sign Out</button></li>
            <li><NavLink id="NL" to="/signin" activeClassName="is-active" >Sign In</NavLink></li>
            <li><NavLink id="NL" to="/addcompany" activeClassName="is-active" >Add Company</NavLink></li>

            <li><NavLink id="NL" to="/signup" activeClassName="is-active" >Sign Up</NavLink></li>
            <li><NavLink id="NL" to="/login" activeClassName="is-active" >Login</NavLink></li>
            <li><NavLink id="NL" to="/help" activeClassName="is-active" >Help</NavLink></li>
            <li><NavLink id="NL" to="/contact" activeClassName="is-active">Contact</NavLink></li>
            <li><NavLink id="NL" to="/addbusinesstravel" activeClassName="is-active">Add Business Travel</NavLink></li>
            <li><NavLink id="NL" to="/addtask" activeClassName="is-active">Add Task</NavLink></li>
            <li><NavLink id="NL" to="/" activeClassName="is-active" exact={true}>Home Page</NavLink></li>
        
            </ul>
        </div>
        
    </header>
)


export default Header