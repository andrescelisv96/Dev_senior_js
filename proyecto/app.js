const readline = require("readline");
const tareas = require("./tareas");       // abre la caja de la cocina
const interfaz = require("./interfaz"); // abre la caja del mesero

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
  let salir = false;

  while (!salir) {
    interfaz.mostrarMenu();
    const opcion = await preguntar("Opción: ");

    
    switch (opcion) {
      case "1": {
        const titulo = await preguntar("Título: ");
        tareas.agregar(titulo);
        interfaz.mensaje("Tarea agregada.");
        break;
      }
      case "2": {
        interfaz.mostrarTareas(tareas.obtenerTodas());
        const i = Number(await preguntar("Índice: "));
        tareas.completar(i);
        break;
      }
      case "3": {
        interfaz.mostrarTareas(tareas.obtenerTodas());
        const i = Number(await preguntar("Índice: "));
        tareas.eliminar(i);
        break;
      }
      case "4":
        interfaz.mostrarTareas(tareas.obtenerTodas());
        break;
      case "0":
        salir = true;
        break;
      default:
        interfaz.mensaje("Opción inválida.");
    }
  }

  rl.close();
}

main();