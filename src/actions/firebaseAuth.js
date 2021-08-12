import {firebase, googleAuthProvider} from '../firebase/firebase'

export const startLogin = () => {
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
} 


export const signin = (uid) => ({
    type:'SIGNIN',
    uid
})


export const signout = () => ({
    type:'SIGNOUT'
    
})