import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbKP2ea48a7mGwkmjMG6tnFLTj8sv-JLo",
    authDomain: "storefront-db-a67d7.firebaseapp.com",
    databaseURL: "https://storefront-db-a67d7.firebaseio.com",
    projectId: "storefront-db-a67d7",
    storageBucket: "",
    messagingSenderId: "347365622603",
    appId: "1:347365622603:web:25257002b22428f7"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;