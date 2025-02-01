import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Assuming you have firebase config

let unsubscribe;

const authStateChanged = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log('User is signed in:', uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

const cleanup = () => {
  if(unsubscribe) {
    unsubscribe();
    console.log('Unsubscribed from auth state changes')
  }
};

export { authStateChanged, cleanup };