import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { 
//   getAuth, 
//   createUserWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signOut, 
//   signInWithEmailAndPassword 
// } from "firebase/auth";


// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const auth = getAuth()

export const db = getFirestore(app)

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password)
// }

// export function logout() {
// return signOut(auth)
// }

// // Custom Hook
// export function useAuth() {
// const [currentUser, setCurrentUser] = useState()

// useEffect(() => {
//   const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
//   return unsub;
// }, [])

// return currentUser
// }



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

