class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = [];
    this._notasTrabalho = [];
  }

  get matricula():string {
    return this._matricula;
  }

  set matricula (numMatricula: string) {
    this._matricula = numMatricula;
  }

  get nome():string {
    return this._nome;
  }

  set nome (newName: string) {
    this._nome = newName;
  }

  get notasProvas():number[] {
    return this._notasProvas;
  }

  set notasProvas (notasProvas: number[]) {
    this._notasProvas = notasProvas;
  }

  get notasTrabalho():number[] {
    return this._notasTrabalho;
  }

  set notasTrabalho (notasTrabalho: number[]) {
    this._notasTrabalho = notasTrabalho;
  }

  somaNotas(): number {
    const allGrades = this._notasProvas.concat(this._notasTrabalho)
    return allGrades.reduce((acc, nota) => {
      acc += nota
      return acc
    }, 0)
  }

  mediaNotas(): number {
    const soma = this.somaNotas();
    return soma/(this._notasProvas.concat(this._notasTrabalho).length)
    
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.notasProvas = [25, 20, 23, 23];
personOne.notasTrabalho = [45, 45];

console.log(personOne);

console.log(personOne.somaNotas())
console.log(personOne.mediaNotas())