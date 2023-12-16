import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABHPPPBmNMDNZM0ajTQv52H4dJ6iQrwE",
  authDomain: "ezmart-8f9a1.firebaseapp.com",
  projectId: "ezmart-8f9a1",
  storageBucket: "ezmart-8f9a1.appspot.com",
  messagingSenderId: "185516774327",
  appId: "1:185516774327:web:c3c1cd50839701215f8e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;