const inquirer = require('inquirer');
const Personaje = require('./src/models/personajes');
const Enemigo = require("./src/models/enemigos");
const { Objeto, Inventario } = require('./src/models/inventario');
const { guardar, cargar } = require('./src/utils/persistencia');
const iniciarBatalla = require('./src/services/GestorBatalla');

let personajes = cargar();

// 🧩 Reconstrucción del inventario como instancias reales
personajes.forEach(p => {
  const nuevoInventario = new Inventario();
  p.inventario.objetos.forEach(obj => nuevoInventario.agregar(obj));
  p.inventario = nuevoInventario;
});

async function menu() {
  while (true) {
    const { opcion } = await inquirer.prompt({
      type: 'list',
      name: 'opcion',
      message: '📋 Menú principal - Selecciona una opción:',
      choices: [
        '🧙 Crear personaje',
        '📜 Ver personajes',
        '⚔️ Iniciar batalla',
        '🚪 Salir'
      ]
    });

    if (opcion.includes('Crear')) {
      const datos = await inquirer.prompt([
        { type: 'input', name: 'nombre', message: '🆕 Nombre del personaje:' },
        { type: 'number', name: 'nivel', message: '🔢 Nivel:', default: 1 },
        { type: 'number', name: 'ataque', message: '🗡️ Ataque:', default: 10 },
        { type: 'input', name: 'habilidadNombre', message: '💥 Nombre de una habilidad:' },
        { type: 'number', name: 'habilidadDanio', message: '📊 Daño de la habilidad:' },
        { type: 'input', name: 'objetoNombre', message: '🎁 Nombre del objeto:' },
        { type: 'input', name: 'objetoTipo', message: '📦 Tipo (curativo, ofensivo, etc):' },
        { type: 'number', name: 'objetoValor', message: '💚 Valor de efecto del objeto:' }
      ]);

      const nuevo = new Personaje(datos.nombre, datos.nivel);
      nuevo.ataque = datos.ataque;

      // Agrega habilidad personalizada
      const habilidad = {
        nombre: datos.habilidadNombre,
        efecto: (usuario, objetivo) => {
          const danio = datos.habilidadDanio;
          const resultado = objetivo.recibirDanio(danio);
          return `🔥 ${usuario.nombre} usó ${datos.habilidadNombre} e hizo ${resultado} de daño a ${objetivo.nombre}`;
        }
      };
      nuevo.habilidades.push(habilidad);

      // Agrega objeto personalizado
      const efectoObjeto = (personaje) => {
        personaje.vida += datos.objetoValor;
        if (personaje.vida > personaje.vidaMax) personaje.vida = personaje.vidaMax;
        console.log(`💊 ${personaje.nombre} usó ${datos.objetoNombre} y recuperó ${datos.objetoValor} de vida.`);
      };
      const objeto = new Objeto(datos.objetoNombre, datos.objetoTipo, efectoObjeto);
      nuevo.inventario.agregar(objeto);

      personajes.push(nuevo);
      guardar(personajes);
      console.log(`✅ Personaje "${nuevo.nombre}" creado y guardado correctamente.`);
    }

    else if (opcion.includes('Ver')) {
      if (personajes.length === 0) {
        console.log("⚠️ No hay personajes creados todavía.");
      } else {
        personajes.forEach(p => {
          console.log(`\n🎭 Nombre: ${p.nombre}`);
          console.log(`🏅 Nivel: ${p.nivel}`);
          console.log(`❤️ Vida: ${p.vida}/${p.vidaMax}`);
          console.log(`🗡️ Ataque: ${p.ataque}`);
          console.log("💫 Habilidades:");
          p.habilidades.forEach((h, i) => {
            console.log(`   ${i + 1}. ${h.nombre}`);
          });
          console.log("🎒 Inventario:");
          p.inventario.listar();
        });
      }
    }

    else if (opcion.includes('Iniciar')) {
      await iniciarBatalla(personajes);
      guardar(personajes); // Guardar después de la batalla
    }

    else if (opcion.includes('Salir')) {
      console.log("👋 Gracias por jugar. ¡Hasta la próxima!");
      break;
    }
  }
}

menu();