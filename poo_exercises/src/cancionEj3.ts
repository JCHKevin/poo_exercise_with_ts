class Cancion {
  private titulo: string;
  private genero: string;
  private autor: string; // Atributo privado

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = "Desconocido"; // Valor por defecto
  }

  // Getter para autor
  get obtenerAutor(): string {
    return this.autor;
  }

  // Setter para autor
  set establecerAutor(nuevoAutor: string) {
    this.autor = nuevoAutor;
  }

  // Método para mostrar datos
  mostrarDatos(): void {
    console.log(`Canción: ${this.titulo}`);
    console.log(`Género: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
  }
}

// Uso de la clase
const miCancion = new Cancion("Bohemian Rhapsody", "Rock");
miCancion.establecerAutor = "Queen";
miCancion.mostrarDatos();
console.log("Autor obtenido:", miCancion.obtenerAutor);
