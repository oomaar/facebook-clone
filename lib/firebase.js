import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDMTjnIaqsrHY_lpfV6mO7x2ObOBNFjVVM",
    authDomain: "facebook-clone-efb70.firebaseapp.com",
    projectId: "facebook-clone-efb70",
    storageBucket: "facebook-clone-efb70.appspot.com",
    messagingSenderId: "342321076876",
    appId: "1:342321076876:web:9cfb88899b595bf1c679a9"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {
    db,
    storage
}