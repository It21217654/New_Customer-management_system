import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyDMkqmDGf_ryHR0C4y59EdMQfadfcS4ZSI',
  authDomain: 'bookhub-uoc.firebaseapp.com',
  projectId: 'bookhub-uoc',
  storageBucket: 'bookhub-uoc.appspot.com',
  messagingSenderId: '179581387830',
  appId: '1:179581387830:web:04ccf096a3e8ba8eae8497',
  measurementId: 'G-X8H6JRY5JK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };