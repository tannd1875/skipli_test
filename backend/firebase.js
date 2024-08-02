const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDCswcyIvt6cKi7zoifLDh4MiOKT3rQ70I",
  authDomain: "skipli-ai-58ce5.firebaseapp.com",
  projectId: "skipli-ai-58ce5",
  storageBucket: "skipli-ai-58ce5.appspot.com",
  messagingSenderId: "297031868686",
  appId: "1:297031868686:web:7dd51f949534c192aa775f",
  measurementId: "G-9BGH1RFW8J",
};

const db = initializeApp(firebaseConfig);

module.exports = db;
