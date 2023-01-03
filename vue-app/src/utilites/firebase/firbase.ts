import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
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
