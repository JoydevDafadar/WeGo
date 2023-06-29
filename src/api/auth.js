import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


export async function signin(email, pass) {
    const auth = getAuth();
    const userCredential = signInWithEmailAndPassword(auth, email, pass);
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
    await createUserWithEmailAndPassword(auth, signupemail, signuppass);
}