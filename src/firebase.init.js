// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5d4x_AIJXNaar_yj1Haq_8oHrzuQUFzU",
    authDomain: "car-service-react.firebaseapp.com",
    projectId: "car-service-react",
    storageBucket: "car-service-react.appspot.com",
    messagingSenderId: "724375538494",
    appId: "1:724375538494:web:6299fea10338050bb67a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;