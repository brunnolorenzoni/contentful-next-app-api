import { ProductsRepository } from "../../repositories/implementations/Contentful/ProductsRepository";
import { GetProductsUseCase } from "./GetProducts";
import { CreateProductUseCase } from "./CreateProduct";

import Contenful from '../../lib/Contenful'

const { client } = new Contenful({ space: 'j9ffre4lp502' })
const productsRepository = new ProductsRepository(client)

const getProductsUseCase = new GetProductsUseCase(
  productsRepository,
)

const createProductUseCase = new CreateProductUseCase(
  productsRepository,
)

export { getProductsUseCase, createProductUseCase }