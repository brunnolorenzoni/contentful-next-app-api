import { Product } from "../entities/Product";

export interface IProductsRepository {
  findAll(): Promise<Product[] | [] | [boolean]>;
}