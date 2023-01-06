import { auth, chatsRef,feedbackRef } from "./../../utilites/firebase/firbase";
import { isEmail, isPassword, isEmpty } from "./../utilities/validator";
import { push, set } from "firebase/database";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
export const logIn = (email: string, password: string): boolean => {
  let res = false;
  if (isEmail(email) && isPassword(password))
    signInWithEmailAndPassword(auth, email, password)
      .then(() => (res = true))
      .catch(() => (res = false));
  return res;
};
export const creteUser = (email: string, password: string):boolean => {
  let res = false;
  if (isEmail(email) && isPassword(password))
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => (res = true))
      .catch(() => (res = false));
  return res;
};
export const sendMessage = (
  message: string,
  senderId: string,
  senderName: string
): boolean => {
  if (isEmpty(message)) return false;
  const newDate = new Date().toString();
  const newChatRef = push(chatsRef);
  set(newChatRef, {
    from: senderId,
    name: senderName,
    body: message,
    date: newDate
  });
  return true;
};
export const sendFeedback =(name:string,email:string,message:string)=>{
  if(isEmpty(name)) return false;
  if(!isEmail(email)) return false
  if(isEmpty(message)) return false
  const newDate = new Date().toString();
  
  const newRef = push(feedbackRef);
    set(newRef, {
      email: email,
      name: name,
      body: message,
      date: newDate
    });
    return true
}
export const update = (userName: string): boolean => {
  if (isEmpty(userName)) return false;
  updateProfile(auth.currentUser!, { displayName: userName });
  return true;
};