// Importer les fonctions nécessaires de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importer le module d'authentification

// Configuration de votre application Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQ9xlaBmd9ycJHZ8UuHf-EbfC4M60ttFM",
  authDomain: "healthsmart-35284.firebaseapp.com",
  projectId: "healthsmart-35284",
  storageBucket: "healthsmart-35284.appspot.com",
  messagingSenderId: "954769692608",
  appId: "1:954769692608:web:fc7abf18548901d581da25",
  measurementId: "G-9EELGGP4CX"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialiser l'authentification

export { auth }; // Exporter l'instance d'authentification
