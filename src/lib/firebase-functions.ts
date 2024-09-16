"use client";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { firebaseApp } from "./firebase-config";

export const signUpWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    try {
        const auth = getAuth(firebaseApp);
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};
export const credentialLogin = async (email: string, password: string) => {
    try {
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(response);
    } catch (err) {
        console.log(JSON.stringify(err));
    }
};

export const googleSignIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
        const auth = getAuth();
        const result = await signInWithPopup(auth, provider);

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {
    const auth = getAuth(firebaseApp);
    await signOut(auth);
};
