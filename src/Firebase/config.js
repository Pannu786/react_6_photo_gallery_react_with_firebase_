import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCzT3THIQkmm77UEzYCwhnMlb1orKR5k7I',
  authDomain: 'first-fire-78e02.firebaseapp.com',
  projectId: 'first-fire-78e02',
  storageBucket: 'first-fire-78e02.appspot.com',
  messagingSenderId: '861125312239',
  appId: '1:861125312239:web:a50a4f18d20bd6972da51a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
