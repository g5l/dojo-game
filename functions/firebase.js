// import * as firebase from 'firebase/app'
const firebase = require('firebase/app');
// import 'firebase/database'
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyB0Qj7WvtdSjvRDOjoCO_TTH9me3WCk4DA",
  authDomain: "dojo-game.firebaseapp.com",
  databaseURL: "https://dojo-game.firebaseio.com",
  projectId: "dojo-game",
  storageBucket: "dojo-game.appspot.com",
  messagingSenderId: "379671083929",
  appId: "1:379671083929:web:8eeca34988676493"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

module.exports = db;