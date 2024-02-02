import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  PhoneAuthProvider,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1OQdS7Cz9wyohBTYWGoD4dD4w1DBdN0g",
  authDomain: "order-management-71bf1.firebaseapp.com",
  projectId: "order-management-71bf1",
  storageBucket: "order-management-71bf1.appspot.com",
  messagingSenderId: "390607973296",
  appId: "1:390607973296:web:31b471b2ba6535f5394475",
  measurementId: "G-X88MC8BRPL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//  google authentication
export const siginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const dp = result.user.photoURL;
      const name = result.user.displayName;
      console.log(name);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Phone OTP
export const sendCodeToPhone = async (phoneNumber) => {
  try {
    const auth = getAuth();
    const appVerifier = new PhoneAuthProvider(auth);
    const confirmationResult = await signInWithPhoneNumber(
      appVerifier,
      phoneNumber
    );
    // Save the confirmationResult for later use
    return confirmationResult;
  } catch (error) {
    console.error("Error sending code:", error);
    throw error;
  }
};

export const signInWithPhoneCode = async (
  confirmationResult,
  verificationCode
) => {
  try {
    const credential = PhoneAuthProvider.credentialFromInput(
      confirmationResult,
      verificationCode
    );
    await auth.signInWithCredential(credential);
    // User is now authenticated
  } catch (error) {
    console.error("Error verifying code:", error);
    throw error;
  }
};

export default app;
