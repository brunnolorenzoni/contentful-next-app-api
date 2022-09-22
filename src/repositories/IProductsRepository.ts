import { Product } from "entities/Product";

export interface IProductsRepository {
  findAll(filters?: unknown): Promise<unknown>;
  create(product?: Product): Promise<unknown>;
}