const cargarUsuarios = async () => {
  try {
    console.log("Conectando con el servidor en la nube...");

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    console.log(`¡Éxito! Se descargaron ${usuarios.length} usuarios.`);

    // Ahora que 'usuarios' es un array real de internet:
    // Usa .map() para crear un nuevo array donde solo tengamos:
    // { nombre: u.name, correo: u.email, ciudad: u.address.city }
    const usuariosProcesados = usuarios.map((u) => {
      return {
        nombre: u.name,
        correo: u.email,
        ciudad: u.address.city
      };
    });

    console.log(usuariosProcesados);

  } catch (error) {
    console.log("Error al consultar la API:", error.message);
  }
};

// No olvides ejecutar la función:
cargarUsuarios();