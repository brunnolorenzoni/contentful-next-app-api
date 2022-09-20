import { InMemoryProductsRepository } from "../../repositories/implementations/InMemory/ProductsRepository";
import { GetProductsUseCase } from "./GetProducts";
import { CreateProductUseCase } from "./CreateProduct";

const inMemoryProductsRepository = new InMemoryProductsRepository()

const getProductsUseCase = new GetProductsUseCase(
  inMemoryProductsRepository,
)

const createProductUseCase = new CreateProductUseCase(
  inMemoryProductsRepository,
)

export { getProductsUseCase, createProductUseCase }