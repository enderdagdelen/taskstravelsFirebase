import React from 'react'
import { connect } from 'react-redux';
import { startLogin } from '../actions/firebaseAuth';


const LoginComponent = ({startLogin}) => (
    <div>
            <div className="container mb-5 bg-light-gray"  id="loginForm" >
            <p id="loginHeader">Log In</p>
                <form>
                    <div className="form-group p-3">
                        <label htmlFor="username">Name</label>
                        <input className="form-control" type="text" id="username"/>
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="text" id="password"/>
                        <button className="btn btn-secondary btn-lg" type="submit" id="loginBtn">Log In</button>
                    </div>
                    
                </form>
                <label htmlFor="loginBtnGoogle">Auth with Google</label>
                    <br></br>
                    <button className="btn btn-secondary btn-lg" onClick={startLogin} type="submit" id="loginBtnGoogle">Log In</button>
            </div>
    </div>
    
)


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined, mapDispatchToProps)(LoginComponent)
 


//alternative version 
/*
const LoginComponent = ({dispatch}) => (
    <div>
            <div className="container mb-5 bg-light-gray"  id="loginForm" >
            <p id="loginHeader">Log In</p>
                <form>
                    <div className="form-group p-3">
                        <label htmlFor="username">Name</label>
                        <input className="form-control" type="text" id="username"/>
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="text" id="password"/>
                        <button className="btn btn-secondary btn-lg" type="submit" id="loginBtn">Log In</button>
                    </div>
                    
                </form>
                <label htmlFor="loginBtnGoogle">Auth with Google</label>
                    <br></br>
                    <button className="btn btn-secondary btn-lg" onClick={dispatch(startLogin)} type="submit" id="loginBtnGoogle">Log In</button>
            </div>
    </div>
    
)



export default connect()(LoginComponent)

*/