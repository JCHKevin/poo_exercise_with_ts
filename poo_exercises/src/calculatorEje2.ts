export class Calculadora {
  //suma
  suma(a: number, b: number): number {
    return a + b;
  }

  //resta
  restar(a: number, b: number): number {
    return a - b;
  }

  //multiplica
  multiplicar(a: number, b: number): number {
    return a * b;
  }

  //divicion
  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Error_No_se_puede_dividir_entre_cero");
    }
    return a / b;
  }

  // method for potencia
  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // metodo for factorial
  factorial(n: number): number {
    if (n < 0) throw new Error("Don't exist factorial negative numbers");
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}
