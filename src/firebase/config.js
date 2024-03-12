import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCeovUpFSqwAlyByNfrpCPt8HOpaSZoV00",
    authDomain: "echonest-6969.firebaseapp.com",
    projectId: "echonest-6969",
    storageBucket: "echonest-6969.appspot.com",
    messagingSenderId: "603353388299",
    appId: "1:603353388299:web:11aa58039298b134c1be0e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
