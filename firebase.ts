// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCsqabHZeyiiJp0R7aR_NDur7qnHL5WdNU',
  authDomain: 'netflix-clone-661dc.firebaseapp.com',
  projectId: 'netflix-clone-661dc',
  storageBucket: 'netflix-clone-661dc.appspot.com',
  messagingSenderId: '947122345809',
  appId: '1:947122345809:web:edfb5368bdaec4be83a570',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
