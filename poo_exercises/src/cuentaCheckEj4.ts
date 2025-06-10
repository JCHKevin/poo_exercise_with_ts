class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  constructor(
    nombre: string,
    cantidad: number,
    tipoCuenta: string,
    numeroCuenta: string
  ) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  // Método para depositar
  depositar(monto: number): void {
    if (monto < 5) {
      console.log("El valor a depositar debe ser mayor a $5.00");
    } else {
      this.cantidad += monto;
      console.log(
        `Se ha depositado correctamente $${monto}. Nuevo saldo: $${this.cantidad}`
      );
    }
  }

  // Método para retirar
  retirar(valor: number): void {
    if (valor < 5) {
      console.log("El monto a retirar debe ser mayor a $5.00");
      return;
    }

    if (this.cantidad <= 0) {
      console.log("No hay saldo disponible en la cuenta");
      return;
    }

    if (valor > this.cantidad) {
      console.log("Fondos insuficientes");
      return;
    }

    this.cantidad -= valor;
    console.log(`Ha retirado $${valor}. Saldo restante: $${this.cantidad}`);
  }

  // Método para mostrar datos
  mostrarDatos(): void {
    console.log("Datos de la cuenta:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
    console.log(`Número de cuenta: ${this.numeroCuenta}`);
    console.log(`Saldo actual: $${this.cantidad}`);
  }
}

// Uso de la clase
const miCuenta = new Cuenta("Juan Pérez", 100, "Ahorros", "123456789");
miCuenta.mostrarDatos();
miCuenta.depositar(50);
miCuenta.retirar(30);
miCuenta.retirar(200); // Probando fondos insuficientes
