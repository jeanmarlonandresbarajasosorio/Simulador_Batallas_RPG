// classes/Guerrero.js

const Personaje = require('/Personaje');

/**
 * Clase que representa un Guerrero.
 * Extiende de la clase Personaje.
 */
class Guerrero extends Personaje {
  /**
   * Constructor específico para Guerrero.
   * Mejora salud, ataque y defensa al instanciarse.
   * @param {string} nombre - Nombre del guerrero.
   */
  constructor(nombre) {
    super(nombre, 'Guerrero');
    this.salud += 30;    // Guerreros son más resistentes
    this.ataque += 5;    // Fuerza adicional
    this.defensa += 5;   // Mayor defensa física
  }

  /**
   * Habilidad especial del Guerrero: Golpe Poderoso.
   * Causa el doble de su ataque como daño.
   * @param {Personaje} objetivo - Enemigo que recibe el daño.
   */
  habilidadEspecial(objetivo) {
    const dano = this.ataque * 2 - objetivo.defensa;
    objetivo.salud -= dano;
    console.log(`${this.nombre} usa Golpe Poderoso y causa ${dano} de daño a ${objetivo.nombre}!`);
  }
}

module.exports = Guerrero;