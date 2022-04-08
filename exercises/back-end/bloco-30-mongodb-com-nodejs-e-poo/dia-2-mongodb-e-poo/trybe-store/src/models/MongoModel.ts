import { Model as M } from 'mongoose';
import Model from '.';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T>) {}

  create = async (obj: T): Promise<T> => this.model.create({...obj}) ;
  
  readOne = async (id: string): Promise<T | null> => this.model.findOne({ _id: id });
  
  read = async (): Promise<T[]> => this.model.find();

  // update = async (): Promise<T[]> => this.model.findOneAndUpdate()

  delete = async (id: string): Promise<T | null> => this.model.findOneAndDelete({_id: id})
}