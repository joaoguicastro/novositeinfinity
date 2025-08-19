import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Seu config:
const firebaseConfig = {
  apiKey: "AIzaSyANgMSp6ZzUXglgR84TKs32oYQmdf2s1gI",
  authDomain: "infinity-leads-91abe.firebaseapp.com",
  projectId: "infinity-leads-91abe",
  storageBucket: "infinity-leads-91abe.firebasestorage.app",
  messagingSenderId: "908946575390",
  appId: "1:908946575390:web:8616ac0b68a24bacc09e0f"
};

// Inicializa App + Banco
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
