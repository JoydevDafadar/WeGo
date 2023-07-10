import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

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

const db = getFirestore(app);



// Database

export const getRides = async () => {
    try {
        const data = await getDocs(collection(db, "rides"))
        const arr = [];
        data.docs.map((ele) =>{
            arr.push(ele);
        })
        return arr;
    } catch (error) {
        console.log(error);
    }
}


export const createRide = async (newName, newPhNo, newSrc, newDst, newSeat, newPrice, newType, newDate, newTime ) => {
    try{
        await addDoc(collection(db, "rides"), {
            name : newName,
            ph_no : newPhNo,
            src : newSrc,
            dst : newDst,
            price : newPrice,
            seat : newSeat,
            type : newType,
            date : newDate,
            time : newTime
        })

    }catch( err ){
        console.log( err );
    }
}

export const updateRide = async (id, seat) => {
    try {
        const rideDoc = doc(db, "rides", id);
        const newfield = {seat : JSON.stringify(Number.parseInt(seat) - 1)}
        await updateDoc(rideDoc, newfield);
        console.log("done", JSON.stringify(Number.parseInt(seat) - 1))
    } catch (error) {
        console.log(error);
    }
}

export const createRef = async(userName, ownerName, Ph_no, src, dst, price ) => {
    try {
        await addDoc(collection(db, userName), {
            name: ownerName,
            ph_no: Ph_no,
            src: src,
            dst: dst,
            price: price
        })
        
    } catch (error) {
        console.log( error );
    }
}
export const getRef = async(colId) =>{
    try{

        const data = await getDocs(collection(db, colId));
        const arr = [];
        data.docs.map((ele) =>{
            arr.push(ele);
        })
        return arr;

    }catch(err){
        console.log(err);
    }
}







// Sign in Section 


export async function signin(email, pass) {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    localStorage.setItem('user', userCredential.user.email);
    localStorage.setItem('useron', 'true');
    return userCredential;
}

export async function signout() {
    const auth = getAuth();
    await signOut(auth)
    localStorage.setItem('useron', 'false');
}

export async function signUp(email, pass) {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, pass);
}






