import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAHUlHxnGDa3l6S0y0zHYIZcriBM0WCl9M",
  authDomain: "reactnativetest-416d4.firebaseapp.com",
  projectId: "reactnativetest-416d4",
  storageBucket: "reactnativetest-416d4.appspot.com", 
  messagingSenderId: "254821818245",
  appId: "1:254821818245:web:fa037d78b83658c9792eec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)










