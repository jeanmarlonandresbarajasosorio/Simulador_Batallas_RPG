// classes/Arquero.js

const Personaje = require('/Personaje');

/**
 * Clase que representa un Arquero.
 * Extiende de la clase Personaje.
 */
class Arquero extends Personaje {
  /**
   * Constructor específico para Arquero.
   * Mejora ataque pero tiene menos salud.
   * @param {string} nombre - Nombre del arquero.
   */
  constructor(nombre) {
    super(nombre, 'Arquero');
    this.ataque += 10;   // Precisión letal a distancia
    this.salud -= 10;    // Más vulnerable en combate cuerpo a cuerpo
  }

  /**
   * Habilidad especial del Arquero: Flecha Precisa.
   * Causa 1.5x su ataque como daño.
   * @param {Personaje} objetivo - Enemigo que recibe el daño.
   */
  habilidadEspecial(objetivo) {
    const dano = Math.floor(this.ataque * 1.5);
    objetivo.salud -= dano;
    console.log(`${this.nombre} lanza Flecha Precisa causando ${dano} de daño a ${objetivo.nombre}!`);
  }
}

module.exports = Arquero;