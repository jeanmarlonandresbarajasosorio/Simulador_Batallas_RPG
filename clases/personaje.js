// classes/Personaje.js

/**
 * Clase base que representa un personaje del juego.
 * Define atributos y métodos comunes para todas las clases derivadas.
 */
class Personaje {
  /**
   * Constructor base para cualquier personaje.
   * @param {string} nombre - Nombre del personaje.
   * @param {string} clase - Tipo o clase del personaje (Guerrero, Mago, Arquero).
   */
  constructor(nombre, clase) {
    this.nombre = nombre;
    this.clase = clase;
    this.nivel = 1;
    this.salud = 100;
    this.ataque = 10;
    this.defensa = 5;
    this.inventario = []; // Arreglo para almacenar objetos
  }

  /**
   * Ejecuta un ataque básico contra otro personaje.
   * @param {Personaje} objetivo - Personaje que recibe el ataque.
   */
  atacar(objetivo) {
    const dano = this.ataque - objetivo.defensa;
    objetivo.salud -= dano > 0 ? dano : 1; // Nunca hace menos de 1 de daño
    console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${dano} de daño.`);
  }

  /**
   * Sube el nivel del personaje y mejora sus atributos.
   */
  subirNivel() {
    this.nivel++;
    this.salud += 10;
    this.ataque += 5;
    this.defensa += 3;
    console.log(`${this.nombre} ha subido a nivel ${this.nivel}!`);
  }

  /**
   * Muestra el estado actual del personaje.
   */
  mostrarEstado() {
    console.log(`\n${this.nombre} (Nivel ${this.nivel}) - Clase: ${this.clase}`);
    console.log(`Salud: ${this.salud} | Ataque: ${this.ataque} | Defensa: ${this.defensa}\n`);
  }
}

module.exports = Personaje;