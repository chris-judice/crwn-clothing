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
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;