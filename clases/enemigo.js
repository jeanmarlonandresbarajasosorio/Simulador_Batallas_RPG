// classes/Enemigo.js

const Personaje = require('/Personaje');

/**
 * Clase que representa a un Enemigo.
 * Hereda de Personaje, pero incluye comportamiento de IA.
 */
class Enemigo extends Personaje {
  /**
   * Constructor del Enemigo.
   * Genera atributos aleatorios dentro de rangos definidos.
   * @param {string} tipo - Tipo o nombre del enemigo (Goblin, Esqueleto, Orco, etc.).
   * @param {number} nivel - Nivel del enemigo (afecta salud y ataque).
   */
  constructor(tipo, nivel = 1) {
    super(tipo, 'Enemigo');
    this.nivel = nivel;

    // Generación aleatoria básica de atributos según nivel
    this.salud = 60 + nivel * getRandomInt(10, 20);
    this.ataque = 8 + nivel * getRandomInt(2, 5);
    this.defensa = 3 + nivel * getRandomInt(1, 3);
  }

  /**
   * Acción automática del enemigo controlada por IA.
   * Decide entre ataque normal o habilidad especial (si se define).
   * @param {Personaje} objetivo - El jugador o personaje objetivo.
   */
  tomarTurno(objetivo) {
    // Lógica simple: 70% probabilidad de ataque normal, 30% habilidad
    const decision = Math.random();
    if (decision < 0.7) {
      this.atacar(objetivo);
    } else {
      this.habilidadEspecial(objetivo);
    }
  }

  /**
   * Habilidad especial genérica del enemigo.
   * Puede ser sobrescrita por enemigos personalizados.
   * @param {Personaje} objetivo - Personaje que recibe el daño.
   */
  habilidadEspecial(objetivo) {
    const dano = this.ataque + 5;
    objetivo.salud -= dano;
    console.log(`${this.nombre} usa un ataque salvaje y causa ${dano} de daño a ${objetivo.nombre}!`);
  }
}

/**
 * Genera un número entero aleatorio entre min y max (inclusive).
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = Enemigo;