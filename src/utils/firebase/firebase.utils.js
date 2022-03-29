import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgLoOXbaCYvunFVrRTZ0SNCU9bOpHmWmA",
  authDomain: "crwn-clothing-9d5b6.firebaseapp.com",
  projectId: "crwn-clothing-9d5b6",
  storageBucket: "crwn-clothing-9d5b6.appspot.com",
  messagingSenderId: "403760397345",
  appId: "1:403760397345:web:914697cd55283cd596b760",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating new user", error.message);
    }
  }

  return userDocRef;
};
