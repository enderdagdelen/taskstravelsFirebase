import React from "react";
import {firebase, signup} from '../firebase/firebase'
import {connect} from 'react-redux'


class SignUpPage extends React.Component {

    initSignUp=(e)=>{
        e.preventDefault()
        const email = document.getElementById('signUpEmail').value
        const pwd = document.getElementById('signUpPwd').value

        signup(email, pwd, this.props)
    }



    render(){

        return <div className="container">
                    <form id="signupform" onSubmit={this.initSignUp}>
                        <p>Sign Up :</p>
                        <div className="form-group">
                            <label className="form-label" htmlFor="signUpEmail" >Email</label>
                            <input className="form-control" id="signUpEmail"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="signUpPwd" >Password</label>
                            <input className="form-control" id="signUpPwd" type="password"/>
                        </div>
                        <div>
                            <p id="signUpError"></p>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-lg" id="signupbtn" >Sign Up</button>
                        </div>

                    </form>
                </div>

    }
        
}





export default connect()(SignUpPage)

    
