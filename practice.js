
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDbkF_yupPyPRfca0L4WsYVC0BT1jNbygM",
    authDomain: "kwitter-78039.firebaseapp.com",
    databaseURL: "https://kwitter-78039-default-rtdb.firebaseio.com",
    projectId: "kwitter-78039",
    storageBucket: "kwitter-78039.appspot.com",
    messagingSenderId: "863934298496",
    appId: "1:863934298496:web:69aaf0d987bb4fbd90e965",
    measurementId: "G-165CPB8FSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          color : "red"
      });
  }