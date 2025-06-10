export class Cancion {
  private titulo: string;
  private autor: string;
  private genero: string;

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.autor = "Desconocido";
    this.genero = genero;
  }

  //Getter para autor
  get obtenerAutor(): string {
    return this.autor;
  }

  //Setter para autor
  set establecerAutor(nuevoAutor: string) {
    this.autor = nuevoAutor;
  }

  //method para mostrar datos
  mostrarDatos(): void {
    console.log(`Cancion: ${this.titulo}`);
    console.log(`Genero: ${this.genero}`);
    console.log(`Autor: ${this.autor}`);
  }
}
