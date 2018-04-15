//Declaracion de variables
var encontrar = [];
var contp = 0;
var cadena = ""
var array2 = [];
//Numero aleatorio
var myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var nuevo = myArray.sort(function() {
  return Math.random() - 0.5
});

for (i = 0; i < 4; i++) {
  array2[i] = nuevo[i]
  cadena = cadena + nuevo[i];
}
console.log(cadena);

function picas(numArray) {
  array2.map(function(x) {
    if ((x == numArray) && (encontrar.includes(x) == false)) {
      encontrar.push(x);
      contp += 1;
    }
  });
  return contp;
};

function fijas(numArray) {
  var cont = 0;
  for (i = 0; i < 4; i++) {
    if (array2[i] == numArray[i]) {
      cont += 1;
    } else {
      picas(numArray[i])
    }
  }
  return cont;
};

$('#search_field').keypress(function(e) {
  $("#digitos").css('color', 'black')
  $("#search_field").css('background-color', 'white')
  $("#search_field").css('color', 'black')
  if (e.which == 13) {
    var num = $("#search_field").val();
    var numArray = num.split("");
    var repetidos = 0;
    numArray.map(function(x) {
      for (i = 0; i < 4; i++) {
        if (x == numArray[i]) {
          repetidos += 1;
        };
      }
    });
    if ((num.length != 4) || (repetidos > 4)) {
      $("#digitos").css('color', 'red')
      $("#search_field").css('background-color', '#F6CECE')
      $("#search_field").css('color', 'red')
    } else {
      var numPicas = 0
      var numFijas = 0
      numFijas = fijas(numArray);
      numPicas = contp;
      if (numFijas == 4) {
        swal("GANASTE!", "Has click  en 'OK' para volver a jugar", "success").then((value) => {
          (location.reload())
        });
      }
      //debugger
      $("#tabla").append("<tr><td>" + num + "</td><td>" + numPicas + "</td><td>" + numFijas + "</td></tr>")
      contp = 0;
      encontrar = [];
    }
  }

});
