import { Product } from "../entities/Product";

export interface IProductsRepository {
  findAll(filters?: any): Promise<any>;
}