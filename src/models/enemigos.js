const Personaje = require("./personajes");

class Enemigo extends Personaje {
    static nombres = ["Goblin", "Orco", "Trol", "Esqueleto", "Lobo", "Demonio"];

    constructor(nombre, salud, ataque, defensa) {
        // Llama al constructor de Personaje
        super(nombre, salud, ataque, defensa);
    }

    static crearAleatorio() {
        // Selecciona un nombre aleatorio de la lista
        const nombre = this.nombres[Math.floor(Math.random() * this.nombres.length)];

        // Atributos generados aleatoriamente dentro de rangos
        const salud = Math.floor(Math.random() * 31) + 70;        // 70–100
        const ataque = Math.floor(Math.random() * 11) + 10;       // 10–20
        const defensa = Math.floor(Math.random() * 6) + 5;        // 5–10

        console.log(`🧟‍♂️ Aparece un enemigo salvaje: ${nombre} (Salud: ${salud}, Ataque: ${ataque}, Defensa: ${defensa})`);

        return new Enemigo(nombre, salud, ataque, defensa);
    }
}

module.exports = Enemigo;