class Person {
  private _name: string;
  private _birthDate: Date;

  constructor (name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) throw new Error('nome tem que ter mais que 3 caracteres')
    this._name = newName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(newBirthDate: Date) {
    console.log(newBirthDate)
    if ( newBirthDate.getTime() > new Date().getTime()) throw new Error ('data não pode ser no futuro')
    this._birthDate = newBirthDate;
  }
}

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = `${name + birthDate.getTime}`
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this.enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    this._worksGrades = value;
  }

  sumNotes(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((acc, note) => { return acc += note}, 0)
  }
}

const p1 = new Student('Carlos', new Date('1980/01/25'))
console.log(p1)
p1.examsGrades = [10, 9, 10, 9]
p1.worksGrades = [8,8]

console.log(p1.sumNotes())

// const p2 = new Person('Alberto', new Date('2020/01/25'))
// console.log(p2)

// p2.birthDate = new Date('2020/01/25')
// console.log(p2.birthDate)