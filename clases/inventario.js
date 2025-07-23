// classes/Inventario.js

/**
 * Clase que representa el inventario de un personaje.
 * Maneja objetos como armas, pociones y armaduras.
 */
class Inventario {
  constructor() {
    this.objetos = []; // Array para guardar los objetos
  }

  /**
   * Agrega un objeto al inventario.
   * @param {Objeto} objeto - Objeto a agregar.
   */
  agregar(objeto) {
    this.objetos.push(objeto);
    console.log(`Objeto "${objeto.nombre}" añadido al inventario.`);
  }

  /**
   * Muestra todos los objetos actuales del inventario.
   */
  listar() {
    if (this.objetos.length === 0) {
      console.log('El inventario está vacío.');
      return;
    }

    console.log('Inventario:');
    this.objetos.forEach((objeto, index) => {
      console.log(`${index + 1}. ${objeto.nombre} (${objeto.tipo})`);
    });
  }

  /**
   * Usa un objeto del inventario sobre un personaje.
   * @param {number} indice - Índice del objeto en el inventario.
   * @param {Personaje} personaje - Personaje que usará el objeto.
   */
  usar(indice, personaje) {
    if (indice < 0 || indice >= this.objetos.length) {
      console.log('Índice inválido.');
      return;
    }

    const objeto = this.objetos[indice];
    objeto.aplicar(personaje);
    console.log(`${personaje.nombre} ha usado ${objeto.nombre}.`);

    // Eliminar objeto si es de un solo uso
    if (objeto.consumible) {
      this.objetos.splice(indice, 1);
      console.log(`${objeto.nombre} ha sido consumido y eliminado del inventario.`);
    }
  }

  /**
   * Elimina un objeto del inventario manualmente.
   * @param {number} indice - Índice del objeto a eliminar.
   */
  eliminar(indice) {
    if (indice < 0 || indice >= this.objetos.length) {
      console.log('Índice inválido.');
      return;
    }
    const eliminado = this.objetos.splice(indice, 1)[0];
    console.log(`"${eliminado.nombre}" ha sido eliminado del inventario.`);
  }
}

module.exports = Inventario;