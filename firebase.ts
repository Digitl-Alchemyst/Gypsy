import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firbase Config
const firebaseConfig = {
  apiKey: 'AIzaSyAZQLZTQOKh_3aE84vgH4PEXBnZKZ8rhEA',
  authDomain: 'gypsygpt.firebaseapp.com',
  projectId: 'gypsygpt',
  storageBucket: 'gypsygpt.appspot.com',
  messagingSenderId: '873492937938',
  appId: '1:873492937938:web:3f591ded9eb4bbace9810b',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
