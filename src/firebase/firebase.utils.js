import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBiRnZ1li1Wch9bvedRbyLFmqy6Y-zMLMQ",
    authDomain: "crwn-db-6b498.firebaseapp.com",
    databaseURL: "https://crwn-db-6b498.firebaseio.com",
    projectId: "crwn-db-6b498",
    storageBucket: "crwn-db-6b498.appspot.com",
    messagingSenderId: "933433480010",
    appId: "1:933433480010:web:9d22075f078c74330827b3"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;