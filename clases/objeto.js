// classes/Objeto.js

/**
 * Clase base para representar objetos del inventario.
 * Pueden modificar atributos del personaje.
 */
class Objeto {
  /**
   * 
   * @param {string} nombre - Nombre del objeto.
   * @param {string} tipo - Tipo de objeto (poción, arma, armadura).
   * @param {boolean} consumible - Si desaparece después de usarse.
   */
  constructor(nombre, tipo, consumible = true) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.consumible = consumible;
  }

  /**
   * Aplica el efecto del objeto sobre un personaje.
   * Este método debe ser sobreescrito por objetos concretos.
   * @param {Personaje} personaje 
   */
  aplicar(personaje) {
    console.log(`${this.nombre} no tiene efecto por defecto.`);
  }
}

module.exports = Objeto;