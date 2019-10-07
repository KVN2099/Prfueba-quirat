var usuario;  //  Variable global con el nombre del usuario
var codigo = "";
var sesion = false;
var i = parseInt(0);
var ref;
var database;
var ref_proyectos;
var clas_especialidad = ["ema" , "eca" , "arqui" , "info" , "dise" , "meca"];
var clas_tematica = ["ciencia","ayuda_social","tecnologia","educacion","ecologia","salud","infrastructura"];
var dir_decimo;  //  Variable con la direccion de la especialidad del proyecto
var dir_undecimo;  //  Variable con la direccion de la especialidad del proyecto
var datos;

class Logros {
  constructor() {
    this.tematicas = {
      "ciencia" : 0,
      "ayuda_social" : 0,
      "tecnologia" : 0,
      "educacion" : 0,
      "ecologia" : 0,
      "salud" : 0,
      "infrastructura" : 0
    };

    this.grados = {
      "decimo" : 0,
      "undecimo" : 0
    };

    this.especialidades = {
      "ema" : 0,
      "eca" : 0,
      "arqui" : 0,
      "info" : 0,
      "dise" : 0,
      "meca" : 0,
    };

    this.gemas = {
      "roja" : 0,
      "azul" : 0,
      "blanca" : 0,
      "negra" : 0,
      "turquesa" : 0
    };

    this.vector_logros = [];
  }
}

function procesoDeLogro(contenido) {
  //  Primero verificar si hay ussuario loggeado
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    sesion = true;
    var direccionDB = '';
    var id = user.uid;
    usuario = user.uid;
    database = firebase.database();
    direccionDB = id + '/';
    //  Sintetizar la direccion en Firebase
    var prueba = {
      "tematicas" : {
        "ciencia" : 0,
        "ayuda_social" : 0,
        "tecnologia" : 0,
        "educacion" : 0,
        "ecologia" : 0,
        "salud" : 0,
        "infrastructura" : 0
      },
      "grados" : {
        "decimo" : 0,
        "undecimo" : 0
      },
      "especialidades" : {
        "ema" : 0,
        "eca" : 0,
        "arqui" : 0,
        "info" : 0,
        "dise" : 0,
        "meca" : 0,
      },
      "gemas" : {
        "roja" : 0,
        "azul" : 0,
        "blanca" : 0,
        "negra" : 0,
        "turquesa" : 0
      }
    };
    molde = prueba;
    ref = database.ref('Logros Usuarios' + '/' + usuario);  //  usuario es el ID del ussuario
    // ref.set(prueba);
    codigo = contenido.split(",");
    ref.on('value', obtained, error);
    //  *** GRADO ***

  }
});

}

var stop = false;

function obtained(data) {
  if (stop) { //  Antes de detener la funcion
    return 0;
  }
  stop = true;
  var direccion = ref;
  var logros = data.val();  //  EL IMPORTANTE
  console.log(logros);
  for (var i = 0; i < codigo.length; i++) {
    codigo[i] = parseInt(codigo[i]);
  }
  console.log(codigo);  //  Vector del QR
  console.log(logros);
  // // //  Aumenta segun el grado
  if (codigo[0] == 4) {
    logros.grados.decimo++;
    if (codigo[1] == 0) {
      logros.especialidades.ema++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Electromecánica');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 1) {
      logros.especialidades.eca++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Electrónica');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 2) {
      logros.especialidades.arqui++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Dibujo Arquitectónico');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 3) {
      logros.especialidades.info++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Informática');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 4) {
      logros.especialidades.dise++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Diseño Gráfico');
      dir_decimo.on('value' , definicion , error);
    } else {
      logros.especialidades.meca++;
      dir_decimo = database.ref('Proyectos/decimo/especialidades/Mecánica de Precisión');
      dir_decimo.on('value' , definicion , error);
    }
  } else {
    logros.grados.undecimo++;
    if (codigo[1] == 0) {
      logros.especialidades.ema++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Electromecánica');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 1) {
      logros.especialidades.eca++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Electrónica');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 2) {
      logros.especialidades.arqui++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Dibujo Arquitectónico');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 3) {
      logros.especialidades.info++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Informática');
      dir_decimo.on('value' , definicion , error);
    } else if (codigo[1] == 4) {
      logros.especialidades.dise++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Diseño Gráfico');
      dir_decimo.on('value' , definicion , error);
    } else {
      logros.especialidades.meca++;
      dir_decimo = database.ref('Proyectos/undecimo/especialidades/Mecánica de Precisión');
      dir_decimo.on('value' , definicion , error);
    }
  }

  // // //  Aumenta segun la especialidad


  // // //  Aumenta segun la tematica
  if (codigo[2] == 0) {
    logros.tematicas.ciencia++;
  } else if (codigo[2] == 1) {
    logros.tematicas.ayuda_social++;
  } else if (codigo[2] == 2) {
    logros.tematicas.tecnologia++;
  } else if (codigo[2] == 3) {
    logros.tematicas.educacion++;
  } else if (codigo[2] == 4) {
    logros.tematicas.ecologia++;
  } else if (codigo[2] == 5) {
    logros.tematicas.salud++;
  } else {
    logros.tematicas.infrastructura++;
    }
  console.log(logros);
  // direccion.set(logros);
  /*  Definir las direcciones de las especialidades  */
  chequear(direccion , logros);
} //  function obtained

function error(err) {
  alert(err);
}

function definicion(data) {
  datos = data.val();
  console.log(datos);
}

function chequear(direccion, logros) {
  console.log(direccion);
  console.log(logros);
  /*  Informatica   */
  if (logros.especialidades.info >= 3 && (logros.vector_logros[0] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[0] = true;
  }

  if (logros.especialidades.info >= 5 && (logros.vector_logros[1] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[1] = true;
  }

  if (logros.especialidades.info >= 10 && (logros.vector_logros[2] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[2] = true;
  }

  if (logros.especialidades.info == datos && (logros.vector_logros[3] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[3] = true;
  }

  /*  Eca  */
  if (logros.especialidades.eca >= 3 && (logros.vector_logros[4] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[4] = true;
  }

  if (logros.especialidades.eca >= 5 && (logros.vector_logros[5] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[5] = true;
  }

  if (logros.especialidades.eca >= 10 && (logros.vector_logros[6] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[6] = true;
  }

  if (logros.especialidades.eca == datos && (logros.vector_logros[7] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[7] = true;
  }

  /*  Meca  */
  if (logros.especialidades.meca >= 3 && (logros.vector_logros[8] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[8] = true;
  }

  if (logros.especialidades.meca >= 5 && (logros.vector_logros[9] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[9] = true;
  }

  if (logros.especialidades.meca >= 10 && (logros.vector_logros[10] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[10] = true;
  }

  if (logros.especialidades.meca == datos && (logros.vector_logros[11] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[11] = true;
  }

  /*  Arqui  */
  if (logros.especialidades.arqui >= 3 && (logros.vector_logros[12] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[12] = true;
  }

  if (logros.especialidades.arqui >= 5 && (logros.vector_logros[13] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[13] = true;
  }

  if (logros.especialidades.arqui >= 10 && (logros.vector_logros[14] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[14] = true;
  }

  if (logros.especialidades.arqui == datos && (logros.vector_logros[15] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[15] = true;
  }

  /*  Dise  */
  if (logros.especialidades.dise >= 3 && (logros.vector_logros[16] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[16] = true;
  }

  if (logros.especialidades.dise >= 5 && (logros.vector_logros[17] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[17] = true;
  }

  if (logros.especialidades.dise >= 10 && (logros.vector_logros[18] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[18] = true;
  }

  if (logros.especialidades.dise == datos && (logros.vector_logros[19] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[19] = true;
  }

  /*  Ema  */
  if (logros.especialidades.ema >= 3 && (logros.vector_logros[20] == 0)) {
    logros.gemas.negra++;
    logros.vector_logros[20] = true;
  }

  if (logros.especialidades.ema >= 5 && (logros.vector_logros[21] == 0)) {
    logros.gemas.turquesa++;
    logros.vector_logros[21] = true;
  }

  if (logros.especialidades.ema >= 10 && (logros.vector_logros[22] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[22] = true;
  }

  if (logros.especialidades.ema == datos && (logros.vector_logros[23] == 0)) {
    logros.gemas.blanca++;
    logros.vector_logros[23] = true;
  }
  console.log(logros);
  ref.set(logros);
  $("video")[0].pause();
  $("#regresar_previo").addClass('off');
  $("#alert").removeClass('off');

}
