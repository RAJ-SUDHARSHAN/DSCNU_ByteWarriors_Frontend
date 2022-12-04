// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyArMvYRI0vZlrnpJTaGlv1JfVtsirAfuIY",
//   authDomain: "ontrack-eca77.firebaseapp.com",
//   projectId: "ontrack-eca77",
//   storageBucket: "ontrack-eca77.appspot.com",
//   messagingSenderId: "386165542290",
//   appId: "1:386165542290:web:e73f2df9b9a623cd7a854b",
// };

// initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArMvYRI0vZlrnpJTaGlv1JfVtsirAfuIY",
  authDomain: "ontrack-eca77.firebaseapp.com",
  projectId: "ontrack-eca77",
  storageBucket: "ontrack-eca77.appspot.com",
  messagingSenderId: "386165542290",
  appId: "1:386165542290:web:e73f2df9b9a623cd7a854b",
  measurementId: "G-VWQPCHVPFL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export const getTokenCall = (setTokenFound, setFcmToken) => {
  return getToken(messaging, {
    vapidKey:
      "BDBbjwlcYxiiTf2XqWCHyHbbXc8NsLzrngOTHPKEYCl3Q-BVN1L1FuQJKV5Sz0KwqTYyKa7QyGP1jhFPsSL6qWU",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        setFcmToken(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};
