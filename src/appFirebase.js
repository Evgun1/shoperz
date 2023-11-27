// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCCMena_pvGh-8c76aLShlzKa_sf3F3kIs',
    authDomain: 'shopez-53fe0.firebaseapp.com',
    databaseURL:
        'https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'shopez-53fe0',
    storageBucket: 'shopez-53fe0.appspot.com',
    messagingSenderId: '314152683790',
    appId: '1:314152683790:web:d221aa296c2a629b78ef5f',
};

// Initialize Firebase
export default initializeApp(firebaseConfig);
