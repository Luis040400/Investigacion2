//Tooltip
tippy('#fname', {
  content: 'Introducir el nombre',
});

tippy('#lname', {
  content: 'Introducir el apellido',
});
tippy('#correo', {
  content: 'Introducir el correo electronico "usuario@mail.com"',
});
tippy('#dui', {
  content: 'Introducir el numero de dui',
});
tippy('#edad', {
  content: 'Introducir edad',
});
tippy('#numero', {
  content: 'Introducir el numero de telefono con formato "0000-0000"',
});
tippy('#nit', {
  content: 'Introducir el numero de NIT con formato "0000-000000-000-0"',
});
tippy('#fecha', {
  content: 'Introduzca su fecha de nacimiento "dd/mm/aaaa"',
});

//Lista de variables de los inputs y divs
var nombre = document.forms['vform']['firstname'];
var nombre_error = document.getElementById('nombre_error');
var apellido = document.forms['vform']['lastname'];
var apellido_error = document.getElementById('apellido_error');
var correo = document.forms['vform']['Correo'];
var correo_error = document.getElementById('correo_error');
var edad = document.forms['vform']['Edad'];
var edad_error = document.getElementById('edad_error');
var dui = document.forms['vform']['dui'];
var dui_error = document.getElementById('dui_error');
var nit = document.forms['vform']['nit'];
var nit_error = document.getElementById('nit_error');
var telefono = document.forms['vform']['numero'];
var telefono_error = document.getElementById('numero_error');
var fecha = document.forms['vform']['fecha'];
var fecha_error = document.getElementById('fecha_error');


//Objeto con las expresiones regulares
const expresiones = {
  Vnombre: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
  Vapellido: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
  Vcorreo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  Vedad: /^([0-9])*$/,
  Vdui: /^\d{8}-\d{1}$/,
  Vnit: /^\d{4}-\d{6}-\d{3}-\d{1}$/,
  Vtelefono: /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})/,
  Vfecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
}

///////********Aqui se validan cuando los campos tienen errores primero ************///////////
//Funcion para validar los campos
function ValidarName() {
  //validar campo nombre no este vacio
  if (nombre.value == "") {
    console.log("Campo vacio nombre");
    nombre.style.border = "1px solid red";
    document.getElementById('nombre_div').style.color = "red";
    nombre_error.textContent = "No puede dejar campo vacio";
    //nombre.focus();
    return false;
  } else if (!nombre.value.match(expresiones.Vnombre)) {
    console.log("Error regex nombre");
    nombre.style.border = "1px solid red";
    document.getElementById('nombre_div').style.color = "red";
    nombre_error.textContent = "El nombre debe contener solo letras";
    //nombre.focus();
    return false;
  }

}

function ValidarLastname() {
  //Validando div apellido
  //validar campo apellido no este vacio
  if (apellido.value == "") {
    console.log("Campo vacio apellido");
    apellido.style.border = "1px solid red";
    document.getElementById('apellido_div').style.color = "red";
    apellido_error.textContent = "No puede dejar campo vacio";
    //apellido.focus();
    return false;
  }

  //validar campo apellido que tenga solo letras
  if (!apellido.value.match(expresiones.Vapellido)) {
    console.log("Error regex apellido");
    apellido.style.border = "1px solid red";
    document.getElementById('apellido_div').style.color = "red";
    apellido_error.textContent = "El apellido debe contener solo letras";
    //apellido.focus();
    return false;
  }

}

function ValidarEmail() {
  ///Validando div correo
  //validar campo correo no este vacio
  if (correo.value == "") {
    console.log("Campo vacio email");
    correo.style.border = "1px solid red";
    document.getElementById('correo_id').style.color = "red";
    correo_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo correo que tenga solo letras
  if (!correo.value.match(expresiones.Vcorreo)) {
    console.log("Error regex email");
    correo.style.border = "1px solid red";
    document.getElementById('correo_id').style.color = "red";
    correo_error.textContent = "Ingrese el formato correcto de un correo";
    return false;
  }

}

function ValidarAge() {
  //Validando div edad
  //validar campo edad no este vacio
  if (edad.value == "") {
    console.log("Campo vacio edad");
    edad.style.border = "1px solid red";
    document.getElementById('edad_div').style.color = "red";
    edad_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo edad que tenga solo numeros
  if (!edad.value.match(expresiones.Vedad)) {
    console.log("Error regex edad");
    edad.style.border = "1px solid red";
    document.getElementById('edad_div').style.color = "red";
    edad_error.textContent = "La edad solo pueden ser números";
    return false;
  }
}

function ValidarDui() {
  //Validando div dui
  //validar campo dui no este vacio
  if (dui.value == "") {
    console.log("Campo vacio dui");
    dui.style.border = "1px solid red";
    document.getElementById('dui_div').style.color = "red";
    dui_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo dui tenga formato correcto
  if (!dui.value.match(expresiones.Vdui)) {
    console.log("Error regex dui");
    dui.style.border = "1px solid red";
    document.getElementById('dui_div').style.color = "red";
    dui_error.textContent = "Ingrese el formato correcto de un dui: 00000000-0";
    return false;
  }
}

function ValidarNit() {
  //Validando div nit
  //validar campo nit no este vacio
  if (nit.value == "") {
    console.log("Campo vacio nit");
    nit.style.border = "1px solid red";
    document.getElementById('nit_div').style.color = "red";
    nit_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo nit tenga formato correcto
  if (!nit.value.match(expresiones.Vnit)) {
    console.log("Error regex nit");
    nit.style.border = "1px solid red";
    document.getElementById('nit_div').style.color = "red";
    nit_error.textContent = "Ingrese el formato correcto de un nit: 0000-000000-000-0";
    return false;
  }

}

function ValidarPhone() {
  //Validando div telefono
  //validar campo telefono no este vacio
  if (telefono.value == "") {
    console.log("Campo vacio telefono");
    telefono.style.border = "1px solid red";
    document.getElementById('numero_div').style.color = "red";
    telefono_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo telefono tenga formato correcto
  if (!telefono.value.match(expresiones.Vtelefono)) {
    console.log("Error regex telefono");
    telefono.style.border = "1px solid red";
    document.getElementById('numero_div').style.color = "red";
    telefono_error.textContent = "Ingrese el formato correcto del telefono: 0000-0000 ó 00000000";
    return false;
  }
}

function ValidarDate() {
  //Validando div fecha de nacimiento
  //validar campo fecha de nacimiento no este vacio
  if (fecha.value == "") {
    console.log("Campo vacio fecha");
    fecha.style.border = "1px solid red";
    document.getElementById('fecha_div').style.color = "red";
    fecha_error.textContent = "No puede dejar campo vacio";
    return false;
  }

  //validar campo fecha de nacimiento tenga formato correcto
  if (!fecha.value.match(expresiones.Vfecha)) {
    console.log("Error regex fecha");
    fecha.style.border = "1px solid red";
    document.getElementById('fecha_div').style.color = "red";
    fecha_error.textContent = "Ingrese el formato correcto fecha de nacimiento: dd/mm/aaaa";
    return false;
  }
}


///////********Aqui se validan cuando los campos tienen estan correctos ************///////////
//Funciones cuando no hay errores en los campos
function validarnombre() {
  if (nombre.value != "" && nombre.value.match(expresiones.Vnombre)) {
    console.log("Correcto nombre");
    nombre.style.border = "1px solid #5e6e66";
    document.getElementById('nombre_div').style.color = "#5e6e66";
    nombre_error.innerHTML = "";
    return true;
  }
}

function validarApellido() {
  if (apellido.value != "" && apellido.value.match(expresiones.Vapellido)) {
    console.log("Correcto apellido");
    apellido.style.border = "1px solid #5e6e66";
    document.getElementById('apellido_div').style.color = "#5e6e66";
    apellido_error.innerHTML = "";
    return true;
  }
}

function validarCorreo() {
  if (correo.value != "" && correo.value.match(expresiones.Vcorreo)) {
    console.log("Correcto email");
    correo.style.border = "1px solid #5e6e66";
    document.getElementById('correo_id').style.color = "#5e6e66";
    correo_error.innerHTML = "";
    return true;
  }
}

function validarEdad() {
  if (edad.value != "" && edad.value.match(expresiones.Vedad)) {
    console.log("Correcto edad");
    edad.style.border = "1px solid #5e6e66";
    document.getElementById('edad_div').style.color = "#5e6e66";
    edad_error.innerHTML = "";
    return true;
  }
}

function validarDocumento() {
  if (dui.value != "" && dui.value.match(expresiones.Vdui)) {
    console.log("Correcto dui");
    dui.style.border = "1px solid #5e6e66";
    document.getElementById('dui_div').style.color = "#5e6e66";
    dui_error.innerHTML = "";
    return true;
  }
}

function validarDocumNit() {
  if (nit.value != "" && nit.value.match(expresiones.Vnit)) {
    console.log("Correcto nit");
    nit.style.border = "1px solid #5e6e66";
    document.getElementById('nit_div').style.color = "#5e6e66";
    nit_error.innerHTML = "";
    return true;
  }
}

function validarTelefono() {
  if (telefono.value != "" && telefono.value.match(expresiones.Vtelefono)) {
    console.log("Correcto telefono");
    telefono.style.border = "1px solid #5e6e66";
    document.getElementById('numero_div').style.color = "#5e6e66";
    telefono_error.innerHTML = "";
    return true;
  }
}

function validarFecha() {
  if (fecha.value != "" && fecha.value.match(expresiones.Vfecha)) {
    console.log("Correcto fecha");
    fecha.style.border = "1px solid #5e6e66";
    document.getElementById('fecha_div').style.color = "#5e6e66";
    fecha_error.innerHTML = "";
    return true;
  }
}


///////******** Se llaman a las dos funciones para ejecutarse ************///////////
//Funciones para ejecutar en el HTML
function funcNombre() {
  ValidarName();
  validarnombre();
}

function funcApellido() {
  ValidarLastname();
  validarApellido();
}

function funcCorreo() {
  ValidarEmail();
  validarCorreo();
}

function funcEdad() {
  ValidarAge();
  validarEdad();
}

function funcDui() {
  ValidarDui();
  validarDocumento();
}

function funcNit() {
  ValidarNit();
  validarDocumNit();
}

function funcTelefono() {
  ValidarPhone();
  validarTelefono();
}

function funcFecha() {
  ValidarDate();
  validarFecha();
}

function limpiar() {
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  edad.value = "";
  dui.value = "";
  nit.value = "";
  telefono.value = "";
  fecha.value = "";
}