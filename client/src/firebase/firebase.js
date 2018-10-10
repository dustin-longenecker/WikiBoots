import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDwtTD7ZPYgcABAdOrb2ITm7tG_4xyEoDw",
  authDomain: "auth-f360d.firebaseapp.com",
  databaseURL: "https://auth-f360d.firebaseio.com",
  projectId: "auth-f360d",
  storageBucket: '',
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
};

// const devConfig = {
//   apiKey: "AIzaSyDwtTD7ZPYgcABAdOrb2ITm7tG_4xyEoDw",
//   authDomain: "localhost",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "auth-f360d",
//   storageBucket: '',
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// };
//
// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
