// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9k5JwLI7N3LGTbFh24Bg9d1C5hhgWKM",
  authDomain: "node-mongo-crud-client.firebaseapp.com",
  projectId: "node-mongo-crud-client",
  storageBucket: "node-mongo-crud-client.appspot.com",
  messagingSenderId: "805716470019",
  appId: "1:805716470019:web:06bf09a8aea5f2e3f52136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;