interface Model<T> {
  create(obj: T): Promise<T>,
  readOne(id: string): Promise<T | null>,
  read(): Promise<T[]>,
  // update(): Promise<T[]>,
  delete(id: string): Promise<T | null>,
}

export default Model;