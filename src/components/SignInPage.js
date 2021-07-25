import React from "react";
import {firebase} from '../firebase/firebase'



class SignInPage extends React.Component {


    initSignIn=(e)=>{
        e.preventDefault()
        const email = document.getElementById('signInEmail').value
        const pwd = document.getElementById('signInPwd').value

        firebase.auth().signInWithEmailAndPassword(email, pwd)
        .then((credentials)=>{
            console.log(credentials);
            document.getElementById('signInError').innerHTML="Singed In Succesfully. Redirecting To Home Page"

            setTimeout(()=>{
               this.props.history.push('/')
            },3000)
        }).catch((err)=>{
            console.log("error",err)
            document.getElementById('signInError').innerHTML = err
        }) 
    }



    render(){

        return <div className="container">
                    <form id="signInform" onSubmit={this.initSignIn}>
                        <p>Sign In  </p>
                        <div className="form-group">
                            <label className="form-label" htmlFor="signInEmail" >Email</label>
                            <input className="form-control" id="signInEmail"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="signInPwd" >Password</label>
                            <input className="form-control" id="signInPwd" type="password"/>
                        </div>
                        <div>
                            <p id="signInError"></p>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-lg" id="signinbtn" >Sign In</button>
                        </div>

                    </form>
                </div>

    }
        
}





export default SignInPage

    
