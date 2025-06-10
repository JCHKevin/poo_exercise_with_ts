import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { CabeceraPagina } from "./cabeceraPagina.ts";
import { Calculadora } from "./calculatorEje2.ts";
import { Cancion } from "./cancionEj3.ts";
import { Cuenta } from "./cuentaCheckEj4.ts";

// ¨¨¨¨ USANDO EJE1 *********
const cabecera = new CabeceraPagina();
cabecera.configurarPropiedades("Mi Página", "azul", "Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirPropiedades();

console.log("---------EJERCICIO 2-----------------------------------------");

const calc = new Calculadora();
console.log("Suma:", calc.suma(5, 3));
console.log("rest:", calc.restar(100, 50));
console.log("multiplication:", calc.multiplicar(5, 5));
console.log("Factorial de 5:", calc.factorial(5));
console.log("division:", calc.dividir(5, 2));
// console.log("division:", calc.dividir(5, 0));

console.log("---------EJERCICIO THREE---------------------------------------");

const miCancion = new Cancion("Bohemia Rhapsodi", "Rock");
miCancion.establecerAutor = "Queen";
miCancion.mostrarDatos();
console.log("Autor obtenido:", miCancion.obtenerAutor);

console.log("---------EJERCICIO FOUR ---------------------------------------");
//probarlo solo solin solito

const miCuenta = new Cuenta("KJ Bukele", 100, "Ahorros", "1122334455");
miCuenta.mostrarDatos();
// miCuenta.depositar(50);
// miCuenta.retirar(30);
// miCuenta.retirar(200);
//prueba para fondos insuficientes

//________________________________________________________________________________________________

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
