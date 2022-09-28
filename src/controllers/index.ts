import { ProductController } from "./ProductsController";
import { AssetsController } from "./AssetsController";
import { createProductUseCase, getProductsUseCase, publishProductsUseCase } from "../useCases/products/";
import { createsAssetUseCase } from "../useCases/assets/";

const productsController = new ProductController(
  getProductsUseCase,
  createProductUseCase,
  publishProductsUseCase
)

const assetsController = new AssetsController(
  createsAssetUseCase,
)

export { productsController, assetsController }