//3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
//   En el constructor realizar el ingreso de datos. 
//   Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)
import readline from "readline-sync";

class Alumno {
  private nombre: string;
  private edad: number;

  constructor() {
    this.nombre = readline.question("Ingrese el nombre del alumno: ");
    this.edad = readline.questionInt("Ingrese la edad del alumno: ");
  }

  public imprimirDatos(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
  }

  public esMayorDeEdad(): void {
    const mensaje = this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    console.log(mensaje);
  }
}

const alumno = new Alumno()
alumno.imprimirDatos();
alumno.esMayorDeEdad();