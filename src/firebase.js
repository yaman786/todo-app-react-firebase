import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPkJcDEwQFzlr3O658h4JYxXhyiXDF7Fk",
  authDomain: "todo-app-cp-8af56.firebaseapp.com",
  databaseURL: "https://todo-app-cp-8af56.firebaseio.com",
  projectId: "todo-app-cp-8af56",
  storageBucket: "todo-app-cp-8af56.appspot.com",
  messagingSenderId: "767818769947",
  appId: "1:767818769947:web:8578b72e13b0710f747abe",
  measurementId: "G-62FL4169QF",
});

const db = firebaseApp.firestore();

export default db;
