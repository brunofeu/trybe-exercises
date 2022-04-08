import Service, { ServiceError } from ".";
import RecordStore from "../interfaces/RecordStore";
import RecordStoreModel from "../models/RecordStore";

class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }

  create = async (obj: RecordStore): Promise<RecordStore | ServiceError | null> => {
    return this.model.create(obj)
  }

  read = async (): Promise<RecordStore[]> => {
    return this.model.read();
  } 
}

export default RecordStoreService;