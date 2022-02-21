/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';
import { jsonDateParser } from 'json-date-parser';
import { Product } from "../interfaces";


const jsonFile = process.cwd() + '/src/static/products.json'

const getData = async (): Promise<Product[]> => {
  const dataBuffer = await fs.readFile(jsonFile, { encoding: 'utf8'});
  const dataString = dataBuffer.toString();
  const data: Product[] = JSON.parse(dataString, jsonDateParser)
  return data
}

// const setData = async (data: Product[]): Promise<void> => {
//   const dataString = JSON.stringify(data);
//   await fs.writeFile(jsonFile, dataString, { encoding: 'utf8'});
// }

const getProduct = async (id: number): Promise<Product> => {
  const data = await getData();
  const product = data.find(product => product.id === id);
  return product
}

const getAll = async (): Promise<Product[]> => {
  const data = await getData();
  return data;
}

export const productsModel = {
  getProduct,
  getAll,
}