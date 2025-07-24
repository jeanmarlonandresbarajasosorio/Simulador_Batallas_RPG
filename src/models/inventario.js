class Objeto {
    constructor(nombre, tipo, efecto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.efecto = efecto; // función que actúa sobre el personaje
    }

    usar(personaje) {
        this.efecto(personaje);
    }
}

class Inventario {
    constructor() {
        this.objetos = [];
    }

    agregar(objeto) {
        this.objetos.push(objeto);
        // console.log(`✔️ Objeto "${objeto.no3mbre}" agregado al inventario.`);
    }

    usar(nombre, personaje) {
        const index = this.objetos.findIndex(obj => obj.nombre === nombre);
        if (index !== -1) {
            console.log(`🧩 Activando efecto de "${this.objetos[index].nombre}"...`);
            this.objetos[index].usar(personaje);
            this.objetos.splice(index, 1);
        } else {
            console.log(`⚠️ No se encontró ningún objeto llamado "${nombre}" en tu inventario.`);
        }
    }

    eliminar(nombre) {
        this.objetos = this.objetos.filter(obj => obj.nombre !== nombre);
        console.log(`🗑️ Eliminando "${nombre}" del inventario (si existía).`);
    }

    listar() {
        console.log("\n📦 Objetos disponibles en el inventario:");
        if (this.objetos.length === 0) {
            console.log("   (Inventario vacío)");
        } else {
            this.objetos.forEach(obj => {
                console.log(`   → ${obj.nombre} | Tipo: ${obj.tipo}`);
            });
        }
    }
}

module.exports = { Objeto, Inventario };