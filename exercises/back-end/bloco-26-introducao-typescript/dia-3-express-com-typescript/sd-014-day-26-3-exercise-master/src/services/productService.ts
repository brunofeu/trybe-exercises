import { NotFoundError } from "../errors";
import { Product } from "../interfaces";
import { productsModel } from "../models/productsModel";

const getProduct = async (id: number): Promise<Product> => {
  const product = await productsModel.getProduct(id);
  
  if (product) return product;
  
  throw new NotFoundError('Product not found')
}

const getAll = async (): Promise<Product[]> => {
  const products = await productsModel.getAll();
  return products;
}

export const productsService = {
  getProduct,
  getAll,
}