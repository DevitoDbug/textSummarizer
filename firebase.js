import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDN23ZrLYxbPrdOo98T_jAZ7uhyEDRaO1o',
  authDomain: 'textquill.firebaseapp.com',
  projectId: 'textquill',
  storageBucket: 'textquill.appspot.com',
  messagingSenderId: '992240258611',
  appId: '1:992240258611:web:055c679c70a591b0f05d46',
};

export const app = initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
