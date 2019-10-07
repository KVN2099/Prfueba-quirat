var firebaseConfig = {
  apiKey: "AIzaSyBQr4apTtwzkj0JoE9BETfPIbgiUDGh2tI",
  authDomain: "quirat-1c621.firebaseapp.com",
  databaseURL: "https://quirat-1c621.firebaseio.com",
  projectId: "quirat-1c621",
  storageBucket: "",
  messagingSenderId: "570172948637",
  appId: "1:570172948637:web:3fdb58674170c0f7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//  Instascan
  const scanner = new Instascan.Scanner(
      {
          video: document.getElementById('webcam')
      }
  );

  scanner.addListener('scan', content => {  //  contenido del qr (objeto JSON)
      // alert(content);
      // procesoDeLogro(content);
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        procesoDeLogro(content);
      } else {
        alert("Por favor, inicie sesion");
        return 0;
      }
  });
});
  Instascan.Camera.getCameras().then(cameras =>
  {
      if(cameras.length > 0){
          scanner.start(cameras[0]);
      } else {
          console.error("Please enable Camera!");
      }
  });


  function regresar() {
    window.location.href = 'index.html';
  }
