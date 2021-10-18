// Import the functions you need from the SDKs you need
import app from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAU0C4jkkcn8BJzRVzzUuEg9n0-W5p-Wd4",
  authDomain: "first-firebase-project-d3f70.firebaseapp.com",
  projectId: "first-firebase-project-d3f70",
  storageBucket: "first-firebase-project-d3f70.appspot.com",
  messagingSenderId: "829777211490",
  appId: "1:829777211490:web:e1f9034edfb0618f38213b",
  measurementId: "G-XY1C1XKCGK"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAU0C4jkkcn8BJzRVzzUuEg9n0-W5p-Wd4",
//   authDomain: "first-firebase-project-d3f70.firebaseapp.com",
//   projectId: "first-firebase-project-d3f70",
//   storageBucket: "first-firebase-project-d3f70.appspot.com",
//   messagingSenderId: "829777211490",
//   appId: "1:829777211490:web:e1f9034edfb0618f38213b",
//   measurementId: "G-XY1C1XKCGK"
// };

// Initialize Firebase
// const app = initializeApp(config);
// const analytics = getAnalytics(app);

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}


export default Firebase;