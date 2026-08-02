const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Hola! ¿Cómo te llamás? ");
console.log(`Mucho gusto, ${name}!`);

while (true) {
  const input = prompt(`\n¿En qué te puedo ayudar, ${name}? (escribí "salir" para terminar)\n> `).toLowerCase().trim();

  // switch compara exactamente, por eso normalizamos el input arriba
  switch (input) {
    case "salir":
    case "exit":
    case "chau":
      console.log(`¡Hasta luego, ${name}! 👋`);
      process.exit(0);

    case "hola":
    case "buenas":
      console.log(`¡Hola de nuevo, ${name}! ¿Cómo estás?`);
      break;

    case "cómo estás":
    case "como estas":
      console.log("¡Estoy muy bien, gracias por preguntar! ¿Y vos?");
      break;

    case "clima":
    case "tiempo":
      console.log("No tengo acceso al clima en tiempo real, pero ¡espero que esté lindo donde estás!");
      break;

    case "hora":
    case "qué hora":
      console.log(`Son las ${new Date().toLocaleTimeString("es-AR")}.`);
      break;

    case "fecha":
    case "qué día":
      console.log(`Hoy es ${new Date().toLocaleDateString("es-AR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}.`);
      break;

    case "chiste":
    case "broma": {
      const chistes = [
        "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.",
        "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
        "¿Qué le dijo el 0 al 8? ¡Lindo cinturón!",
      ];
      console.log(chistes[Math.floor(Math.random() * chistes.length)]);
      break;
    }

    case "gracias":
      console.log("¡De nada! Para eso estoy 😊");
      break;

    case "":
      console.log("Escribí algo, no te escucho 😅");
      break;

    default:
      console.log(`Entiendo que querés hablar de "${input}", pero todavía estoy aprendiendo. ¡Preguntame otra cosa!`);
  }


  const titulo = prompt("¿Querés que te cuente un título de película? (sí/no) ").toLowerCase().trim();
}