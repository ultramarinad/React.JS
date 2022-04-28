import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpqlfu-iEBp--3t8WaoISs-wqV7eN9wEM",
  authDomain: "gb-project-2218f.firebaseapp.com",
  databaseURL:
    "https://gb-project-2218f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-project-2218f",
  storageBucket: "gb-project-2218f.appspot.com",
  messagingSenderId: "766314606419",
  appId: "1:766314606419:web:46f601b8e1d9dce3a7bba6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");
export const chatsRef = rootRef.child("chats");
export const messageRef = rootRef.child("messages");
