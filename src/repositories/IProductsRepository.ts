import { Product } from "entities/Product";

export interface IProductsRepository {
  findAll(filters?: unknown): Promise<unknown>;
  create(product?: Product): Promise<unknown>;
  publish(id: string): Promise<unknown>;
  unpublish(id: string): Promise<unknown>;
}