// services/GuardadoService.js 2

const fs = require('fs-extra');
const path = require('path');

/**
 * Servicio para guardar y cargar personajes en archivos JSON locales.
 */
class GuardadoService {
  static rutaBase = path.join(__dirname, '../data/personajes.json');

  /**
   * Guarda un personaje en el archivo JSON.
   * @param {Object} personaje - El personaje a guardar.
   */
  static async guardarPersonaje(personaje) {
    try {
      const existe = await fs.pathExists(this.rutaBase);
      const personajes = existe ? await fs.readJSON(this.rutaBase) : [];

      personajes.push(personaje);
      await fs.writeJSON(this.rutaBase, personajes, { spaces: 2 });

      console.log(`✅ Personaje "${personaje.nombre}" guardado correctamente.`);
    } catch (err) {
      console.error('❌ Error al guardar el personaje:', err.message);
    }
  }

  /**
   * Carga todos los personajes guardados.
   * @returns {Array} Lista de personajes cargados.
   */
  static async cargarPersonajes() {
    try {
      const personajes = await fs.readJSON(this.rutaBase);
      console.log('📦 Personajes cargados exitosamente.');
      return personajes;
    } catch (err) {
      console.error('⚠️ No se pudieron cargar los personajes:', err.message);
      return [];
    }
  }

  /**
   * Borra todos los personajes guardados (función auxiliar).
   */
  static async borrarTodo() {
    try {
      await fs.writeJSON(this.rutaBase, []);
      console.log('🗑️ Todos los personajes han sido eliminados.');
    } catch (err) {
      console.error('❌ Error al borrar personajes:', err.message);
    }
  }
}

module.exports = GuardadoService;