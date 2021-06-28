import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0tThUAmtN2GT7Un5F6iS1zcDEZnbcaoM",
    authDomain: "sipresta-9c45e.firebaseapp.com",
    projectId: "sipresta-9c45e",
    storageBucket: "sipresta-9c45e.appspot.com",
    messagingSenderId: "727055212513",
    appId: "1:727055212513:web:fc908065302f1f91387ca0"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

/*
{
  "rules": {
      "tareas":{  // coleccion q queremos autenticar
          "$uid":{  // id autenticado
              ".read": "$uid === auth.id",
              ".write": "$uid === auth.id"
          }
      }
  }
}
*/

