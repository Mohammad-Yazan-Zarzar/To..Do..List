/* eslint-disable no-undef */

importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");


 //the Firebase config object 
const firebaseConfig = {
    apiKey: "AIzaSyBqVsf8FV-K_4oui3gsxZZaeWupQSF9ulc",
    authDomain: "to-do-list-v2-31c0e.firebaseapp.com",
    projectId: "to-do-list-v2-31c0e",
    storageBucket: "to-do-list-v2-31c0e.appspot.com",
    messagingSenderId: "26980482651",
    appId: "1:26980482651:web:f0e3cf34dff373e025097e",
    measurementId: "G-N1NG9WFPNG"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});