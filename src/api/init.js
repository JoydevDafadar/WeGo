// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export function init() {
    const firebaseConfig = {
        apiKey: "AIzaSyCTD_-gzijcmzD5vIhb7_XBfjwzOlkHO9o",
        authDomain: "wego-af74f.firebaseapp.com",
        projectId: "wego-af74f",
        storageBucket: "wego-af74f.appspot.com",
        messagingSenderId: "943499970684",
        appId: "1:943499970684:web:b14ea293c4b85b1cb621f9",
        measurementId: "G-G7S37KGVD3"
    };

    console.log(firebaseConfig);

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return { app, analytics };
}