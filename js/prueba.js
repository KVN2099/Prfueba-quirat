var firebaseConfig = {
  apiKey: "AIzaSyBQr4apTtwzkj0JoE9BETfPIbgiUDGh2tI",
  authDomain: "quirat-1c621.firebaseapp.com",
  databaseURL: "https://quirat-1c621.firebaseio.com",
  projectId: "quirat-1c621",
  storageBucket: "",
  messagingSenderId: "570172948637",
  appId: "1:570172948637:web:3fdb58674170c0f7"
};

var user;
var login = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $("#carga").addClass("off");
    /*  Ajustes  */
    $("#carga").addClass("off");
    $("#cerrar_sesion").removeClass("off");
    $("#container-content-user").removeClass("off");
    $(".container_logros").removeClass("off");
  } else {
    /*  Ajustes  */
    $("#container-content-incognito").removeClass("off");
    $("#container-content-incognito-caption").removeClass("off");
    $("#iniciar_sesion").removeClass("off");
    $("#registro").removeClass("off");
    $("#carga").addClass("off");
    $("#not_found").removeClass("off");
    $("#container-content-incognito").removeClass("off");
  }
  $(".container_ajustes").removeClass("off");
  $("#container-content-bottom").removeClass("off");
  if (login) {
    window.location.href = 'index.html';
  }
});

function iniciar_sesion() {
  var userName = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userName, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });
  login = true;
}

function register() {
  var userName = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(userName, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
});
}

function logout() {
  firebase.auth().signOut().then(function() {
}).catch(function(error) {
  alert("Error: "+error);
});
window.location.href = 'index.html';
user = false;
}
