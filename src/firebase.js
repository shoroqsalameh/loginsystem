import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0R47dBCdR7_FLfUxl3uPQm2v9eXPYtTw",
  authDomain: "login-system-25419.firebaseapp.com",
  projectId: "login-system-25419",
  storageBucket: "login-system-25419.appspot.com",
  messagingSenderId: "398376369296",
  appId: "1:398376369296:web:38c83730a922ab845bec15",
  measurementId: "G-WS3ZT5P03C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;