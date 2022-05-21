// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD67vpSOFVYD743lOBwNxV4E4dFrNx2n24",
    authDomain: "tool-manufacture-client.firebaseapp.com",
    projectId: "tool-manufacture-client",
    storageBucket: "tool-manufacture-client.appspot.com",
    messagingSenderId: "368282502259",
    appId: "1:368282502259:web:e31409d8a64b9b0b41d606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;