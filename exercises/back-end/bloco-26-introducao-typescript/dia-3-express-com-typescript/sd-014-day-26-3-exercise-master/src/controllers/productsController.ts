import { Request, Response } from "express";
import { productsService } from "../services";

const getProduct = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);

  const product = await productsService.getProduct(id)

  res.json(product); // implicito .status(200)
}

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const products = await productsService.getAll();
  
  res.json(products);
}


export const productsController = {
  getProduct,
  getAll,
}