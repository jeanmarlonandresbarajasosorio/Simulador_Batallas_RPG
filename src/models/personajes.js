const { Inventario } = require('./inventario');


// Clase Personaje
class Personaje {
    constructor(nombre, salud, ataque, defensa, nivel=1) {
        this.nombre = nombre;
        this.salud = salud;
        this.ataque = ataque;
        this.defensa = defensa;
        this.nivel = nivel;
        this.vidaMax = 100 + nivel * 10;// Vida máxima que escala con el nivel
        this.vida = this.vidaMax;// Vida actual, comienza llena
        this.ataque = 10 + nivel * 2;// Ataque base, aumenta con el nivel
        this.habilidades = [];  // Lista de habilidades del personaje
        this.inventario = new Inventario();
    }

    // Metodo para saber si el personaje aun esta vivo
    estaVivo(){
        return this.vida > 0;
    }

    // Metodo para recibir daño de un enemigo
    recibirDanio(cantidad){
        const danioRecibido = Math.max(0,cantidad); // Asegura que el daño no sea negativo
        this.vida -= danioRecibido; // Resta el daño a la vida actual
        if(this.vida < 0) this.vida = 0;// Evita que la vida sea negativa
        return danioRecibido;
    }

    // Metodo para usar una habilidad contra un enemigo 
    usarHabilidad(indice,objetivo){
        const habilidad = this.habilidades[indice];
        if(!habilidad) return "No hay habilidades disponibles";
        return habilidad.efecto(this,objetivo);
    }

    // Metodo para subir de nivel el personaje
    subirNivel(){
        this.nivel++; // Aumenta el nivel del personaje
        this.vidaMax += 10; // Aumenta la vida máxima
        this.ataque += 2; // Aumenta el ataque
        this.vida = this.vidaMax; // Restaura la vida al máximo
    }

    usarObjeto(nombreObjeto){
        this.inventario.usar(nombreObjeto, this)
    }
}

// Subclase: Guerrero
class Guerrero extends Personaje {
    constructor(nombre, nivel=1){
        super(nombre,nivel);
        this.ataque += 5; // Guerrero tiene más ataque base
        // Agrega una habilidad especial de Guerrero
        this.habilidades.push({
            nombre: "Golpe Poderoso",
            efecto: (usuario, enemigo) => {
                const danio = usuario.ataque * 1.5;
                enemigo.recibirDanio(danio);
                return `${usuario.nombre} usa Golpe poderoso y causa ${danio.toFixed(1)} de daño a ${enemigo.nombre}`;
            }
        });
    }
}

// Subclase: Mago
class Mago extends Personaje{
    constructor (nombre,nivel = 1){
        super(nombre,nivel);
        this.vidaMax -=20;
        this.vida = this.vidaMax;
        this.ataque += 3;
        // Agrega una habilidad especial de Mago
        this.habilidades.push({
            nombre: "Bola de fuego",
            efecto:(usuario,enemigo) => {
                const danio = usuario.ataque * 2;
                enemigo.recibirDanio(danio);
                return `${usuario.nombre} lanza una Bola de fuego causando ${danio.toFixed(1)} de daño a ${enemigo.nombre}`;
            }
        });
    }
}

// subclase Arquero
class Arquero extends Personaje{
    constructor(nombre,nivel = 1){
        super(nombre,nivel);
        this.ataque += 2;
        // Agrega una habilidad especial de Arquero
        this.habilidades.push({
            nombre: "Flecha Magica",
            efecto: (usuario,enemigo) => {
                const danio = usuario.ataque + 10;
                enemigo.recibirDanio(danio);
                return `${usuario.nombre} realiza un disparo con Flecha Magica  ${danio.toFixed(1)} de daño a ${enemigo.nombre}`;
            }
        })
    }
}

// Exporta las clases

module.exports = Personaje;