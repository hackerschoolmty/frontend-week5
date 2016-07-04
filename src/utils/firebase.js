import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDK0pRgiZslf40PA_F-GpMmqt2KO326Utk",
  databaseURL: "https://chat-test-d5844.firebaseio.com"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();

export default firebaseDB;
