function paraNavidad() {
  
  var ahora = new Date();

  var anho = ahora.getFullYear();
  var mes = ahora.getMonth();
  var dia = ahora.getDate();

  if (mes < 11) {
    var navidad = new Date(anho, 11, 25);
  } else if (mes > 11) {
    var navidad = new Date(anho + 1, 11, 25);
  } else {
    if (dia < 25) {
      var navidad = new Date(anho, 11, 25);
    } else if (dia >= 25) {
      var navidad = new Date(anho + 1, 11, 25);
    }
  }
  
  var navidad = new Date(2017, 11, 25);
  var ahora = Date.now();

  var diferencia = navidad - ahora;

  var d = diferencia /1000 /60 /60 /24;
  var dias = Math.floor(d);

  var h = (d - dias) *24;
  var horas = Math.floor(h);

  var m = (h - horas) *60;
  var minutos = Math.floor(m);

  var s = (m - minutos) *60;
  var segundos = parsefloat(s).toFloat(3);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}

function iniciar() {
  setInterval(paraNavidad, 1)
}
