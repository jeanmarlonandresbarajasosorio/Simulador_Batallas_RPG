// services/IAService.js

/**
 * Servicio de inteligencia artificial para enemigos.
 * Controla la toma de decisiones del enemigo en su turno.
 */
class IAService {
  /**
   * Decide la acción del enemigo durante su turno.
   * @param {Enemigo} enemigo - El enemigo que actúa.
   * @param {Personaje} jugador - El personaje jugador que es objetivo.
   */
  static tomarDecision(enemigo, jugador) {
    const decision = Math.random();

    // IA simple: 70% atacar, 30% usar habilidad especial
    if (decision < 0.7) {
      enemigo.atacar(jugador);
    } else {
      enemigo.habilidadEspecial(jugador);
    }
  }
}

module.exports = IAService;