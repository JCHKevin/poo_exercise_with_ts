class CabeceraPagina {
  private color: string;
  private fuente: string;
  private alineacion: string;
  private titulo: string;

  constructor() {
    this.color = "";
    this.fuente = "";
    this.titulo = "";
    // valor por defect in this part
    this.alineacion = "izquierda";
  }

  //metodo 1 para configurar propiedades basicas
  configurarPropiedades(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  // Method 2 para establecer alineación
  establecerAlineacion(alineacion: "centrado" | "derecha" | "izquierda"): void {
    this.alineacion = alineacion;
  }

  // method 3 imprimir todas las propiedades
  imprimirPropiedades(): void {
    console.log("Propiedades de la cabecera:");
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

const cabecera = new CabeceraPagina();
cabecera.configurarPropiedades("Mi Página", "azul", "Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirPropiedades();
