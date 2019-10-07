var seuds = ["ema" , "eca" , "arqui" , "redes" , "info" , "dise" , "meca"];

$("#filter").change(function() {
  if (document.getElementById('filter').value != -1) {
    $(".content-box").addClass("off");
    var data = document.getElementById('filter').value;
    for (var i = 0; i < seuds.length; i++) {
      if (data == i) {
        $("."+seuds[i]).removeClass("off");
        break;
      }
    }
  } else {
    $(".content-box").removeClass("off");
  }
});

function escanear() {
  window.location.href = 'qrcode.html';
}
