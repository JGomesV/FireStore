import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyBX-QT0o9bc4IPjpHu9Xg01MMFGzv7Lqjw",
  authDomain: "firestore-bb9a6.firebaseapp.com",
  projectId: "firestore-bb9a6",
  storageBucket: "firestore-bb9a6.appspot.com",
  messagingSenderId: "57746925389",
  appId: "1:57746925389:web:fe506d4cae1208790ab904"
};


window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);
