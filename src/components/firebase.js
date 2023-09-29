import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_tA2_xic7Y18oVgj15Rq1M7hN_NbQ5ig",
  authDomain: "mywhatsapp-b7d0f.firebaseapp.com",
  projectId: "mywhatsapp-b7d0f",
  storageBucket: "mywhatsapp-b7d0f.appspot.com",
  messagingSenderId: "284696206652",
  appId: "1:284696206652:web:10bf4225d731ea4ddc5239",
  measurementId: "G-48JJ97FYBT"
};

 
  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const firestoreage=firebase.storage();
  const db =firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new  firebase.auth.GoogleAuthProvider();
  const timestamps=firebase.firestore.FieldValue.serverTimestamp;
  
  export {auth,provider,timestamps,firestoreage};
  export default db;