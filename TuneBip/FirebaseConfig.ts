// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpVXau_WzuE4mDuxzZV-K8UJV8X4zPKm4",
  authDomain: "tunebip.firebaseapp.com",
  projectId: "tunebip",
  storageBucket: "tunebip.appspot.com",
  messagingSenderId: "353883035065",
  appId: "1:353883035065:web:844aade32e5a7a54c0d268"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});