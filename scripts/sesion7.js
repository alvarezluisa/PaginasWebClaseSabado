document.getElementById("idMensaje").innerHTML = "Primer Parrafo!";

function cambiarTexto(){
  document.getElementById("idMensaje").innerHTML = "Mirame!";

}

function cambiarStyle(){
  document.getElementById("idMensaje").style.fontSize = "45px";
}

function sumarRestar(suma){
  //Realizamos una suma
  var arregloNumero=[5,2];
  var resultado = arregloNumero[0] + arregloNumero [1];
  alert ("Suma"+ resultado);
}

function sumaYResta(){
  var resultado = 5;
  resultado++;
  alert(resultado);
  resultado--;
  alert(resultado);
}

function negacion(){
  var visible = true;
  alert(!visible);  // Muestra "false" y no "true"
  var cantidad = 0; // 0 es falso 1 true
  var resultado = !cantidad;  // resultado = true
  alert(resultado);
  cantidad = 2;
  resultado = !cantidad;  // resultado = false
  alert(resultado);
  var mensaje = "";
  resultado = !mensaje;  // resultado = true
  alert(resultado);
}

function  operadorAND(){
  var valor1 = true;
  var valor2 = false;
  resultado = valor1 && valor2; // resultado = false
  alert(resultado);
  valor1 = true;
  valor2 = true;
  resultado = valor1 && valor2; // resultado = true
  alert(resultado);
}

function operadorOR(){
  var valor1 = true;
  var valor2 = false;
  resultado = valor1 || valor2; // resultado = true
   alert(resultado);
  valor1 = false;
  valor2 = false;
  resultado = valor1 || valor2; // resultado = false
  alert(resultado);

}
