┌────────────────────┐
│   Personaje        │
├────────────────────┤
│ - id               │
│ - nombre           │
│ - nivel            │
│ - vida             │
│ - ataque           │
│ - defensa          │
│ - inventario       │
├────────────────────┤
│ + atacar(objetivo) │
│ + recibirDanio()   │
│ + usarObjeto()     │
│ + subirNivel()     │
└─────────┬──────────┘
          ▲
 ┌────────┴───────┐
 │                │
 │                │
┌───────┐     ┌────────┐
│Guerrero│   │ Mago   │
├───────┤     ├────────┤
│+ habilidadEspecial()│
└───────┘     └────────┘
   ▲              ▲
   │              │
┌────────┐
│Arquero │
├────────┤
│+ habilidadEspecial()│
└────────┘

┌──────────────────────┐
│  GestorInventario    │
├──────────────────────┤
│ + añadirObjeto()     │
│ + usarObjeto()       │
│ + eliminarObjeto()   │
└──────────────────────┘

┌──────────────────────┐
│     Batalla          │
├──────────────────────┤
│ + iniciarBatalla()   │
│ + turnoJugador()     │
│ + turnoEnemigo()     │
└──────────────────────┘

┌──────────────────────┐
│  GeneradorEnemigos   │
├──────────────────────┤
│ + generarEnemigo()   │
└──────────────────────┘
