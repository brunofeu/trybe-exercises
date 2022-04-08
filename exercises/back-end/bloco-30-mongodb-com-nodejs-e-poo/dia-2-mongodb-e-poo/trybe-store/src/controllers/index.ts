import { Request, Response } from "express";
import Service from "../services";

abstract class Controller<T> {
  constructor( protected service: Service<T>) {}

  // abstract create ( req: Request, res: Response ): Promise<typeof res>;

  read = async ( req: Request, res: Response ): Promise<typeof res> => {
    const records = await this.service.read();
    return res.status(200).json(records);
  }
}

export default Controller;