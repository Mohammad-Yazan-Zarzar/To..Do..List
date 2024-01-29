// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// import firebase from 'firebase/app';


// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js'

// Add Firebase products that you want to use
// import { getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqVsf8FV-K_4oui3gsxZZaeWupQSF9ulc",
  authDomain: "to-do-list-v2-31c0e.firebaseapp.com",
  projectId: "to-do-list-v2-31c0e",
  storageBucket: "to-do-list-v2-31c0e.appspot.com",
  messagingSenderId: "26980482651",
  appId: "1:26980482651:web:f0e3cf34dff373e025097e",
  measurementId: "G-N1NG9WFPNG"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// export default  firebase;
//----------------------------------
// push Notification
const messaging = getMessaging(app);


export const requestPermission = () => {

  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {

    if (permission === "granted") {

      console.log("Notification User Permission Granted."); 
      return getToken(messaging, { vapidKey: `Notification_key_pair` })
        .then((currentToken) => {

          if (currentToken) {

            console.log('Client Token: ', currentToken);
          } else {
            
            console.log('Failed to generate the app registration token.');
          }
        })
        .catch((err) => {

          console.log('An error occurred when requesting to receive the token.', err);
        });
    } else {

      console.log("User Permission Denied.");
    }
  });

}

requestPermission();
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});