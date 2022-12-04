// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyArMvYRI0vZlrnpJTaGlv1JfVtsirAfuIY",
    authDomain: "ontrack-eca77.firebaseapp.com",
    projectId: "ontrack-eca77",
    storageBucket: "ontrack-eca77.appspot.com",
    messagingSenderId: "386165542290",
    appId: "1:386165542290:web:e73f2df9b9a623cd7a854b",
    measurementId: "G-VWQPCHVPFL",
  };
  
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});