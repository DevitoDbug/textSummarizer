import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDN23ZrLYxbPrdOo98T_jAZ7uhyEDRaO1o',
  authDomain: 'textquill.firebaseapp.com',
  projectId: 'textquill',
  storageBucket: 'textquill.appspot.com',
  messagingSenderId: '992240258611',
  appId: '1:992240258611:web:055c679c70a591b0f05d46',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
