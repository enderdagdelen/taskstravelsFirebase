
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import "firebase/storage";
import React from 'react';
import { Redirect, useHistory } from 'react-router'


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()



// sign up
  const signup = (email, pwd, props) =>{

    firebase.auth().createUserWithEmailAndPassword(email, pwd)
        .then((credentials)=>{
            console.log(credentials);
            document.getElementById('signUpError').innerHTML="Singed Up Succesfully. Redirecting To Home Page"

            setTimeout(()=>{

                //return <Redirect to ='/' />
                props.history.push('/')
            },3000)
        }).catch((err)=>{
            document.getElementById('signUpError').innerHTML=err
        })


  }




  export {firebase, googleAuthProvider, signup, database as default}; 


/*

  firebase.database().ref().set({
      name:"Ender Dagdelen",
      age:36,
      isSingle:true,
      stressLevel:6,
      job:{
          title:"software developer",
          company:"google"
      },
      location:{
          city:"Ankara",
          country:"Turkey",
          neighbourhood:"Bahcelievler"
      }
  }).then(()=>{
      console.log("Data Succesfuly Recorded");
  }).catch((err)=>{
      console.log(err);
  })



  firebase.database().ref().update({
      stressLevel:9,
      "job/company":"Amazon",
      "location/city":"Seattle",
    })
  .then(()=>{console.log("Updated Successfully");})
  .catch((err)=>{"Bir Hata MEydana Geldi", err})



    firebase.database().ref('age').set(20).then(
        ()=>{
            console.log("Age is altered");
        }
    ).catch(
        (err)=>{
            console.log("Hata Meydana Geldi", err);
        }
    )


firebase.database().ref('isSingle').remove()
.then(()=>{console.log("Succesfully Removed");})
.catch((err)=>{console.log("A Problem Arised", err);})




//__________________________________________________________FETCH DATA

once
firebase.database().ref().once('value')
.then((snapshot)=>{
    console.log(snapshot.val());
})
.catch((err)=>{"Something Went Wrong", err})


firebase.database().ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
})


setTimeout(()=>{
    firebase.database().ref().update({age:25})
},3000)

setTimeout(()=>{
    firebase.database().ref().off()
},4000)

setTimeout(()=>{
    firebase.database().ref().update({age:20})
},5000)




eğer birden fazla suscription kullanılmış ve biz sadece bir tanesini iptal etmek istersek de 

const subs = firebase.database().ref().on('value',
(snapshot)=>{
    console.log(snapshot.val().name + " is a " + snapshot.val().job.title + " at " + snapshot.val().job.company);
})

setTimeout(()=>{
    firebase.database().ref().off(subs)
},6000)



// egzersiz

const asd = firebase.database().ref().on('value',
(snapshot)=>{
    let k = snapshot.val()
    console.log(`${k.name} is a ${k.job.title} at ${k.job.company}`);
},(err)=>{console.log(err);})

setTimeout(()=>{
    firebase.database().ref().update({
        "job/title":"Junior Developer",
        "job/company":"BMW"
    })
},4000)

setTimeout(()=>{

    firebase.database().ref().off('value',asd)

},5000)



setTimeout(()=>{
    firebase.database().ref().update({
        "job/title":"Junior Developer",
        "job/company":"Mercedes"
    }).then(()=>{console.log("Job Changed");}).catch((err)=>{console.log(err);})
},6000)


// array's 

const myArr =[
    {
        description:"Gas Money",
        Note:"For the road",
        amount:"50",
        createdAt:5
    },
    {
        description:"Food",
        Note:"Diet Food",
        amount:"39",
        createdAt:6
    },
    {
        description:"Tuitition",
        Note:"For the school",
        amount:"150",
        createdAt:7
    }
]

myArr.forEach((item)=>{
    firebase.database().ref('expenses').push(item)
})
 



firebase.database().ref('expenses').on('value',
(snapshot)=>{
    const array = []
    snapshot.forEach((snapshotChild)=>{
        array.push({
            id:snapshotChild.key,
            ...snapshotChild.val()
        })

    })
    console.log(array);


},
(err)=>{
    console.log(err);
})

setTimeout(()=>{

    firebase.database().ref('expenses/-MfGzxRqXnlkIdnPHjLC').update({
        amount:99
    }).then(()=>{console.log("amount updated");}).catch((err)=>{console.log(err);})

},4000)


// value dışında farklı subscription tipleri de vardır. 'child_removed' - 'child_changed' - 'child-added' - 'childe-moved'

firebase.database().ref('expenses').on('child_changed',(snapshot)=>{
    console.log("id:"+snapshot.key,snapshot.val());
})


firebase.database().ref('expenses').push([
    "çalışmak laızm"
])




let myArr2=[]
firebase.database().ref('expenses').on('value',(snapshot)=>{
    snapshot.forEach((child)=>{
        myArr2.push({
            id:child.key,
            ...child.val()
        })
    })
    console.log(myArr2);
})

*/
