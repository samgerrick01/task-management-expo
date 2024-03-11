import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ6rpHq33-mxZ9M0Br64P07UvLVNzNoJ8',
  authDomain: 'taskmanagement-df13d.firebaseapp.com',
  databaseURL:
    'https://taskmanagement-df13d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'taskmanagement-df13d',
  storageBucket: 'taskmanagement-df13d.appspot.com',
  messagingSenderId: '122169327959',
  appId: '1:122169327959:web:4235e6f1ab9c883e7b3e12',
};

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
getFirestore(app);

export default app;
