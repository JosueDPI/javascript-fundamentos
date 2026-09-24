const obtenerTareas = async ()=>{
    try {
        console.log("Conectado con la API")
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos")
        const tareas = await respuesta.json();
        return tareas

        
    } catch (error) {
        console.log(`Error al consultar la API: ${error.message}`)
    }
    
}

const filtrarTareasUsuario = (lista, idUs) =>{
    return lista.filter((tarea) => tarea.userId === idUs)
}

const buscarTareaId = (lista, idUs) => {
    const idEncontrado = lista.find((tarea) => tarea.id === idUs)
    if (!idEncontrado) {
        return `No existe ninguna tarea con el id ${idUs}`
    } else {
        return `Tarea encontrada: ${idEncontrado.title} - Estado: ${idEncontrado.completed ? "COMPLETADA" : "PENDIENTE"}`
    }
}

const resumirTareas = (t) => {
    const rP = t.map((r)=>{
        return{
            id: r.id,
            titulo: r.title,
            completada: r.completed
        }

    })
    return rP
}

const ejecutarPrograma = async () => {
  // 1. Descargas las tareas
  const tareas = await obtenerTareas();

  // 2. Pruebas tus filtros y búsquedas:
  console.log("--- Tareas del Usuario 1 ---");
  const tareasUsuario1 = filtrarTareasUsuario(tareas, 1);
  console.log(tareasUsuario1.length); // ¿Cuántas tareas tiene?

  console.log("--- Búsqueda de Tarea 15 ---");
  console.log(buscarTareaId(tareas, 15));

  console.log("--- Búsqueda de Tarea 999 (No existe) ---");
  console.log(buscarTareaId(tareas, 999));

  console.log("--- Primeras 3 tareas resumidas ---");
  const resumen = resumirTareas(tareasUsuario1);
  console.log(resumen.slice(0, 3)); // .slice(0, 3) te muestra solo las primeras 3
};

ejecutarPrograma();



