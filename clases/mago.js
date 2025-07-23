// classes/Mago.js

const Personaje = require('/Personaje');

/**
 * Clase que representa un Mago.
 * Extiende de la clase Personaje.
 */
class Mago extends Personaje {
  /**
   * Constructor específico para Mago.
   * Tiene ataque mágico potente pero menos defensa.
   * @param {string} nombre - Nombre del mago.
   */
  constructor(nombre) {
    super(nombre, 'Mago');
    this.ataque += 3;     // Potencial mágico básico
    this.defensa -= 2;    // Muy débil físicamente
    this.salud -= 15;     // Menor resistencia
  }

  /**
   * Habilidad especial del Mago: Bola de Fuego.
   * Agrega daño mágico adicional al ataque base.
   * @param {Personaje} objetivo - Enemigo que recibe el daño.
   */
  habilidadEspecial(objetivo) {
    const dano = this.ataque + 15; // Daño mágico explosivo
    objetivo.salud -= dano;
    console.log(`${this.nombre} lanza Bola de Fuego causando ${dano} de daño a ${objetivo.nombre}!`);
  }
}

module.exports = Mago;