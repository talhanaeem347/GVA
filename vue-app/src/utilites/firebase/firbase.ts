import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAk3puo6euNej34Cr_xdpa5CLwPMdacXfI",
    authDomain: "vueapp-4ff4f.firebaseapp.com",
    projectId: "vueapp-4ff4f",
    storageBucket: "vueapp-4ff4f.appspot.com",
    messagingSenderId: "1006569145600",
    appId: "1:1006569145600:web:a78217788a762beef39fe5",
    databaseURL: "https://vueapp-4ff4f-default-rtdb.firebaseio.com"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export const auth = getAuth(app)
export const chatsRef = ref(db, `chats`);
export const feedbackRef = ref(db, `feedback`);
export const creteUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

        })
        .catch((error) => {
            console.log(error.message);

        });
}

export const update = (userName: string, photo = "") => {
    if (photo == "")
        updateProfile(auth.currentUser!, { displayName: userName }).then(() => {
        }).catch((err) => {
            console.log(err);
        });
    else
        updateProfile(auth.currentUser!, { displayName: userName, photoURL: photo }).then(() => {
        }).catch((err) => {
            console.log(err);
        });

} 