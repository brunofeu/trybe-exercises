import { Request, Response } from 'express';
import Controller from '.';

import RecordStoreService from '../services/RecordStore';
import RecordStore from '../interfaces/RecordStore';

class RecordStoreController extends Controller<RecordStore> {
  constructor(service = new RecordStoreService()) {
    super(service)
  }


}

export default RecordStoreController;