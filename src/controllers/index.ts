import { ProductController } from "./ProductsController";
import { createProductUseCase, getProductsUseCase } from "../useCases/products/";

const productsController = new ProductController(
  getProductsUseCase,
  createProductUseCase
)

export { productsController }