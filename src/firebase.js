import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCn2IExPcT1i5_SU3-JZBxo8NZQmphLttk',
  authDomain: 'productsproject-970c0.firebaseapp.com',
  projectId: 'productsproject-970c0',
  storageBucket: 'productsproject-970c0.appspot.com',
  messagingSenderId: '971025766016',
  appId: '1:971025766016:web:4ed42e4ae1ea224e00f865',
  databaseURL: 'https://todo-list-3ff68-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
