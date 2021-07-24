import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0tThUAmtN2GT7Un5F6iS1zcDEZnbcaoM",
    authDomain: "sipresta-9c45e.firebaseapp.com",
    projectId: "sipresta-9c45e",
    // auth: { uid: "XJRDQILZZqg8j8MyA1ZGWAh9gti1", email: "josecarrillo8@gmail.com" },
    storageBucket: "sipresta-9c45e.appspot.com",    
    messagingSenderId: "727055212513",
    appId: "1:727055212513:web:fc908065302f1f91387ca0"
}
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)

export const db = fb.firestore()
// export const auth = firebase.auth()

/*
Acceso para cualquier usuario autenticado
service cloud.firestore {
  match /databases/{database}/documents {
    match /some_collection/{document} {
      allow read, write: if request.auth != null;
    }
  }
}

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

