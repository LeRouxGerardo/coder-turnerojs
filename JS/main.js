let turno = null
let usuarios =[]

class Paciente{
    constructor(nombre, apellido, dni, numcontacto, mailContacto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni= dni;
        this.numcontacto = numcontacto;
        this.mailContacto = mailContacto;

    }
}
function inicioBienvenida(){
    
    const menu = "Elige una opcion: \n1- Ya soy paciente\n2- Soy paciente nuevo\n3- Salir";

    let opcion = prompt(menu);
 
    switch (opcion) {

        case '1':
            inicioSesion();
            break;
        case '2':
            registroNuevo();
            break;
        case '3':
            break;    
        default:
            alert("Opción no válida");
            inicioBienvenida();
    }
}
   
function validarContraseña(usuarioRegistrado, contraseñaUsuario) {


    while(usuarioRegistrado.dni !== contraseñaUsuario){
        alert ("Contraseña Incorrecta.  ***Recuerde que su Contraseña de acceso es su DNI ***")
        contraseñaUsuario = prompt ("Contraseña  ***Recuerde que su Contraseña de acceso es su DNI ***");
    }
    
        alert("inicio de sesión exitoso - ... Ingresando...")
        
    }


function validarUsuario(){
    let nombreUsuario = prompt("Nombre de Usuario ***Recuerde que su Usuario es su mail ***");

    const usuarioRegistrado = usuarios.find((usuario) => usuario.mailContacto.toLowerCase() === nombreUsuario.toLowerCase());

    if(usuarioRegistrado) {
            let contraseñaUsuario = prompt ("Contraseña  ***Recuerde que su Contraseña de acceso es su DNI ***");
            validarContraseña(usuarioRegistrado, contraseñaUsuario);
    }
    else{
        alert("Usuario no encontrado. Ingrese por la opción 'Soy paciente nuevo' para registrarse")
        inicioBienvenida()
    }


}


    



function inicioSesion(){
    
    validarUsuario()
    
    
}


function ingresarDni () {
    let nuevoDni=  prompt ("Ingrese su dni (sin puntos)") ;
    if(validarDni(nuevoDni)){
        return nuevoDni;
    }
    else{
        return ingresarDni();
    }
}
function validarDni (DNI) {

    if (DNI > 1000000 && DNI < 100000000) {
    return true
    }
    else{
    alert("DNI no válido, Recuerde ingresar solo números sin puntos");
    return false    
}
}

function ingresarCelular () {
    let numeroContacto = prompt ("Ingrese su número de Contacto sin 0 y sin 15");
    if(validarCelular(numeroContacto)){
        return numeroContacto;
    }
    else{
        return ingresarCelular();
    }
}

function validarCelular(celular) {

    if (celular > 1000000000 && celular < 9999999999) {
        return true
    }
    else{
        alert("Celular no válido, Recuerde ingresar su número de Contacto sin 0 y sin 15");
        return false
    }
}




function usuarioCreado() {
    
    alert("¡Registro completo! Ya puedes iniciar sesión. Tu usuario es tu mail  y tu contraseña es tu DNI");
  
}

function confirmaMail() {

    let codigo = confirm("Ingresar código de verificación.");
    /*el confirm es solo para simular que el usuario recibe el código de verificación por mail y lo ingresa*/
    if (codigo) {
        usuarioCreado();
    }
    else {
        alert("Es necesario confirmar el mail para continuar");
        confirmaMail()
    } 
    
}




function registroNuevo(){
    alert("Te vamos a pedir unos datos para continuar")
let nuevoNombre = prompt ("Ingrese su nombre");
let nuevoApellido = prompt ("Ingrese su apellido");

let nuevoDni = ingresarDni();

let numeroContacto = ingresarCelular(); 

let mailContacto = prompt ("Ingrese Mail de Contacto");

alert("Recibira un código de verificación en su mail, por favor revise su mail para continuar.");

confirmaMail();

const nuevoPaciente = new Paciente(
    nuevoNombre,
    nuevoApellido,
    nuevoDni,
    numeroContacto,
    mailContacto
  );
  usuarios.push(nuevoPaciente);

  console.log(nuevoPaciente)
  console.log(usuarios)
inicioBienvenida();
}




/* alert("Bienvenidos al Kinesia Online");
inicioBienvenida(); */


document.querySelector("#inicioSesion").addEventListener('click', () => {
    inicioSesion()

    div4.style.display = 'none';
    div5.style.display = 'flex';
    div6.style.display = 'flex';
})

document.querySelector("#registroNuevo").addEventListener('click', () => {
    registroNuevo()
    div3.style.display = 'none';
    div5.style.display = 'flex';
    div6.style.display = 'flex';
})
const div3 = document.querySelector('.div3')
const div4 = document.querySelector('.div4')
const div5 = document.querySelector('.div5')
const div6 = document.querySelector('.div6')