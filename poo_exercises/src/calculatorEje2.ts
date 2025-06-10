class Calculadora {
  // Método para sumar
  sumar(a: number, b: number): number {
    return a + b;
  }

  // Método para restar
  restar(a: number, b: number): number {
    return a - b;
  }

  // Método para multiplicar
  multiplicar(a: number, b: number): number {
    return a * b;
  }

  // Método para dividir
  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }

  // Método para potencia
  potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // Método para factorial
  factorial(n: number): number {
    if (n < 0) throw new Error("No existe factorial de números negativos");
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

// Uso de la clase
const calc = new Calculadora();
console.log("Suma:", calc.sumar(5, 3));
console.log("Factorial de 5:", calc.factorial(5));
