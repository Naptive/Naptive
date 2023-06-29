import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqBQ-SXPbN1otvfNwgz949D9y3A6gtBls",
  authDomain: "naptive-59613.firebaseapp.com",
  projectId: "naptive-59613",
  storageBucket: "naptive-59613.appspot.com",
  messagingSenderId: "985599900190",
  appId: "1:985599900190:web:b43f79f14eb648ad8b4c0f",
  measurementId: "G-XV69ZY5VPJ",
};

// Initialize Firebase

if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    if ("measurementId" in firebaseConfig) {
      firebase.analytics()
      
    }
  }
}
const analytics = getAnalytics(app);