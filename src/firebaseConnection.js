import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQuS9KBfZJWWPCTYToly7isIC4twQs1FI",
  authDomain: "cursoig.firebaseapp.com",
  projectId: "cursoig",
  storageBucket: "cursoig.appspot.com",
  messagingSenderId: "980522297123",
  appId: "1:980522297123:web:057dea3f8bc0c0dcf18e96",
  measurementId: "G-GZHM6JNNHW",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
