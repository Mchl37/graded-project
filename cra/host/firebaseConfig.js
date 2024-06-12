// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAgUlKkquWIUqi8aGVFVxbA6VgjE3vERQ',
  authDomain: 'basic-host-remote.firebaseapp.com',
  projectId: 'basic-host-remote',
  storageBucket: 'basic-host-remote.appspot.com',
  messagingSenderId: '899664052938',
  appId: '1:899664052938:web:527f6b3f69c0f591456a33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
