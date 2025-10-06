// Clase Pasajero
class Pasajero {
  constructor(nombre, edad, genero, tipoBoleto) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tipoBoleto = tipoBoleto;
  }

  mostrarInfo() {
    return `${this.nombre}, ${this.edad} años, ${this.genero}, ${this.tipoBoleto}`;
  }
}

// Clase Bote de Rescate
class BoteRescate {
  constructor(nombre, capacidad) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.ocupantes = [];
  }

  agregarPasajero(pasajero) {
    if (this.ocupantes.length < this.capacidad) {
      this.ocupantes.push(pasajero);
      return true;
    } else {
      return false;
    }
  }

  mostrarOcupantes() {
    console.log(`\n${this.nombre} (Capacidad: ${this.capacidad})`);
    if (this.ocupantes.length === 0) {
      console.log("   No hay ocupantes.");
    } else {
      this.ocupantes.forEach(p => console.log("   " + p.mostrarInfo()));
    }
  }
}

// Algoritmo de evacuación
function evacuar(pasajeros, botes) {
  // Ordenar por prioridad: primero mujeres, luego edad, luego tipo de boleto
  pasajeros.sort((a, b) => {
    if (a.genero !== b.genero) {
      return a.genero === "Femenino" ? -1 : 1;
    }
    if (b.edad !== a.edad) {
      return b.edad - a.edad;
    }
    const prioridadBoleto = { "1ra Clase": 1, "2da Clase": 2, "3ra Clase": 3 };
    return prioridadBoleto[a.tipoBoleto] - prioridadBoleto[b.tipoBoleto];
  });

  let noSubieron = [];

  // Asignar pasajeros a los botes
  for (let pasajero of pasajeros) {
    let subio = false;
    for (let bote of botes) {
      if (bote.agregarPasajero(pasajero)) {
        subio = true;
        break;
      }
    }
    if (!subio) {
      noSubieron.push(pasajero);
    }
  }

  // Mostrar los ocupantes de cada bote
  botes.forEach(b => b.mostrarOcupantes());

  // Mostrar los pasajeros que no subieron
  console.log("\nPasajeros que no subieron al bote:");
  if (noSubieron.length === 0) {
    console.log("   Todos fueron evacuados.");
  } else {
    noSubieron.forEach(p => console.log("   " + p.mostrarInfo()));
  }
}

// Crear pasajeros
let pasajeros = [
  new Pasajero("Ana", 45, "Femenino", "1ra Clase"),
  new Pasajero("Luis", 30, "Masculino", "2da Clase"),
  new Pasajero("María", 60, "Femenino", "3ra Clase"),
  new Pasajero("Carlos", 25, "Masculino", "1ra Clase"),
  new Pasajero("Lucía", 15, "Femenino", "2da Clase"),
  new Pasajero("Pedro", 50, "Masculino", "3ra Clase"),
  new Pasajero("Sofía", 35, "Femenino", "1ra Clase"),
  new Pasajero("Jorge", 40, "Masculino", "2da Clase"),
  new Pasajero("Elena", 28, "Femenino", "3ra Clase"),
  new Pasajero("Miguel", 70, "Masculino", "1ra Clase")
];

// Crear botes
let bote1 = new BoteRescate("Bote A", 4);
let bote2 = new BoteRescate("Bote B", 3);
let bote3 = new BoteRescate("Bote C", 2);

let botes = [bote1, bote2, bote3];

// Ejecutar simulación
evacuar(pasajeros, botes);
