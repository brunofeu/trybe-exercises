import { Router } from "express";
import { productsController } from "../controllers";

const productRouter = Router();

productRouter.get('/products/:id', productsController.getProduct)

productRouter.get('/products', productsController.getAll)

export { productRouter };
