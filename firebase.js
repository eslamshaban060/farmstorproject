// !!!!!!!!!!!!!!!!!!!!!!!!!!  FIREBASE FILLE !!!!!!!!!!!!!!!!!!!!!!

// ==================== IMPORTING ELEMENT FROM FIREBASE ====================

// ------------------ TO INITIATE THE APP -------------------------
import {initializeApp} from "firebase/app"

// ----------------- TO AUTHENTICATE THE APP ---------------------

import {getAuth} from "firebase/auth"

// -------------- TO MAKE DATABASE --------------------------------

import{getFirestore} from "firebase/firestore"

// ================= OUR PROJECT DATA ============================
const firebaseConfig = {
    apiKey:process.env.apiKey,
    authDomain:process.env.authDomain,
    projectId:process.env.projectId,
    storageBucket:process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId:process.env.appId
  };

// ==================== intiate app methode =====================
const App = initializeApp(firebaseConfig)

// ================= AUTHONTICATION METHODE =====================
const Auth = getAuth(App)

// ================= database methode ==========================

const db = getFirestore(App)


// ============== exporting Auth and db Methodes 

export default {Auth , db}