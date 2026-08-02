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

function obtenerTodas(){
  return lista;
}

module.exports = { agregar, completar, eliminar, obtenerTodas };


