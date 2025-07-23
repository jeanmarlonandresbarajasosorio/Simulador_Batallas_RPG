// services/BatallaService.js

/**
 * Servicio que gestiona el sistema de batallas por turnos.
 * Permite simular una pelea entre un personaje y un enemigo.
 */
class BatallaService {
  /**
   * Ejecuta una batalla entre dos personajes.
   * @param {Personaje} jugador - El personaje del jugador.
   * @param {Enemigo} enemigo - El enemigo controlado por IA.
   */
  static iniciarBatalla(jugador, enemigo) {
    console.log(`¡Comienza la batalla entre ${jugador.nombre} y ${enemigo.nombre}!\n`);

    let turnoJugador = true;

    while (jugador.salud > 0 && enemigo.salud > 0) {
      if (turnoJugador) {
        console.log('👉 Turno del jugador:');
        jugador.mostrarEstado();
        enemigo.mostrarEstado();
        jugador.atacar(enemigo); // Puedes reemplazar con habilidadEspecial si lo deseas
      } else {
        console.log('🤖 Turno del enemigo:');
        enemigo.tomarTurno(jugador);
      }

      // Pausa breve entre turnos
      console.log('---');

      turnoJugador = !turnoJugador;
    }

    // Determinar resultado
    if (jugador.salud > 0) {
      console.log(`🎉 ${jugador.nombre} ha ganado la batalla.`);
    } else {
      console.log(`☠️ ${enemigo.nombre} ha derrotado a ${jugador.nombre}.`);
    }
  }
}

module.exports = BatallaService;