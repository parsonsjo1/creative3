// Initialize Firebase
var config = {
  apiKey: "AIzaSyDXgXQGV_tlVAF_zpFAuLd4iy89NLwHE1w",
  authDomain: "chat-cb5f7.firebaseapp.com",
  databaseURL: "https://chat-cb5f7.firebaseio.com",
  storageBucket: "chat-cb5f7.appspot.com",
  messagingSenderId: "554071667943"
};
firebase.initializeApp(config);

// Define the `chatterApp` module
angular.module('chatterApp', ['messageList']);