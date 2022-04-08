  // src/Models/index.ts
  interface Model<T> {
    create(obj: T): Promise<T>,
    read(): Promise<T[]>,
    readOne(id_: string): Promise<T | null>,
  }

  export default Model;

  // Nossa interface Model recebe um genérico T . Isso é necessário pois cada model
  // irá receber um objeto e retorno de tipos diferentes. Por exemplo, podemos ter um model
  // de Frame e outro de Lens . O método read no model de Frame vai retornar um Frame (ou null ),
  // enquanto que o mesmo método no model de Lens vai retornar uma Lens (ou null ).