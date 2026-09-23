const usuarioOriginal = {
  id: 1,
  nombre: "Andrés Molina",
  email: "andres@correo.com",
  activo: false,
  rol: "invitado"
};

const mostrarBienvenida = ({nombre, email}) =>{
    console.log(`Bienvenido ${nombre}, tu correo de contacto es ${email}`)
}

mostrarBienvenida(usuarioOriginal)

const activarUsuario = (usuario) =>{
    return{
    ...usuario,
    activo: true,
    rol: "Administrador",
    fechaActivacion: "2026-09-23"
    }
}
    


console.log(activarUsuario(usuarioOriginal))