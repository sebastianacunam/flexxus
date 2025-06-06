//2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. 
//   Realizar la creación y carga del vector en el constructor. 
//   Crear un método para imprimir el vector.
import readline = require("readline-sync");

class SueldosOperarios {
  private sueldos: number[];

  constructor() {
    this.sueldos = [];
    this.cargarSueldos();
  }

  private cargarSueldos(): void {
    for (let i: number = 0; i < 5; i++) {
      let sueldo: number;
      do {
        sueldo = readline.questionInt(`Ingrese el sueldo del operario ${i + 1}: `);
        if (sueldo <= 0) {
          console.log("Por favor, ingrese un sueldo válido mayor que 0.");
        }
      } while (sueldo <= 0);
      this.sueldos.push(sueldo);
    }
  }

  public imprimirSueldos(): void {
    console.log("Sueldos ingresados:");
    this.sueldos.forEach((sueldo, idx) => {
      console.log(`Operario ${idx + 1}: $${sueldo}`);
    });
  }
}

const operarios = new SueldosOperarios();
operarios.imprimirSueldos();