import React from "react";
import {firebase} from '../firebase/firebase'
import {Redirect} from 'react-router-dom'



class SignUpPage extends React.Component {


    initSignUp=(e)=>{
        e.preventDefault()
        const email = document.getElementById('signUpEmail').value
        const pwd = document.getElementById('signUpPwd').value

        firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then((credentials)=>{
            console.log(credentials);
            document.getElementById('signUpError').innerHTML="Singed Up Succesfully. Redirecting To Home Page"

            setTimeout(()=>{
               //return <Redirect to='/' />
               this.props.history.push('/')
            },3000)
        }).catch((err)=>{
            console.log("error",err)
            document.getElementById('signUpError').innerHTML="hello"
        })
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
                            <label className="form-label" htmlFor="signUpPwd" >Email</label>
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





export default SignUpPage

    
