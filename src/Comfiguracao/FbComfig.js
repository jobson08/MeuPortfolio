import firebase from'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBim2O2RxYYh8USZPa71N-1uOewQQ8vvGY",
    authDomain: "projetodivulgar-55b49.firebaseapp.com",
    databaseURL: "https://projetodivulgar-55b49.firebaseio.com",
    projectId: "projetodivulgar-55b49",
    storageBucket: "projetodivulgar-55b49.appspot.com",
    messagingSenderId: "167870972202"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
