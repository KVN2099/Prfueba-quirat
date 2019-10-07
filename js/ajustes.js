function mostrar_datos_usuario() {
  var user = firebase.auth().currentUser;
  if (user) { //  Si hay usuario loggeado
    $("#carga").addClass("off");
    $("#cerrar_sesion").removeClass("off");
    $("#container-content-user").removeClass("off");
  } else {  //  Si no hay usuario loggeado
    $("#container-content-incognito").removeClass("off");
    $("#container-content-incognito-caption").removeClass("off");
    $("#iniciar_sesion").removeClass("off");
    $("#registro").removeClass("off");
    $("#carga").addClass("off");
  }
  $("#container-content-bottom").removeClass("off");
  $(".container").removeClass("off");
}
