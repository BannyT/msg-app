//here we are import the installed firebase module in our application such that we can use it

import  firebase from "firebase"

//these are the conguration keys for our application

const firebaseConfig = {
    apiKey: "AIzaSyAxXl672Tkz7k33bytFxg9Kr2ZgFLvklpk",
    authDomain: "msg-application.firebaseapp.com",
    projectId: "msg-application",
    storageBucket: "msg-application.appspot.com",
    messagingSenderId: "112751937505",
    appId: "1:112751937505:web:5b235adace91ade4b1f4a0",
    measurementId: "G-33NGXNYK8R"
  };


  // iniatialising or starting our apllication
    
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // create a link to our database

  const db = firebaseApp.firestore()

  //create link for authentication

  const auth = firebase.auth()

  // configure google authentication service

  const provider = new  firebase.auth.GoogleAuthProvider()


  // export our instances

  export {auth,provider}
   export default db