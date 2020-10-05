//Lista de variables de los inputs y divs
var nombre = document.forms['vform']['firstname'];
var apellido = document.forms['vform']['lastname'];
var correo = document.forms['vform']['Correo'];
var edad = document.forms['vform']['Edad'];
var dui = document.forms['vform']['dui'];
var nit = document.forms['vform']['nit'];
var telefono = document.forms['vform']['numero'];
var fecha = document.forms['vform']['fecha'];



$("#btnEnviar").click(function () {

    if (nombre.value != "" && apellido.value != "" && correo.value != "" && edad.value != "" && dui.value != "" && nit.value != "" && telefono.value != "" && fecha.value) {
        console.log("if swwet entro");
        Swal.fire({
            icon: 'success',
            title: 'Bien hecho!',
            text: 'Los datos fueron guardados con exito!'
        });
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        edad.value = "";
        dui.value = "";
        nit.value = "";
        telefono.value = "";
        fecha.value = "";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al procesar la información!'
        });
    }
});
