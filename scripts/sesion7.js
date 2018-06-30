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

var operadoresLogicos={
  negacion:function(){
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
  },

  operadorAND:function(){
    var valor1 = true;
    var valor2 = false;
    resultado = valor1 && valor2; // resultado = false
    alert(resultado);
    valor1 = true;
    valor2 = true;
    resultado = valor1 && valor2; // resultado = true
    alert(resultado);
  },

  operadorOR:function(){
    var valor1 = true;
    var valor2 = false;
    resultado = valor1 || valor2; // resultado = true
     alert(resultado);
    valor1 = false;
    valor2 = false;
    resultado = valor1 || valor2; // resultado = false
    alert(resultado);
  }

};

function operadoresMatematicos (suma1, suma2, resta, multiplicacion,division){
  var sumar = suma1 + suma2;
  var restar =sumar- resta;
  var multiplicar = sumar * multiplicacion;
  var dividir = sumar/division;
  var operacionModulo = sumar %division;
  alert("SUMA " + sumar + " Resta " + restar + " multiplicacion " + multiplicar + " dividir " + dividir + " muodulo " + operacionModulo);

}
function relaciones (numero1,numero2,cadena1,cadena2){
  var mayorQue = numero1 > numero2;
  var menorQUE = numero1 < numero2;

  var mayoroIgual = numero1 >= numero2;
  var menorroIgual = numero1 <= numero2;
  var validaIgual = numero1 == numero2;
  var validasiDiferente = numero1 != numero2;
  alert("Valida dos numeros " + numero1 + "  " + numero2 + "\n mayorQue "
        + mayorQue + " menorQUE " + menorQUE + " mayoroIgual " + mayoroIgual
       + " validaIgual " + validaIgual + " validasiDiferente " + validasiDiferente);
  relacionesCadenas(cadena1,cadena2);
}

//FUncion encargada de realizar comprobaciones de realcionales sobre cadenas
//cadena1 String a comparar
//cadena2 String a comparar
function relacionesCadenas(cadena1, cadena2) {
  var compararCadena = cadena1 == cadena2;
  var diferente = cadena1 != cadena2;
  var mayor = cadena1 >= cadena2;
  alert("Igual " + compararCadena + " diferente  " + diferente + "\n mayor "
        + mayor );
}

function mayorEdad(){
  var edad =   document.getElementById('txtTexto').value;
  if(edad >=18){
     alert("Eres mayor de edad" );
   }
  else{
    alert("No Eres mayor de edad" );
  }
}

function clasificarEDAD(){
  var edad = document.getElementById('txtTexto').value;
  if(edad < 12) {
    alert("Todavía eres muy pequeño");
  }
  else if(edad < 19) {
    alert("Eres un adolescente");
  }
  else if(edad < 35) {
    alert("Aun sigues siendo joven");
  }
  else {
    alert("Piensa en cuidarte un poco más");
  }

}

function potenciacion(){
  var base =   document.getElementById('txtBase').value;
  var exponete =   document.getElementById('txtExponente').value;
  var resultado = base;
  for(var i = 1; i < exponete; i++) {
      resultado = resultado * base;
  }
  document.getElementById('txtResultado').value = resultado;
}

function obtenerDias(){
  var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  for(dia in dias) {
    alert(dias[dia]);
  }
}
