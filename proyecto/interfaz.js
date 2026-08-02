const lista = [];

function agregar(titulo) {
  lista.push({ titulo, hecha: false });
}

function completar(indice) {
  if (lista[indice]) lista[indice].hecha = true;
}

function eliminar(indice) {
  lista.splice(indice, 1);
}

function obtenerTodas() {
  return lista;
}

function mensaje(mensaje) {
  console.log(mensaje);
}

function mostrarMenu() {
  console.log("1. Agregar tarea");
  console.log("2. Completar tarea");
  console.log("3. Eliminar tarea");
  console.log("4. Mostrar todas las tareas");
  console.log("0. Salir");

}

function mostrarTareas(tareas) {
  if (tareas.length === 0) {
    console.log("No hay tareas."); 
  } else {
    console.log("Tareas:"); 
    tareas.forEach((tarea, index) => {
      const estado = tarea.hecha ? "hecha" : "pendiente";
      console.log(`${index}. ${tarea.titulo} - ${estado}`);
    }
    );
  } 
  
}

// Entrega: solo lo que exportas sale del archivo
module.exports = { agregar, completar, eliminar, obtenerTodas, mostrarMenu, mostrarTareas, mensaje };