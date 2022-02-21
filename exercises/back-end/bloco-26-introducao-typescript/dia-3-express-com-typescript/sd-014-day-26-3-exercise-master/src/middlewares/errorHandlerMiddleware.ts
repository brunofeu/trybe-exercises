import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors';

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;
  switch (name) {
    case NotFoundError.name:
      res.status(404).json({ message })
      break
    default:
      res.status(500).json({ message })
  }
  
  next();
}

