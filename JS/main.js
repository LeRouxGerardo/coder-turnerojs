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



function validarUsuario() {
    const mailUsuario = document.getElementById("mailUsuario").value;
    const contraseñaUsuario = document.getElementById("passUsuario").value;

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioRegistrado = usuariosGuardados.find((usuario) => usuario.mailContacto.toLowerCase() === mailUsuario.toLowerCase());


    
    

    if (usuarioRegistrado) {
        const dniUsuario = parseInt(contraseñaUsuario, 10);
        if (usuarioRegistrado.dni !== dniUsuario) {
            Swal.fire({
                icon: 'error',
                title: 'Error en ingreso',
                text: 'Usuario o Contraseña incorrecto',
                footer: '<a href="../">¿Primera vez? ¡Proba registrarte!</a>'
            })


        } else {
            redireccionCarga.style.display = "grid";
            inicio.style.display = 'none'; 

        }
    } else {

        Swal.fire({
            icon: 'error',
            title: 'Error en ingreso',
            text: 'Usuario o Contraseña incorrecto',
            footer: '<a href="../">¿Primera vez? ¡Proba registrarte!</a>'
        })
    }
}



function usuarioCreado() {
    
    registroCorrecto.style.display = 'grid';  
    enviaMail.style.display = 'none';
    simulaCodigo.style.display = 'none';
    
    volverInicio.addEventListener('click', () => {
        registroCorrecto.style.display = 'none';
        inicioPortada.style.display = 'flex';
        registroPortada.style.display = 'flex';
    })
}


function confirmaMail() {

    
    const formRegistro = document.querySelector(".formRegistro");
    const simulaCodigo = document.querySelector("#simulaCodigo");
    
    formRegistro.style.display = 'none';
    enviaMail.style.display = 'block';
    
    
    if (simulaCodigo) {
        simulaCodigo.style.display = 'block';
        simulaCodigo.addEventListener('click', () => {
            usuarioCreado();
        });
        
    } 
}


function registroNuevo(){
let nuevoNombre = document.getElementById("nombreUsuario").value;
let nuevoApellido = document.getElementById("apellidoUsuario").value;
let nuevoDni =  parseInt(document.getElementById("dniUsuario").value, 10);
let numeroContacto = parseInt(document.getElementById("celularUsuario").value, 10); 
let mailContacto = document.getElementById("mailUsuarioNuevo").value;


    if (
        nuevoNombre !== '' &&
        nuevoApellido !== '' &&
        parseInt(nuevoDni) > 1000000 && nuevoDni < 100000000 &&
        numeroContacto > 1000000000 && numeroContacto < 9999999999 &&
        mailContacto !== '' 
    
        ) { confirmaMail()

            const nuevoPaciente = new Paciente(
                nuevoNombre,
                nuevoApellido,
                nuevoDni,
                numeroContacto,
                mailContacto,
              );
            
              let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
              usuariosGuardados.push(nuevoPaciente);

              localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
              
              document.getElementById("nombreUsuario").value = '';
              document.getElementById("apellidoUsuario").value = '';
              document.getElementById("dniUsuario").value = '';
              document.getElementById("celularUsuario").value = '';
              document.getElementById("mailUsuarioNuevo").value = '';


    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error en Registro',
            text: 'Reviste los datos ingresados',
        })
    }

}
const inicio = document.querySelector('.inicio')
const inicioPortada = document.querySelector('.inicioPortada')
const registroPortada = document.querySelector('.registroPortada')
const formInicio = document.querySelector('.formInicio')
const formRegistro = document.querySelector('.formRegistro')
const iniciarPortada = document.querySelector('.iniciarPortada')
const volverPortada = document.querySelector('.volverPortada')
const volverRegistro = document.querySelector('.volverRegistro')
const envioMail = document.querySelector(".envioMail")
const simulaCodigo = document.querySelector(".simulaCodigo")
const borrarRegistro = document.querySelector(".borrarRegistro")
const registroCorrecto = document.querySelector(".registroCorrecto")
const enviaMail = document.querySelector(".envioMail")
const volverInicio = document.querySelector('.volverInicio')
const redireccionCarga = document.querySelector('.redireccionCarga')


document.querySelector("#inicioSesion").addEventListener('click', () => {
    
    inicioPortada.style.display = 'none';
    registroPortada.style.display = 'none';
    formInicio.style.display= 'grid';
})

document.querySelector("#registroNuevo").addEventListener('click', () => {

    inicioPortada.style.display = 'none';
    registroPortada.style.display= 'none';
    formRegistro.style.display= 'grid';
})


document.querySelector("#ingresar").addEventListener('click', () => {
    validarUsuario();
    
})

 document.querySelector("#ingresarRegistro").addEventListener('click', () => {
      
      registroNuevo();
    
    
})
 


volverPortada.addEventListener('click', () => {
    inicioPortada.style.display = 'flex';
    registroPortada.style.display = 'flex';
    formInicio.style.display= 'none';
})

volverRegistro.addEventListener('click', () => {
    inicioPortada.style.display = 'flex';
    registroPortada.style.display = 'flex';
    formRegistro.style.display= 'none';
})

